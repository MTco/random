var http = require("connect");

module.exports = function() {
	http().use(http.static("client")).listen(8080);
};
