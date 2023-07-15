import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //GET all Notes
  const getNotes = async () => {
    //Api Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5YmVlNThlYWM1Y2UwNmE4MGNiMzBhIn0sImlhdCI6MTY4Nzk0OTA3OX0.oYSAbWP9AUjNvhY11ZM2fN768w9_zkvzb-fCcptT4hg",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };
  //Add a Note
  const addNote = async (title, description, tag) => {
    //Api Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5YmVlNThlYWM1Y2UwNmE4MGNiMzBhIn0sImlhdCI6MTY4Nzk0OTA3OX0.oYSAbWP9AUjNvhY11ZM2fN768w9_zkvzb-fCcptT4hg",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = {
      _id: "649d17ef772a3177dadfb083",
      user: "649bee58eac5ce06a80cb30a",
      title: title,
      description: description,
      tag: tag,
      date: "2023-06-29T05:34:39.571Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = async (id) => {
    //Api Call
    const response = await fetch(`${host}/api/notes/deletnote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5YmVlNThlYWM1Y2UwNmE4MGNiMzBhIn0sImlhdCI6MTY4Nzk0OTA3OX0.oYSAbWP9AUjNvhY11ZM2fN768w9_zkvzb-fCcptT4hg",
      },
    });
    const json = response.json();
    console.log(json);
    console.log("Deleting notes with ID" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //Api Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5YmVlNThlYWM1Y2UwNmE4MGNiMzBhIn0sImlhdCI6MTY4Nzk0OTA3OX0.oYSAbWP9AUjNvhY11ZM2fN768w9_zkvzb-fCcptT4hg",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
