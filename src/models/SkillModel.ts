import mongoose, { Schema } from 'mongoose';
import { Skill } from '../types/SkillType';

const skillSchema = new Schema<Skill>({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    order: {
        type: Number,
        required: true,
    },
});

export default mongoose.models.Skill || mongoose.model('Skill', skillSchema);
