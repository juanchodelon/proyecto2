const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'src/public')));


app.listen(port, () => {
		console.log('running in port: ' + port)
	});
