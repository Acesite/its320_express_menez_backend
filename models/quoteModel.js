import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: [true, 'Please provide a quote.']
    },
    author: {
        type: String,
        required: [true, 'Please provide an author.']
    },
    published: {
        type: String,
        required: [true, 'Please provide a published date.']
    },
    title: {
        type: String,
        required: [true, 'Please provide a title.']
    }
});

export default mongoose.model('Quote', quoteSchema);
