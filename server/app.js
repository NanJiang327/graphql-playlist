const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors')


const app = express();

// allow cross-origin
app.use(cors())

mongoose.connect('mongodb+srv://j499521010:123.comwyxx@cluster0-s97y5.mongodb.net/books?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
mongoose.connection.once('open', () => {
    console.log('connected to db')
})

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: global,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Server listening on port 4000')
})