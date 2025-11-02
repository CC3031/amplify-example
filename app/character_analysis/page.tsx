"use client";
import BerserkCharacters from "../components/BerserkCharacters";
import "../app.css";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from '@aws-amplify/ui-react';

export default function CharacterAnalysisPage() {
  return (
    <Authenticator>
        {() => (
          <div style={{ padding: "20px", background: "#111", color: "#fff", minHeight: "100vh" }}>
            <h1>Character Analysis</h1>
            <BerserkCharacters />
          </div>
        )}
    </Authenticator>
    
  );
}
