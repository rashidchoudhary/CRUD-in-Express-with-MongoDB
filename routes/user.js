import express from "express";
const router = express.Router();
import UserModel from "../models/user.js";

router.post("/", async (req,res) =>{
    try{
        const data = await UserModel.create(req.body);
        res.status(200).json(data);
    } catch({message}){
        res.json({message});
    }
});

router.get("/", async (req,res) =>{
    try{
    const data = await UserModel.find();
    res.json(data);
    } catch({message}){
        res.json({message});
    }
});

router.get("/:id", async (req,res) =>{
    try{
    const data = await UserModel.findById(req.params.id);
    res.json(data);
    } catch({message}){
        res.json({message});
    }
});

router.patch("/:id", async (req,res) =>{
    try{
        const data = await UserModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(data);
    } catch({message}){
        res.json({message});
    }
});

router.delete("/:id", async (req,res) =>{
    try{
        const data = await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json(data);
    } catch({message}){
        res.json({message});
    }
});

router.delete("/", async (req, res) => {
    try {
        const result = await bookModel.deleteMany();
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
});

export default router;