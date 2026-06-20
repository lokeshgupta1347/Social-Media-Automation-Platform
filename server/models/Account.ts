import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    platform: { type: String, enum: ["twitter", "linkedin", "facebook", "instagram", "facebook page", "linkedin page", "instagram business"], required: true },
    handle: { type: String, required: true },
    zohoAccountId: { type: String },
    accessToken: { type: String },
    refreshToken: { type: String },
    tokenExpiresAt: { type: Date },
    states: { type: String, enum: ["connected", "disconnected"], default: "connected" },
    avatarUrl: { type: String },
}, { timestamps: true })

export const Account = mongoose.models.Account || mongoose.model("Account", accountSchema)