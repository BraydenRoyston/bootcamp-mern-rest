import mongoose from "mongoose";

const User = mongoose.model("User", new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        }
    }
));

export default User;