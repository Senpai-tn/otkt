import { Schema, model, models } from "mongoose";

const eventSchema = new Schema({ title: String }, { timestamps: true });

const Event = models.events || model("events", eventSchema);

export default Event;
