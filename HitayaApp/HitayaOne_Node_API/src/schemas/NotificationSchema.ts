import mongoose, { Schema } from 'mongoose';
import logger from '../utils/logger';

const NotificationSchema = new Schema({
    userTo: { type: Schema.Types.ObjectId, ref: 'User' },
    userFrom: { type: Schema.Types.ObjectId, ref: 'User' },
    notificationType: String,
    opened: { type: Boolean, default: false },
    entityId: Schema.Types.ObjectId,
    isDeleted: { type: Boolean, default: false },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updatedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

NotificationSchema.statics.insertNotification = async (userTo, userFrom, notificationType, entityId) => {
    const data = {
        userTo: userTo,
        userFrom: userFrom,
        notificationType: notificationType,
        entityId: entityId
    };
    await Notification.deleteOne(data).catch(error => logger.error(error));
    return Notification.create(data).catch(error => logger.error(error));
};


const Notification = mongoose.model('Notification', NotificationSchema);

export default Notification;
