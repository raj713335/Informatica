import mongoose from 'mongoose';

export interface user extends mongoose.Document {
    _id: string
    firstName: string,
    userName: string,
    email: string,
    password: string,
    comparePassword(candidatePassword: string): Promise<boolean>;
}
