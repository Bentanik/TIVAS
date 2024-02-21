import { notFound } from "../middlewares/handle_errors";
import auth from "./auth";
import user from "./user";
import project from "./project";
import room from "./room";
import typeroom from "./typeroom"

const initRoutes = (app) => {
  app.use("/api/v1/auth", auth);
  app.use("/api/v1/user", user);
  app.use("/api/v1/project", project);
  app.use("/api/v1/typeroom", typeroom);
  app.use("/api/v1/room", room);

  app.use(notFound);
};

export default initRoutes;
