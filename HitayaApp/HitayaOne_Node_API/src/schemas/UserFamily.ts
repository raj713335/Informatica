import mongoose, { Schema } from 'mongoose';

const UserFamilySchema = new Schema({
    userDetailId: { type: Schema.Types.ObjectId, ref: 'User' },
    relationType: { type: String, trim: true },
    relationUserId: { type: Schema.Types.ObjectId, ref: 'User' },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updatedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });


const UserFamily = mongoose.model('UserFamily', UserFamilySchema);

export default UserFamily;
