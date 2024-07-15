var nodemailer = require('nodemailer');
//var maill='muruganveltvl@gmail.com';
function mailsend(maill){
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fundamentaltk@gmail.com',
      pass: 'ovwyvqxcminsvxzc'
    }
  });
  const msg='<h2>hey dude &#128513; </h2>'
  var mailOptions = {
    from: 'fundamentaltk@gmail.com',
    to: maill ,
    subject: 'Login Status',
    html: msg
  };
  
  try{
    transporter.sendMail(mailOptions);
    console.log('Email send successfully')
  }catch(error){
    console.log('Error sending email: ',error)
  }
  
}
module.exports = { mailsend };
