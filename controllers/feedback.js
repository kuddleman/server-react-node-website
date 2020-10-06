const sgMail = require('@sendgrid/mail')

sqMail.setApiKey(process.env.SENDGRID_API_KEY)


exports.emailFeedback = (req, res) =>{
  console.log(req.body)
}