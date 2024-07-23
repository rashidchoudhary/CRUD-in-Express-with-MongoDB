import mongoose from "mongoose";

const Userschema = mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, match: /\S+@\S+\.\S+/ },
    password: { type: String, required: true},
    age: { type: Number, required: true},
    isAlive: { type: Boolean, default: true },
});

const UserModel = mongoose.model("User", Userschema);

export default UserModel;