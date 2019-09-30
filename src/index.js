const expressRestApp = require('./app');

const port = process.env.PORT || 4444;

expressRestApp.listen(port, () => {
    console.log("Movies Node Rest API, running on port " + port);
});


