import bodyParser from "body-parser";
import express from "express";
import path from "path";
import { commentsRouter } from "./routes/commentsRoute";
import { postsRouter } from "./routes/postsRoute";
import { usersRouter } from "./routes/usersRoute";

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(process.cwd(), "public")));

app.use("/Users", usersRouter);
app.use("/Post", postsRouter);
app.use("/Comments", commentsRouter);

app.use("/", (req, res, next) => {
  res.sendFile(path.join(process.cwd() + "/public/views/index.html"));
});

app.listen(3000);
