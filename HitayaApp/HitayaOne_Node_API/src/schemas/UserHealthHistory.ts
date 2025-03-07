import mongoose, { Schema } from 'mongoose';

const UserHealthHistorySchema = new Schema({
    userDetailId: { type: Schema.Types.ObjectId, ref: 'User' },
    healthIssue: { type: String, trim: true },
    treatedFrom: { type: String, trim: true },
    treatedTo: { type: String, trim: true },
    treatedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updatedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });


const UserHealthHistory = mongoose.model('UserHealthHistory', UserHealthHistorySchema);

export default UserHealthHistory;
