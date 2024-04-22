import { useState } from "react";
import { StickyPaperProps } from "./types";

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

function StickyPaper({ note, saveNote }: StickyPaperProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  function noteRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const handleSaveNote = () => {
    saveNote({
      title: title,
      content: content,
      id: note.id,
    });
    setIsEdit(false);
  };

  return (
    <div className={`box justify-between text-pretty ${noteRandomColor()}`}>
      <div className="flex flex-col gap-2">
        {isEdit ? (
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="w-full h-10 rounded-md px-4 flex flex-col p-4 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 duration-500 gap-2 font-bold text-2xl"
          />
        ) : (
          <div className="font-bold text-2xl">{title}</div>
        )}

        {isEdit ? (
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className="w-full h-10 rounded-md px-4 flex flex-col p-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 whitespace-pre-line resize-none overflow-hidden gap-2 text-justify"
          />
        ) : (
          <div className="break-all">{content}</div>
        )}
      </div>

      {isEdit ? (
        <button
          className="bg-pink-200 hover:bg-pink-300 rounded-md duration-300 p-2"
          onClick={handleSaveNote}
        >
          Save
        </button>
      ) : (
        <button
          className="bg-sky-200 hover:bg-sky-300 rounded-md duration-300 justify-end items-end p-2"
          onClick={() => setIsEdit(true)}
        >
          Edit
        </button>
      )}
    </div>
  );
}

export default StickyPaper;
