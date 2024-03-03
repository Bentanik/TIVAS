import express from "express";
import * as controllers from "../controllers";
const router = express.Router();

router.put("/openReservationTicket/:id",controllers.openReservationTicket)
router.post("/createTicket",controllers.createTicket)
router.put("/activeTicket/:id",controllers.activeTicket)
router.get("/checkTicket", controllers.checkTicket)
router.get("/checkPriority/:id",controllers.checkPriority)

export default router;
