import express, { Router, Request, Response } from "express";
import { createTask, getTaskAll, getTaskById } from "./controller";

export const routes: Router = Router();

routes.use(express.json());

routes.get("/", async (req: Request, res: Response) => {
  res.send(await getTaskAll());
});

routes.get("/:id", async (req: Request, res: Response) => {
  res.send(await getTaskById(parseInt(req.params.id)));
});

routes.post("/", async (req: Request, res: Response) => {
  // console.log(req.body);
  // res.send(req.body);
  res.send(await createTask(req.body as Object));
});
