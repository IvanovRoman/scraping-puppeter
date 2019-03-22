const http = require("http");
const puppeteer = require("puppeteer");

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello puppeter! Yes!!!"); //write a response to the client
    res.end(); //end the response

    run();
  })
  .listen(8080); //the server object listens on port 8080

async function run() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.authenticate({ username: "zzz", password: "ttt" });
  await page.goto("https://some.web.site.com", { waitUntil: "networkidle2" });
}
