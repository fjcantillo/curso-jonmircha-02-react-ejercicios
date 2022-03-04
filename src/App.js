import React from "react";
import CrudApp from "./components/CrudApp";
import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";
import SelectsAnidados from "./components/SelectsAnidados";
import ContactForm from "./components/ContactForm";
import Modals from "./components/Modals";

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
        <hr />
        <Modals />
        <hr />
        <ContactForm />
        <hr />
        <SelectsAnidados />
        <hr />
        <SongSearch />
        <hr />
        <CrudApi />
        <hr />
        <CrudApp />
    </>
  )
}

export default App;
