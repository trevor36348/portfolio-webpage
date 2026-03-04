import mongoose, { Schema } from 'mongoose';
import { Education } from '../types/EducationType';

const educationSchema = new Schema<Education>({
    degree: {
        type: String,
        required: true,
    },
    institution: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
});

export default mongoose.models.Education || mongoose.model('Education', educationSchema);
