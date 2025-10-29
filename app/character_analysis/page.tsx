import BerserkCharacters from "../components/BerserkCharacters";

export default function CharacterAnalysisPage() {
  return (
    <div style={{ padding: "20px", background: "#111", color: "#fff", minHeight: "100vh" }}>
      <h1>Character Analysis</h1>
      <BerserkCharacters />
    </div>
  );
}
