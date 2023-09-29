import { Board } from "../model/Board";
import { IBoard } from "../shared/IBoard";
import { ParentRepository } from "./core/ParentRepository";

class BoardRepositoryDefault extends ParentRepository<IBoard> {
  constructor() {
    super(Board);
  }
}

export const BoardRepository = new BoardRepositoryDefault();
