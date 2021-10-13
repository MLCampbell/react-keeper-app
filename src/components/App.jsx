import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteList, setNoteList] = useState([]);

  function handleAdd(newNote) {
    setNoteList(prevNotes => {
      return [...prevNotes, newNote]
    })
  };

  function handleDelete(id) {
    setNoteList(prevNotes => {
      return prevNotes.filter((note, index) => index !== id)
    })
  };

  return (
    <div>
      <Header />

      <CreateArea
        onAdd={handleAdd} />
      {noteList.map((noteItem, index) => {
        return <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={handleDelete}
        />
      })}

      <Footer />
    </div>
  );
}

export default App;
