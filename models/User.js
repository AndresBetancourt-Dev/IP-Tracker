const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    IP: {
      type: String,
    },
    Voted : {
        type : Boolean
    }
  },{ timestamps: true });

module.exports = model("User", UserSchema);
