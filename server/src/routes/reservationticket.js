import express from "express";
import * as controllers from "../controllers";
const router = express.Router();

router.post("/paymentreservation", controllers.paymentReservation);
router.post("/createTicket", controllers.createTicket);
router.put("/activeTicket/:id", controllers.activeTicket);
router.get("/checkPriority/:id", controllers.checkPriority);
//router.get("/checkTicket", controllers.checkTicket)

router.post("/createReservation", controllers.createReservation);

router.get("/getTimeSharePriority/:userID", controllers.getTimeSharePriority);

router.get("/getUserTickets/:id",controllers.getUserTickets)

//router.get("/getUserFailedTickets/:id", controllers.getUserFailedTickets)

router.get("/getUserBuyTickets/:id", controllers.getUserBuyTickets)

router.get("/getAllUserNoPriority/:id", controllers.getAllUserNoPriority)

router.get("/getAllUserPriority/:id", controllers.getAllUserPriority)

//router.get("/getAllFailedTickets/:id", controllers.getAllFailedTickets)

router.get("/getAllTicketsByUser/:id", controllers.getAllTicketsByUser)

export default router;
