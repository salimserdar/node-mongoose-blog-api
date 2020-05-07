const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "User" },
    title: {
      type: String,
      required: [true, "`{PATH}` has to be filled."],
      maxlength: [
        30,
        "`{PATH}` alanı (`{VALUE}`), ({MAXLENGTH}) karakterden küçük olmalıdır ",
      ],
      minlength: [
        3,
        "`{PATH}` alanı (`{VALUE}`), ({MINLENGTH}) karakterden büyük olmalıdır.",
      ],
    },
    content: {
      type: String,
      required: [true, "`{PATH}` alanı zorunludur."],
      minlength: [
        5,
        "`{PATH}` alanı (`{VALUE}`), ({MINLENGTH}) karakterden büyük olmalıdır.",
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
