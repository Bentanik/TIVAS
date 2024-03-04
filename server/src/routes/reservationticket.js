import express from "express";
import * as controllers from "../controllers";
const router = express.Router();

router.post("/createTicket",controllers.createTicket)
router.put("/activeTicket/:id",controllers.activeTicket)
router.get("/checkPriority/:id",controllers.checkPriority)
//router.get("/checkTicket", controllers.checkTicket)

router.post("/createReservation", controllers.createReservation)

router.get("/getTimeSharePriority/:userID", controllers.getTimeSharePriority)

export default router;
