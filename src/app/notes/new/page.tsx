"use client"

import React from "react";
import NoteEditor from "../../../components/NoteEditor";

const NewNotePage = () => {

  return (
    <div className="p-4">
      <h1>Create a New Note</h1>
      <NoteEditor />
    </div>
  );
};

export default NewNotePage;
