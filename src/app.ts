import bodyParser from "body-parser";
import express from "express";
import { AppConfig } from "./AppConfig";

import Board from "./model/Board";
import Note from "./model/Note";
import User from "./model/User";
import { error } from "./utils/error";
import { sync } from "./model/sync";

sync()
const server = express();
server.use(bodyParser.json());
server.get("/call", async (req, res) => {
  debugger;


  //   const user = await User.create({
  //     username: "test",
  //     password: "test",
  //   });
  //   const users = await User.findAll();
  const user = (await User.findOne()) ?? error();

  const board = await Board.create({
    lastVersion: new Date(),
    title: "Sprint 3",
    UUID: "678236862378-123123123-123123",
  });
  const boards = await Board.findAll({
    where: {
      UUID: "678236862378-123123123-123123",
    },
  });

  const note = await Note.create({
    text: "My first Note",
    type: 0,
  });

  const myBoard = await Board.findOne({
    where: { UUID: "678236862378-123123123-123123" },
    include: Note,
  });
  await (myBoard as any).addNote(note);
  const notes = await (myBoard as any).getNotes();
  const boardUsers = await (user as any).getBoards();

  res.status(200).send("Done");
});
server.listen(AppConfig.SERVER_PORT);
