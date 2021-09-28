import React from "react";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Container fixed>
        <nav className="navbar-container">
          <section>
            <h1>Redux Fundamentals</h1>
          </section>
        </nav>
        <main>
          <section className="medium-container">
            <h2>TODOs</h2>
            <Card sx={{ minWidth: 275 }} variant="outlined">
              <CardContent>
                <div className="todoapp">
                  <Header />
                  <TodoList />
                  <Footer />
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </Container>
    </div>
  );
}

export default App;
