import NoteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
  const s1 = {
    name: "Akhi",
    class: "8b",
  };
  const [state, setState] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setState({
        name: "Akhilesh",
        class: "10b",
      });
    }, 1000);
  };
  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
