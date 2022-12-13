import express from 'express';

const server = express();

server.get('/', (request, response) => {
  return response.status(201).json({
    messege: 'Routes is running successfully'
  });
})


server.listen(3333, ( ) => console.log("listening on port 3333" ))