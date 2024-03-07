const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  city: String,
  avatar: String,
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
      signedAt: {
        type: String,
        required: true,
      },
    },
  ],
  children: [
    {
      name: String,
      gender: String, 
      birthdate: Date,
      photo: String,
      hobbies: [String],
      about: String
    },
  ],
  friends: [String],
  events: [String],
  location: [String],
  isOnline: {
    type: Boolean,
    default: false,
  },
  activeUser: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    try {
      const hash = await bcrypt.hash(this.password, 8);
      this.password = hash;
      next();
    } catch (error) {
      return next(error);
    }
  } else {
    next();
  }
});

userSchema.methods.comparePassword = async function (password) {
  if (!password) throw new Error("Password is missing, cannot compare!");

  try {
    const result = await bcrypt.compare(password, this.password);
    return result;
  } catch (error) {
    console.log("Error while comparing password!", error.message);
    throw error;
  }
};

userSchema.statics.isThisEmailInUse = async function (email) {
  if (!email) throw new Error("Invalid Email");
  try {
    const user = await this.findOne({ email });
    return !user; // Return true if the email is not in use, false otherwise
  } catch (error) {
    console.log("Error inside isThisEmailInUse method", error.message);
    throw error;
  }
};

module.exports = mongoose.model("User", userSchema);
