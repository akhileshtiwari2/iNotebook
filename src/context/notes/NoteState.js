import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "649d17ef772a3177dadfb713",
      user: "649bee58eac5ce06a80cb30a",
      title: "book",
      description: "This is my details",
      tag: "personal",
      date: "2023-06-29T05:34:39.571Z",
      __v: 0,
    },
    {
      _id: "649d17ef772a3177dadfb023",
      user: "649bee58eac5ce06a80cb30a",
      title: "book",
      description: "This is my details",
      tag: "personal",
      date: "2023-06-29T05:34:39.571Z",
      __v: 0,
    },
    {
      _id: "649d17ef772a3177dadfb033",
      user: "649bee58eac5ce06a80cb30a",
      title: "book",
      description: "This is my details",
      tag: "personal",
      date: "2023-06-29T05:34:39.571Z",
      __v: 0,
    },
    {
      _id: "649d17ef772a3177dadfb043",
      user: "649bee58eac5ce06a80cb30a",
      title: "book",
      description: "This is my details",
      tag: "personal",
      date: "2023-06-29T05:34:39.571Z",
      __v: 0,
    },
    {
      _id: "649d17ef772a3177dadfb053",
      user: "649bee58eac5ce06a80cb30a",
      title: "book",
      description: "This is my details",
      tag: "personal",
      date: "2023-06-29T05:34:39.571Z",
      __v: 0,
    },
    {
      _id: "649d17ef772a3177dadfb063",
      user: "649bee58eac5ce06a80cb30a",
      title: "book",
      description: "This is my details",
      tag: "personal",
      date: "2023-06-29T05:34:39.571Z",
      __v: 0,
    },
    {
      _id: "649d17ef772a3177dadfb073",
      user: "649bee58eac5ce06a80cb30a",
      title: "book",
      description: "This is my details",
      tag: "personal",
      date: "2023-06-29T05:34:39.571Z",
      __v: 0,
    },
    {
      _id: "649d17ef772a3177dadfb083",
      user: "649bee58eac5ce06a80cb30a",
      title: "book",
      description: "This is my details",
      tag: "personal",
      date: "2023-06-29T05:34:39.571Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
