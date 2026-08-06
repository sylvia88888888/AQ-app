"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const steps = [
  { label: "Front", instruction: "Face the camera directly", sub: "Eyes level, chin parallel to floor. Remove glasses if wearing any.", guide: "front" },
  { label: "Left side", instruction: "Turn your head left — 45°", sub: "Show your left cheek and jawline. Keep your chin level.", guide: "left" },
  { label: "Right side", instruction: "Now turn right — 45°", sub: "Show your right cheek and jawline. Almost done!", guide: "right" },
];

export default function ScanPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Attach stream to video whenever camera becomes active
  useEffect(() => {
    if (cameraActive && streamRef.current && videoRef.current) {
      videoRef.current.srcObject = streamRef.current;
      videoRef.current.play().catch(() => {});
    }
  }, [cameraActive]);

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false,
      });
      streamRef.current = stream;
      setCameraActive(true);
      setCameraError("");
    } catch {
      setCameraError("Camera access denied. Please allow camera permission in your browser settings and try again.");
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
      streamRef.current = null;
    }
    if (videoRef.current) videoRef.current.srcObject = null;
    setCameraActive(false);
  }, []);

  const takePhoto = useCallback(() => {
    if (!videoRef.current) return;
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth || 640;
    canvas.height = videoRef.current.videoHeight || 480;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(videoRef.current, 0, 0);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
    const newPhotos = [...photos, dataUrl];
    setPhotos(newPhotos);
    if (step < 2) {
      setStep(s => s + 1);
    } else {
      stopCamera();
      // Save photos to sessionStorage for analysis
      const allPhotos = [...photos, dataUrl];
      try {
        sessionStorage.setItem("aq-photos", JSON.stringify(allPhotos));
      } catch {}
      setAnalyzing(true);
      setTimeout(() => router.push("/goal"), 2500);
    }
  }, [photos, step, stopCamera, router]);

  const uploadPhoto = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      const newPhotos = [...photos, dataUrl];
      setPhotos(newPhotos);
      if (step < 2) {
        setStep(s => s + 1);
      } else {
        const allPhotos = [...photos, dataUrl];
        try {
          sessionStorage.setItem("aq-photos", JSON.stringify(allPhotos));
        } catch {}
        setAnalyzing(true);
        setTimeout(() => router.push("/goal"), 2500);
      }
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  }, [photos, step, router]);

  if (analyzing) return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "60px 24px" }}>
      <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
        {[0,1,2].map(i => (
          <div key={i} style={{ width: 80, height: 96, borderRadius: "40px 40px 36px 36px", overflow: "hidden", border: "1.5px solid #2563eb", background: "#f7f6f3" }}>
            {photos[i] && <img src={photos[i]} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />}
          </div>
        ))}
      </div>
      <div style={{ fontSize: 17, fontWeight: 500, marginBottom: 8 }}>Analyzing your photos</div>
      <div style={{ fontSize: 14, color: "#a09d98", marginBottom: 32 }}>Cross-referencing all 3 angles…</div>
      {[["✓","3 photos received","Done","#15803d"],["✓","Facial symmetry mapped","Done","#15803d"],["…","Laxity and volume assessed","Running","#2563eb"],["○","Matching treatments","Waiting","#a09d98"]].map(([icon,text,status,color],i) => (
        <div key={i} style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "#f7f6f3", borderRadius: 12, border: "0.5px solid #e8e6e1", marginBottom: 8 }}>
          <span style={{ color, fontSize: 16, width: 20, textAlign: "center" }}>{icon}</span>
          <span style={{ fontSize: 14, color: "#6b6863", flex: 1 }}>{text}</span>
          <span style={{ fontSize: 12, color }}>{status}</span>
        </div>
      ))}
    </div>
  );

  const current = steps[step];

  return (
    <div style={{ paddingBottom: 40 }}>
      <div style={{ display: "flex", alignItems: "center", padding: "52px 16px 12px", gap: 12 }}>
        <Link href="/" style={{ width: 34, height: 34, borderRadius: "50%", border: "0.5px solid #d0cdc7", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a1917", background: "white", textDecoration: "none", fontSize: 16, flexShrink: 0 }}>←</Link>
        <span style={{ fontSize: 17, fontWeight: 500 }}>Scan my face</span>
      </div>

      {/* Progress */}
      <div style={{ padding: "0 20px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {steps.map((s, i) => (
            <div key={s.label} style={{ display: "flex", alignItems: "center", flex: i < steps.length - 1 ? 1 : "initial", gap: 6 }}>
              <div style={{ width: 30, height: 30, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 500, flexShrink: 0, background: i < step ? "#2563eb" : i === step ? "#eff6ff" : "#f7f6f3", color: i < step ? "white" : i === step ? "#2563eb" : "#a09d98", border: `1.5px solid ${i <= step ? "#2563eb" : "#e8e6e1"}` }}>
                {i < step ? "✓" : i + 1}
              </div>
              {i < steps.length - 1 && <div style={{ flex: 1, height: 1.5, background: i < step ? "#2563eb" : "#e8e6e1" }} />}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
          {steps.map((s, i) => <span key={s.label} style={{ fontSize: 12, color: i === step ? "#2563eb" : i < step ? "#1a1917" : "#a09d98", fontWeight: i === step ? 500 : 400 }}>{s.label}</span>)}
        </div>
      </div>

      {/* Direction */}
      <div style={{ margin: "0 16px 16px", background: "#eff6ff", border: "0.5px solid #bfdbfe", borderRadius: 14, padding: "14px 16px", display: "flex", gap: 12 }}>
        <span style={{ fontSize: 26, flexShrink: 0 }}>→</span>
        <div>
          <div style={{ fontSize: 14, fontWeight: 500, color: "#2563eb", marginBottom: 4 }}>{current.instruction}</div>
          <div style={{ fontSize: 13, color: "#6b6863", lineHeight: 1.5 }}>{current.sub}</div>
        </div>
      </div>

      {/* Camera area */}
      <div style={{ margin: "0 16px 16px", borderRadius: 20, overflow: "hidden", background: "#111", position: "relative", height: 300 }}>
        {/* Video always rendered, hidden when not active */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          style={{
            position: "absolute", top: 0, left: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            transform: "scaleX(-1)",
            display: cameraActive ? "block" : "none",
          }}
        />

        {/* Face guide overlay - only when camera active */}
        {cameraActive && (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
            <div style={{
              width: current.guide === "front" ? 145 : 125,
              height: current.guide === "front" ? 178 : 162,
              borderRadius: current.guide === "front" ? "50% 50% 45% 45%" : current.guide === "left" ? "50% 30% 35% 50%" : "30% 50% 50% 35%",
              border: "2px solid rgba(255,255,255,0.85)",
              boxShadow: "0 0 0 2000px rgba(0,0,0,0.4)",
            }} />
          </div>
        )}

        {/* Placeholder when no camera */}
        {!cameraActive && (
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            {photos[step] ? (
              <img src={photos[step]} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
            ) : (
              <>
                <div style={{ fontSize: 52, opacity: 0.25, marginBottom: 10 }}>📷</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>Tap below to open camera</div>
              </>
            )}
          </div>
        )}
      </div>

      {cameraError && (
        <div style={{ margin: "0 16px 12px", padding: "12px 14px", background: "#fff1f2", border: "0.5px solid #fecdd3", borderRadius: 12, fontSize: 13, color: "#be123c", lineHeight: 1.5 }}>
          {cameraError}
        </div>
      )}

      {/* Thumbnails */}
      <div style={{ padding: "0 16px 16px", display: "flex", gap: 10 }}>
        {steps.map((s, i) => (
          <div key={s.label} style={{ flex: 1, height: 76, borderRadius: 12, overflow: "hidden", background: "#f7f6f3", border: i === step ? "1.5px solid #2563eb" : i < step ? "0.5px solid #2563eb" : "0.5px solid #e8e6e1", position: "relative" }}>
            {photos[i] ? (
              <>
                <img src={photos[i]} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
                <div style={{ position: "absolute", top: 4, right: 4, width: 18, height: 18, borderRadius: "50%", background: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "white" }}>✓</div>
              </>
            ) : (
              <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}>
                <span style={{ fontSize: 20, color: i <= step ? "#2563eb" : "#a09d98" }}>📷</span>
                <span style={{ fontSize: 11, color: i <= step ? "#2563eb" : "#a09d98", fontWeight: i === step ? 500 : 400 }}>{s.label}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Action buttons */}
      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 10 }}>
        {cameraActive ? (
          <>
            <button onClick={takePhoto} style={{ width: "100%", padding: "16px", borderRadius: 13, background: "#2563eb", color: "white", fontSize: 16, fontWeight: 500, border: "none", cursor: "pointer" }}>
              📸 Capture {current.label.toLowerCase()} photo
            </button>
            <button onClick={stopCamera} style={{ width: "100%", padding: "14px", borderRadius: 13, background: "#f7f6f3", color: "#6b6863", fontSize: 14, border: "0.5px solid #e8e6e1", cursor: "pointer" }}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button onClick={startCamera} style={{ width: "100%", padding: "16px", borderRadius: 13, background: "#2563eb", color: "white", fontSize: 16, fontWeight: 500, border: "none", cursor: "pointer" }}>
              📷 Open camera
            </button>
            <label style={{ width: "100%", padding: "14px", borderRadius: 13, background: "#f7f6f3", color: "#1a1917", fontSize: 14, fontWeight: 500, border: "0.5px solid #e8e6e1", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              🖼 Upload from library
              <input type="file" accept="image/*" capture="user" onChange={uploadPhoto} style={{ display: "none" }} />
            </label>
          </>
        )}
      </div>

      <div style={{ padding: "14px 16px 0", display: "flex", gap: 10 }}>
        <span style={{ fontSize: 14, flexShrink: 0 }}>🔒</span>
        <span style={{ fontSize: 12, color: "#a09d98", lineHeight: 1.6 }}>Photos are processed locally and never stored or shared.</span>
      </div>
    </div>
  );
}
