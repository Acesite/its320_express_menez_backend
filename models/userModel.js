import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    quote: {
        type: String,
        required: [true, 'Please provide a quote.']
    },

    author: {
        type: String,
        required: [true, 'Please provide a author.']
    },

    published: {
        type: String,
        required: [true, 'Please provide a published.']
    },

    title: {
        type: String,
        required: [true, 'Please provide a published.']
    }
})

// export default userSchema;
export default mongoose.model('User', userSchema)