import { Router, Response, Request } from "express";
import { getGuitarAll, getGuitarById, getGuitarByCategory } from "./controller";

export const routes: Router = Router();

routes.get("/", async (req: Request, res: Response) => {
  res.send(await getGuitarAll());
});

routes.get("/:id", async (req: Request, res: Response) => {
  if (isNaN(parseInt(req.params.id))) {
    res.send(await getGuitarByCategory(req.params.id));
  } else {
    res.send(await getGuitarById(parseInt(req.params.id)));
  }
});
