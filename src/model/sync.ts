import Board from "./Board";
import Note from "./Note";
import User from "./User";
import Vote from "./Vote";

export const sync = async () => {
  const force = false;
  await Board.sync({ force });
  await Note.sync({ force });
  await User.sync({ force });
  await Vote.sync({ force });
};
