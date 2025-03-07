import mongoose, { Schema } from 'mongoose';

const UserEmailOTPSchema = new Schema({
    userDetailId: { type: Schema.Types.ObjectId, ref: 'User' },
    OTP: { type: String, trim: true },
    email: { type: String, trim: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updatedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });


const UserEmailOTP = mongoose.model('UserEmailOTP', UserEmailOTPSchema);

export default UserEmailOTP;
