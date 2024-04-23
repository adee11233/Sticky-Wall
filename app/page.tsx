"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Plus } from "lucide-react";
import StickyPaper from "./StickyPaper";

export type Paper = {
  title: string;
  content: string;
  id: string;
  color: string;
};
const colors = [
  "bg-red-300",
  "bg-orange-300",
  "bg-amber-300",
  "bg-yellow-400",
  "bg-lime-300",
  "bg-green-300",
  "bg-emerald-300",
  "bg-teal-300",
  "bg-cyan-300",
  "bg-sky-300",
  "bg-rose-300",
];

function App() {
  const [notes, setNotes] = useState<Paper[]>([
    {
      title: "New title",
      content: "New content",
      id: nanoid(),
      color: noteRandomColor(),
    },
  ]);

  function removeNote(id: string) {
    const newNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(newNotes);
    const newNotesJson = JSON.stringify(newNotes);
    localStorage.setItem("key", newNotesJson);
  }

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
    const notesJson = JSON.stringify(notes);
    localStorage.setItem("key", notesJson);
  }
  useEffect(() => {
    console.log("first");
  }, [notes]);

  useEffect(() => {
    const notesJson = localStorage.getItem("key");
    if (notesJson) {
      setNotes(JSON.parse(notesJson));
    }
  }, []);

  function noteRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  function addNote() {
    const newNote: Paper = {
      title: "New Title",
      content: "New Content",
      id: nanoid(),
      color: noteRandomColor(),
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  return (
    <div className=" w-full min-h-screen  p-5 flex flex-col  gap-4 bg-violet-200">
      <p className="text-4xl font-bold flex flex-row">Sticky Wall</p>
      <div className=" w-full h-full rounded-1xl flex flex-wrap gap-4 mt-4 ">
        {notes.map((note) => {
          return (
            <StickyPaper
              note={note}
              key={note.id}
              saveNote={saveNote}
              removeNote={removeNote}
            />
          );
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
