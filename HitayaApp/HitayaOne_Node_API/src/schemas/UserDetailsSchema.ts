import mongoose, { Schema } from 'mongoose';
import { user } from '../interfaces/user';

const UserDetailsSchema = new Schema({
    userDetailId: { type: Schema.Types.ObjectId, ref: 'User' },
    firstName: { type: String, trim: true, default: null },
    middleName: { type: String, trim: true, default: null },
    lastName: { type: String, trim: true, default: null },
    gender: { type: String, trim: true, default: null },
    dob: { type: Date, default: null },
    profilePic: { type: String, default: '/images/profilePic.png' },
    coverPhoto: { type: String, default: null },
    lastActive: { type: Date, trim: true, default: null },
    isPremium: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false }, 
    bio: { type: String },
    userInterest: [{ type: Schema.Types.ObjectId, ref: 'UserInterest' }],
    usageFreg:{ type: String, trim: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updatedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

const UserDetails = mongoose.model<user>('UserDetails', UserDetailsSchema);

export default UserDetails;
