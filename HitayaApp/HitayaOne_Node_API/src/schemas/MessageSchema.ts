import mongoose, { Schema } from 'mongoose';

const MessageSchema = new Schema({
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, trim: true },
    chat: { type: Schema.Types.ObjectId, ref: 'Chat' },
    chatMedia: [{ type: String, trim: true }],
    readBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    important: { type: Boolean, default: false },
    reactions: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    isDeleted: { type: Boolean, default: false },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updatedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });


const Message = mongoose.model('Message', MessageSchema);

export default Message;
