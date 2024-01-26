import { notFound } from "../middlewares/handle_errors";
import auth from "./auth";
import user from "./user";
import project from "./project"

const initRoutes = (app) => {
  app.use("/api/v1/auth", auth);
  app.use("/api/v1/user", user);
  app.use("/api/v1/project", project);

  app.use(notFound);
};

export default initRoutes;
