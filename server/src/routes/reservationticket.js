import express from "express";
import * as controllers from "../controllers";
const router = express.Router();

router.post("/createTicket",controllers.createTicket)
router.put("/activeTicket/:id",controllers.activeTicket)
//router.get("/checkTicket", controllers.checkTicket)

router.post("/createReservation", controllers.createReservation)

router.put("/checkPriority/:projectID", controllers.checkPriority)

export default router;
