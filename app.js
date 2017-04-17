/* const fs = require("fs"),

    privateKey = fs.readFileSync("certs/server.key", "utf8"),
    certificate = fs.readFileSync("certs/server.crt", "utf8"),
    credentials = {key: privateKey, cert: certificate},

    express = require("express"),
    app = express(),
    https = require("https").Server(credentials, app),
    io = require("socket.io")(https);

https.listen(9000);

app.use(express.static(__dirname + "/public"));

require('./server/routes')(app);

require('./server/chat')(io); */

const express = require("express"),
    app = express(),
    http = require("http").Server(app),
    io = require("socket.io")(http);

http.listen(3000);

app.use(express.static(__dirname + "/public"));

require('./routes')(app);

require('./chat')(io);



