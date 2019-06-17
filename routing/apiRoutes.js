var path = require("path");


var friends = require("../data/friends");
module.exports = function (app) {
  //request //response
  app.post("/api/friends/", function (req, res) {
    friends.push(req.body);
    var randomFriend = friends[Math.floor(Math.random() * friends.length -1)]
    res.json(randomFriend);
  })

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });
}
