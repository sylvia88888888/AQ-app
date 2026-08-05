import { TreatmentDetail } from "../shared";

export default function Page({ searchParams }: { searchParams: { match?: string } }) {
  const matchScore = searchParams.match ? Number(searchParams.match) : null;
  return <TreatmentDetail slug="dental-bonding" matchScore={matchScore} />;
}
