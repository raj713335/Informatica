import mongoose, { Schema } from 'mongoose';

const UserInterestSchema = new Schema({
    interestType: { type: String, required: true, trim: true, unique: true },
    userInterested: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    isDeleted: { type: Boolean, default: false },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updatedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });


const UserInterest = mongoose.model('UserInterest', UserInterestSchema);

export default UserInterest;
