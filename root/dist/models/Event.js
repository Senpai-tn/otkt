"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const eventSchema = new mongoose_1.Schema({ title: String }, { timestamps: true });
const Event = mongoose_1.models.events || (0, mongoose_1.model)("events", eventSchema);
exports.default = Event;
