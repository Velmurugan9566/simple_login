var nodemailer = require('nodemailer');
//var maill='muruganveltvl@gmail.com';
function mailsend(maill,sub){
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'm.velmuruga95@gmail.com',
      pass: 'vfmtwdouyhoelhpx'
    }
  });
  const msg='<h2>hey dude &#128513; </h2>'
  var mailOptions = {
    from: 'm.velmuruga95@gmail.com',
    to: maill ,
    subject: sub,
    html: msg
  };
  
  try{
    transporter.sendMail(mailOptions);
    alert('email sent');
    console.log('Email send successfully')
  }catch(error){
    console.log('Error sending email: ',error)
  }
  
}
module.exports = { mailsend };
