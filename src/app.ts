import bodyParser from "body-parser";
import express from "express";
import { AppConfig } from "./AppConfig";
import { Board } from "./model/Board";
import { Note } from "./model/Note";
import { User } from "./model/User";
import { Vote } from "./model/Vote";
import { error } from "./utils/error";

Board.sync();
Note.sync();
User.sync();
Vote.sync();
const server = express();
server.use(bodyParser.json());
server.get("/call", async (_, res) => {
  debugger;

  // find the first user
  const user = (await User.findOne()) ?? error();

  // get all boards from the user. As User and Board have a m to n relation, the boards can be get from a user
  const boards = await user.getBoards();

  // find a Note by its id
  const note = (await Note.findOne({ where: { id: 10 } })) ?? error();

  // get all boards of that note. As Board and Note have a 1 to n relation, the boards can be get from the note
  const board = await note.getBoard();

  // get all notes from the board as they still have a 1 to n relation.
  // In addition it is possible to eager load all Votes of the notes with one select by including the relations which should be loaded additionally.
  const notes = await board.getNotes({ include: Vote });

  // create a new Vote and set its related objects Note and User
  const vote = await Vote.create({ type: 1 });
  vote.setNote(note);
  vote.setUser(user);

  // selecting a note and the corresponding board (eager loading)
  // Therefore Note has to have a property board?: NonAttribute<Board>
  // The advantage is, that the note and its referred Board can be loaded with one select
  const updateNote = await Note.findOne({
    include: Board,
    where: { id: 10 },
  });
  updateNote?.board;

  res.status(200).send("Done");
});
server.listen(AppConfig.SERVER_PORT);
