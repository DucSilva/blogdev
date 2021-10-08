import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add your name"],
        trim: true,
        maxLength: [20, "Your name is up to 20 chars long."]
    },
    account: {
        type: String,
        required: [true, "Please add your password"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please add your email or phone"],
        minLength: [6, "Password must be at least 6 chars."],
    },
    avatar: {
        type: String,
       default: 'https://res.cloudinary.com/dxs1zdei2/image/upload/v1633582693/avatar_default.png'
    },
    role: {
        type: String,
        default: 'user'
    },
    type: {
        type: String,
        default: 'normal'
    }
}, {
    timestamps: true
});

export default mongoose.model('User', userSchema);