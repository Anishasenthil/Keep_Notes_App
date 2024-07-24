import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItem] = useState([]);

  function addItem(note) {
    setItem((prev) => {
      return [...prev, note];
    });
  }

  function deleteItem(delId) {
    setItem((prevNote) => {
      return prevNote.filter((value, index) => {
        return index !== delId;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {items.map((newnote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={newnote.title}
            content={newnote.content}
            onDelete={deleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
