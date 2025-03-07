import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { user } from '../interfaces/user';
import logger from '../utils/logger';

const UserSchema = new Schema({
    userName: { type: String, trim: true, default: null },
    email: { type: String, trim: true, default: null },
    phoneNumber: { type: String, trim: true, default: null },
    password: { type: String, default: null },
    isDeleted: { type: Boolean, default: false }, 
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: [{ type: Schema.Types.ObjectId, ref: 'User', default: null }],
}, { timestamps: true });

UserSchema.pre('save', function(next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this;
    bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) throw err;
        user.password = hash;
        logger.info('LOG: Password hashed & user saved.');
        next();
    });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any  
// cb: (...args: any[]) => any
UserSchema.methods.comparePassword = function(candidatePassword: string, ) {
    const password = this.password;
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, password, (err, success) => {
            if (err) return reject(err);
            return resolve(success);
        });
    });
};

const User = mongoose.model<user>('User', UserSchema);

export default User;
