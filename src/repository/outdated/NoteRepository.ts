import { Board } from "../../model/outdated/Board";
import { Note } from "../../model/outdated/Note";
import { IBoard } from "../../shared/outdated/IBoard";
import { INote } from "../../shared/outdated/INote";
import { ChildRepository } from "./core/ChildRepository";

class NoteRepositoryDefault extends ChildRepository<INote, IBoard> {
  constructor() {
    super(Note, Board);
  }
}

export const NoteRepository = new NoteRepositoryDefault();
