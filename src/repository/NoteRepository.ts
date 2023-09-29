import { Board } from "../model/Board";
import { Note } from "../model/Note";
import { IBoard } from "../shared/IBoard";
import { INote } from "../shared/INote";
import { ChildRepository } from "./core/ChildRepository";

class NoteRepositoryDefault extends ChildRepository<INote, IBoard> {
  constructor() {
    super(Note, Board);
  }
}

export const NoteRepository = new NoteRepositoryDefault();
