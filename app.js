const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const jsonld = require('jsonld');
const cors = require('cors');

app.use(cors());

const port = process.env.PORT || 5000;

// const data = require('./public/data/wall_door.json');
// const data = require('./public/data/testX.json');
const data = require('./public/data/testY.json');

// const frame = require('./public/data/wall_door_framing.json');
// const frame = require('./public/data/wall_door_framing2.json');
// const frame = require('./public/data/wall_door_framing4.json');
// const frame = require('./public/data/frame5Geom.json');
const frame = require('./public/data/frame6OnlyGeom.json');

// const data = require('./public/data/devonData.json');
// const frame = require('./public/data/devonDataFrame.json');/

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
	res.send('./index');
});

app.get('/data', async (req, res) => {
	console.log('in server');
	let t = { a: 1, b: 2 };
	try {
		res.send(data);
	} catch (e) {
		res.send(e);
	}
});

app.get('/frame', async (req, res) => {
	console.log('in server');
	try {
		res.send(frame);
	} catch (e) {
		res.send(e);
	}
});

app.post('/output', async (req, res) => {
	try {
		let framedData = await jsonld.frame(data, frame);
		res.send(framedData);
	} catch (e) {
		res.send(e);
	}
});

app.post('/genSol', async (req, res) => {
	console.log('in server');
	let data = req.data;
	let frame = req.frame;
	try {
		let framedData = await jsonld.frame(data, frame);
		console.log(framedData);
		res.send(framedData);
	} catch (e) {
		res.send(e);
	}
});

app.listen(port, () => {
	console.log('server started on port ' + port);
});
