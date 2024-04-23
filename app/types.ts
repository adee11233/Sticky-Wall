import { Paper } from "./page";

export interface StickyPaperProps {
  //

  note: Paper;
  saveNote: (note: Paper) => void;
  removeNote: (id: string) => void;
}
