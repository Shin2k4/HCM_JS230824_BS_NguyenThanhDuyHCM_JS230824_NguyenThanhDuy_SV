import express from 'express';

const server = express();

import todoapi from './router/index';
import bodyParser from 'body-parser';
server.use(bodyParser.json())

server.use('/api', todoapi);

server.listen(3000, () => {
    console.log('Server ok!');
})