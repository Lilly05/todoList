import * as mongoose from 'mongoose';

export const CardsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    isDone: { type: String },
});

export interface Cards{
    id: string;
    title: string;
    description: string;
    isDone: boolean;
}