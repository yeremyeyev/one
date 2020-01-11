// подключаю fs
const fs = require("fs");
//записиваю в фал
let data = fs.writeFileSync("data.txt", "Привет мир!");

//дописываю в фал
let data_to_append = "Дописать текст с новой строки, не затирая предидущий";
fs.appendFileSync("data.txt", `\n${data_to_append}`);

//читаю что дописал
let dataContent = fs.readFileSync("data.txt", "utf8");
console.log(dataContent);

//шлю письмо
const nodemailer = require("nodemailer");

let testEmailAccount = nodemailer.createTestAccount();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "a.yeremyeyev@gmail.com",
    pass: "enter pass"
  }
});

let result = transporter.sendMail({
  from: '"Node js" <a.yeremyeyev@gmail.com>',
  to: "a.yeremyeyev@gmail.com",
  subject: "Message from Node js",
  text: "This message was sent from Node js server.",
  html: "This <i>message</i> was sent from <strong>Node js</strong> server."
});
console.log("done");
// };
// main ();
// console.log(result);
