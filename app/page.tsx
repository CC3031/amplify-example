"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from '@aws-amplify/ui-react';

Amplify.configure(outputs);
const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  return (
    <main>
      <header>
        <h1>Berserk Arc Analysis Website</h1>
        <nav>
          <a className="links" href="">Black Swordsman</a>
          <a className="links" href="">Golden Age</a>
          <a className="links" href="">Conviction</a>
          <a className="links" href="">Falcon of the Millennium</a>
          <a className="links" href="">Fantasia</a>

        </nav>
      </header>
      <div id="imgDiv">
        <img src="https://tse1.mm.bing.net/th/id/OIP.3JAvD_D10Kco9whN7NjJ3wHaId?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"/>
      </div>

      <footer>
        <a id="signIn" href="">Want access to individual character analysis? Sign in for free!</a>
        {/* Authentication here */}
        <a className="links" href="">Character Analysis</a>
        
      </footer>
      
    </main>
  );
}



/*
return (
    <Authenticator>
      {({ signOut, user }) => (

    </Authenticator>
  );
*/