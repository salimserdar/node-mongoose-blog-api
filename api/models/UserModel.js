const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, '`{PATH}` You have to add title.'],
        unique: [true, 'This user is already exist.'],
        maxlength: [15, '`{PATH}` alanı (`{VALUE}`), ({MAXLENGTH}) karakterden küçük olmalıdır '],
        minlength: [5, '`{PATH}` alanı (`{VALUE}`), ({MINLENGTH}) karakterden büyük olmalıdır.'],
    },
    password: {
        type: String,
        required: [true, '`{PATH}` alanı zorunludur.'],
    },
    eMail: {
        type: String,
        required: [true, '`{PATH}` alanı zorunludur.'],
        unique: [true, 'This user is already exist.'],
        minlength: [8, '`{PATH}` alanı (`{VALUE}`), ({MINLENGTH}) karakterden büyük olmalıdır.'],
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);