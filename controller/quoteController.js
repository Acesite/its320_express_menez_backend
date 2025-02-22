import Quote from '../models/quoteModel.js';

async function createQuote(req, res) {
    const { quote, author, published, title } = req.body;

    if (!quote || !author || !published || !title) {
        return res.status(400).send('Please fill all fields.');
    }

    try {
        const newQuote = await Quote.create({ quote, author, published, title });

        if (!newQuote) {
            return res.status(500).send('Error while creating quote.');
        }

        return res.status(201).json({ message: 'Quote successfully created.', newQuote });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}
async function fetchQuotes(req, res) {
    try{
        const quotes = await Quote.find();
        
        return res.status(201).json( quotes );
    }
    catch(err){
        console.log(err)
    }
}

export { createQuote ,fetchQuotes };
