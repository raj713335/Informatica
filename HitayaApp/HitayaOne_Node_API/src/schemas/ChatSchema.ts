import mongoose, { Schema } from 'mongoose';

const ChatSchema = new Schema({
    chatName: { type: String, trim: true },
    isGroupChat: Boolean,
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    lastMessage: { type: Schema.Types.ObjectId, ref: 'Message' },
    isDeleted: { type: Boolean, default: false },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updatedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });


const Chat = mongoose.model('Chat', ChatSchema);
module.exports = Chat;
