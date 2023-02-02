const express = require("express");
const Redis = require("ioredis");

const client = new Redis({
  port: 6379,
  host: "ip주소입력",
});

const app = express();

// ioredis 모듈을 이용해서 카운팅 실습해보기

client.set("number", 0);

app.get("/", (req, res) => {
  client.get("number", (err, number) => {
    client.set("number", parseInt(number) + 1);
    res.send("카운터가 1씩 증가합니다. " + number);
  });
});

app.listen(3000);

console.log("✅✅✅✅ Server is Running ✅✅✅✅");
