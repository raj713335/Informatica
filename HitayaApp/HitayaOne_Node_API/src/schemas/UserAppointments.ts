import mongoose, { Schema } from 'mongoose';

const UserAppointmentsSchema = new Schema({
    userDetailId: { type: Schema.Types.ObjectId, ref: 'User' },
    healthIssue: { type: String, trim: true },
    date: { type: String, trim: true },
    timeFrom: { type: String, trim: true },
    timeTo: { type: String, trim: true },
    place: { type: String, trim: true },
    treatedBy: { type: String, trim: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updatedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });


const UserAppointments = mongoose.model('UserAppointments', UserAppointmentsSchema);

export default UserAppointments;
