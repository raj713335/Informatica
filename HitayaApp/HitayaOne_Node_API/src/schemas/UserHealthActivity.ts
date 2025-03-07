import mongoose, { Schema } from 'mongoose';

const UserHelthActivitySchema = new Schema({
    userDetailId: { type: Schema.Types.ObjectId, ref: 'User' },
    activityType: { type: String, trim: true },
    intensity: { type: String, trim: true },
    date: { type: String, trim: true },
    to: { type: String, trim: true },
    from: { type: String, trim: true },
    distance: { type: String, trim: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updatedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });


const UserHelthActivity = mongoose.model('UserHelthActivity', UserHelthActivitySchema);

export default UserHelthActivity;