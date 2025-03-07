import mongoose from 'mongoose';

export interface userInterest extends mongoose.Document {
    _id: string
    interestType: string,
    isDeleted: string
}
