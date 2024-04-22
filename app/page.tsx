"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Plus } from "lucide-react";
import StickyPaper from "./StickyPaper";

export type Paper = {
  title: string;
  content: string;
  id: string;
};

function App() {
  const [hovered, setHovered] = useState(false);
  const [notes, setNotes] = useState<Paper[]>([
    { title: "New title", content: "New content", id: nanoid() },
  ]);

  function saveNote({ title, content, id }: Paper) {
    setNotes((prevNotes) =>
      prevNotes.map((note) => {
        if (note.id === id) {
          note.title = title;
          note.content = content;
        }
        return note;
      })
    );
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const buttonStyle = {
    backgroundColor: hovered ? getRandomColor() : "blue",
  };

  function addNote() {
    const newNote: Paper = {
      title: "New Title",
      content: "New Content",
      id: nanoid(),
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  return (
    <div className=" w-full h-screen p-5 flex flex-col  gap-4 bg-violet-200">
      <p className="text-4xl font-bold flex flex-row">Sticky Wall</p>
      <div className=" w-full h-full rounded-1xl flex flex-wrap gap-4 mt-4 ">
        {notes.map((note) => {
          return <StickyPaper note={note} key={note.id} saveNote={saveNote} />;
        })}

        <button
          onClick={addNote}
          className=" group  box bg-slate-200  items-center justify-center "
        >
          <Plus className="w-1/3 h-1/3 group-hover:rotate-90 transition-transform text-black " />
        </button>
      </div>
    </div>
  );
}

export default App;
