import express from "express";
import * as controllers from "../controllers";
const router = express.Router();

router.post("/createTicket",controllers.createTicket)
router.put("/activeTicket/:id",controllers.activeTicket)
router.get("/checkTicket", controllers.checkTicket)

export default router;
