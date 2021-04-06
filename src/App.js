import React from "react";
import Header from "./components/Header";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient text-light">
      <Header />
      <Recipe />
      <Footer />
    </div>
  );
}

export default App;
