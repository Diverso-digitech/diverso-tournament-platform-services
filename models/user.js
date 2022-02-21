import mongoose from "mongoose";

const Schema = mongoose.Schema
const Types = Schema.Types

const userSchema = new Schema({
    mobile: { type: Types.String, trim: true, required: true, unique: true },
    name: { type: Types.String, trim: true, required: true, minlength: 4, maxlength: 15, text: true },
})

export const User = mongoose.model('user', userSchema, 'users')
