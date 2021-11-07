const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()

//exporting the funtion to be made available globally
module.exports = async (name, email) => {

    //configuring the gmail SMTP server using createTransport 
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,

        //these values are present in the .env file - can be configured
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS
        }
    })

    //mail content that is to be sent to the contact
    let mailOptions = {
        
        from: 'ishubham2101@gmail.com',
        to: `${email}`,
        subject: 'Congratulations on completing all the Track 1 labs!',
        html: `<h4>Hey there, ${name}</h4><br>
        I am Shubham Gautam (Lead at GDSC, RTU). 
        Bet you thought no one would notice the hard work you did for 30 days. Well... we did!!<br> 
        Congratulations on completing <b>drum roll</b> both the tracks of 30 days of Google Cloud!<br>
        Track 1 - Cloud Engineering Track<br> 
        <br>
        Since you've completed all the labs under track 1, you'll be receiving the certificate and Cloud swags accordingly. In order to make sure you get them, keep an eye on your email inbox as you'll get (or probably already got) a mail from Google Cloud. <br><br>
        Attached with this email is a certificate of achivement for you to post on your LinkedIn and tell your friends about your achivement. Yay!<br>
        <br><br>
        
        Regards <br>
        Google DSC RTU`,

        attachments: [{
            filename: `${name}.pdf`,
            path: `./${name}.pdf`,
            contentType: 'application/pdf'
        }]
    }

    //sendMail function to for final sending of messages
    await transporter.sendMail(mailOptions)
        .then(() => {
            console.log('Email is sent');
        })
        .catch((err) => {
            console.log('Error - ' + err);
        })
}