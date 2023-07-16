const express = require('express');
const app = express();

//  GET /users
const getEndpoints = ['/users', '/users/:param1', '/users/:param1/:param2'];
app.get(getEndpoints, (req, res) => {
    routeTo(req, res);
});

//  POST /users
const postEndpoints = ['/users', '/users/:param1', '/users/:param1/:param2'];
app.post(postEndpoints, (req, res) => {
    routeTo(req, res);
});

//  PUT /users
const putEndpoints = ['/users', '/users/:param1', '/users/:param1/:param2'];
app.put(putEndpoints, (req, res) => {
    routeTo(req, res);
});

const routeTo = (req, res) => {
    let json_data = {};
    let datafile = req.query.datafile;
    if (datafile && datafile.length) {
        const filePath = `./response/${datafile}.json`;
        console.log('filePath ', filePath);
        json_data = require(filePath);
    }
    res.json(json_data);
};

const port = process.env.PORT || 9002;
app.listen(port, function (req, res) {
    console.log(`Server is running at port ${port}`);
});
