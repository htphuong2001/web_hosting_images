const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    trim: true,
    min: 2,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    min: 6,
  },
  key: {
    type: String,
    required: true,
    trim: true,
  },
});

UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.isCheckPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    next(error);
  }
};

module.exports = mongoose.model("User", UserSchema);
