const express = require('express');
const app = express();

//  POST /policy/init
const postEndpoints = ['/policy/init', '/policy/init/:param1', '/policy/init/:param1/:param2'];
app.post(postEndpoints, (req, res) => {
    routeTo(req, res);
});

//  POST /policy/approve
const postEndpoints_ApprovaAndCallCB = ['/policy/approve', '/policy/approve/:param1', '/policy/approve/:param1/:param2'];
app.post(postEndpoints_ApprovaAndCallCB, (req, res) => {
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

const port = process.env.PORT || 9001;
app.listen(port, function (req, res) {
    console.log(`Server is running at port ${port}`);
});
