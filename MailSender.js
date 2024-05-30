var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "siddukargarcode@gmail.com",
    pass: "rqkyokqdmitkbgzp",
  },
});

var mailOptions = {
  from: "siddukargarcode@gmail.com",
  to: "siddukaragar46@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
