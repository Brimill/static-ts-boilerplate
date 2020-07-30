let liveServer = require("live-server");

var params = {
  port: 3000,
  host: "0.0.0.0",
  root: "./dist", // Set root directory that's being served. Defaults to cwd.
  open: false, // When false, it won't load your browser by default.
  file: "index.htm", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
  logLevel: 2,
};

console.log(
  '\x1b[33mServing "%s" with auto reload at http://%s:%s',
  params.root,
  params.host,
  params.port
); //yellow
liveServer.start(params);
