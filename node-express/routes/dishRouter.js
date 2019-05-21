const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req, res, next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req, res, next) =>{
    res.end('Sending all dishes!');
})
.post((req, res, next) =>{
    res.end('Adding ' + req.body.name + " with description " 
        + req.body.description);
})
.put((req, res, next) =>{
    res.statusCode = 403;
    res.end('PUT not supported for /dishes');
})
.delete((req, res, next) =>{
    res.end('Deleting all dishes!');
});

module.exports = dishRouter;