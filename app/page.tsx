"use client";

import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import Link from "next/link";
import Header from "./components/Header";

Amplify.configure(outputs);

export default function App() {
  return (
    <main>
      <Header/>
      <div id="imgDiv">
        <img src="https://tse1.mm.bing.net/th/id/OIP.3JAvD_D10Kco9whN7NjJ3wHaId?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"/>
      </div>

      <footer>
        <Link id="signIn" href="/character_analysis">Want access to individual character analysis? Sign in for free!</Link>
      </footer>
      
    </main>
  );
  // talm bout sum couldnt get auth to work, amplify to deploy,
  // api to show, or import tw css
}