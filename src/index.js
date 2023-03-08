var http = require("http");


const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.url === "/welcome") {
    res.writeHead(200, { ContentType: "text/plain" });
   return  res.end(" Welcome to Dominos!");
  }

  if (req.url === "/contact") {
    res.writeHead(200, { ContentType: " application/json" });
    return res.end("{ phone: '18602100000', email: 'guestcaredominos@jublfood.com' }");
  } 
  else {
    res.writeHead(404, { ContentType: " text/plain" });
    return   res.end("error");
  }
}
httpServer.listen(8081, () => {
  console.log("listening to port 8081");
});
module.exports = httpServer;
