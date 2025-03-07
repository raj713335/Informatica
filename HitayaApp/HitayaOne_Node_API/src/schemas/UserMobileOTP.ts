import mongoose, { Schema } from 'mongoose';

const UserMobileOTPSchema = new Schema({
    userDetailId: { type: Schema.Types.ObjectId, ref: 'User' },
    OTP: { type: String, trim: true },
    phoneNumber: { type: String, trim: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updatedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });


const UserMobileOTP = mongoose.model('UserMobileOTP', UserMobileOTPSchema);

export default UserMobileOTP;