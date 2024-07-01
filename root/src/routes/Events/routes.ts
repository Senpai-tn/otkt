import { Router } from "express";
import Event from "../../models/Event";
const router = Router();

router.get("/", async (req, res) => {
  const events = await Event.find();
  res.send(events);
});

router.post("/", async (req, res) => {});
router.put("/", async (req, res) => {});
router.patch("/", async (req, res) => {});

router.delete("/", async (req, res) => {
  const { id } = req.body;
  res.send(id);
});

export default router;
