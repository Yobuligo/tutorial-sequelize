import { Board } from "../../model/outdated/Board";
import { IBoard } from "../../shared/outdated/IBoard";
import { ParentRepository } from "./core/ParentRepository";

class BoardRepositoryDefault extends ParentRepository<IBoard> {
  constructor() {
    super(Board);
  }
}

export const BoardRepository = new BoardRepositoryDefault();
