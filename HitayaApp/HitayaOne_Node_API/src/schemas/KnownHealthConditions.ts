import mongoose, { Schema } from 'mongoose';

const KnownHealthConditionsSchema = new Schema({
    userDetailId: { type: Schema.Types.ObjectId, ref: 'User' },
    healthIssue: { type: String, trim: true },
    severity: { type: String, trim: true },
    type: { type: String, trim: true },
    isGeneticallyTransmissible: { type: Boolean, default: false },
    startedFrom: { type: String, trim: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updatedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });


const KnownHealthConditions = mongoose.model('KnownHealthConditions', KnownHealthConditionsSchema);

export default KnownHealthConditions;
