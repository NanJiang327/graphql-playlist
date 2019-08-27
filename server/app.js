const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');


const app = express();

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