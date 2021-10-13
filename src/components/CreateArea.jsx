import React, { useState } from "react";
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [inputClicked, setInputClicked] = useState(false);



  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  };

  function addNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: ""
    })
  };



  function showInput() {
    setInputClicked(true);
  }

  return (
    <div>
      <form className="create-note">
        {inputClicked && <input value={note.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />}


        <textarea
          onFocus={showInput}
          value={note.content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={inputClicked ? 3 : 1}
        />
        <Zoom in={inputClicked}>
          <Fab>
            <AddIcon type="button" onClick={addNote} />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
