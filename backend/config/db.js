import mongoose from "mongoose";

export const connectDB =async ()=>{
    await mongoose.connect('mongodb+srv://Ifty7:Afnan1234@ifty7.y2uxoep.mongodb.net/').then(()=>console.log("DB connected"))
}