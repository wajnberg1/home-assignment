const express = require("express");
const app = express();
const PORT = 8080;
const fs = require("fs"); 
const path = require('path');


// Accept CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin );
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', '*, Authorization, Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET');

  next();
})


app.get("/jobs",  (request, response) => {
	const jsonFilePath = path.join(__dirname, 'jobs.json');
  
  // Read the JSON file
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the JSON file:', err);
      return res.status(500).send('An error occurred while reading the JSON file.');
    }

    try {
      // Parse and send the JSON content
      const jsonData = JSON.parse(data);
      response.json(jsonData);
    } catch (parseError) {
      console.error('Error parsing the JSON file:', parseError);
      response.status(500).send('An error occurred while parsing the JSON file.');
    }
  });
});



app.listen(PORT, () => console.log(`backend service started on port ${PORT}`));