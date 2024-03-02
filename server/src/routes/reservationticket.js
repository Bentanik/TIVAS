import express from "express";
import * as controllers from "../controllers";
const router = express.Router();

router.post("/createTicket",controllers.createTicket)
router.put("/activeTicket/:id",controllers.activeTicket)
<<<<<<< HEAD
router.put("/acceptTicket",)
router.put("/rejectTicket",)
=======
router.get("/checkTicket", controllers.checkTicket)
>>>>>>> Hien

export default router;
