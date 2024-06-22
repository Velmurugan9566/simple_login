var nodemailer = require('nodemailer');
//var maill='muruganveltvl@gmail.com';
async function mailsend(maill){
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fundamentaltk@gmail.com',
      pass: ''
    }
  });
  const msg='<h2>hey dude &#128513; </h2>'
  var mailOptions = {
    from: 'fundamentaltk@gmail.com',
    to: maill ,
    subject: '<h2>Sending Email using Node.js <h2>',
    html: msg
  };
  
  try{
    await transporter.sendMail(mailOptions);
    console.log('Email send successfully')
  }catch(error){
    console.log('Error sending email: ',error)
  }
  
}
module.exports = { mailsend };
