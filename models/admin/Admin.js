import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Types = Schema.Types;

const adminSchema = new Schema({
  mobile: { type: Types.String, trim: true, required: true, unique: true },
  email: { type: Types.String, trim: true, required: true, unique: true },
  name: {
    type: Types.String,
    trim: true,
    required: false,
    minlength: 4,
    maxlength: 25,
    text: true,
  },
  password: { type: Types.String, trim: true, required: true },
  organizationName: { type: Types.String, trim: true, required: true },
  joiningDate: { type: Types.Date, required: true },
});

//fire a function before doc saved to db
adminSchema.pre("save", async function (next) {
  // Using function(){} because now we can use this
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Static method to login user
adminSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

export const Admin = mongoose.model("admin", adminSchema, "Admin");
