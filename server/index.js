const express = require('express');
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");



app.use(express.json());
app.use(cors());

const CLIENT_ID = '764595447847-qdh31977is9jmf9i1vrq4rh8r85q6l5f.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URL = 'https://developers.google.com/oauthplayground/';
const REFRESH_TOKEN = '1//04Z8A8qmn_YeiCgYIARAAGAQSNwF-L9Irs5-HqoIwN50dlygcRjobzL8jDZY0-JLe8hgxxtyOUUD3MHQSUjoWyvYkAdx8BErFVeo';

const oAuth2client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
oAuth2client.setCredentials({ refresh_token: REFRESH_TOKEN });

app.post("/sendmail", async (req, res) => {
    try {
        console.log(req.body)
        const accesToken = await oAuth2client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: 'daddesignsweb.ppc@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accesToken
            },
            tls: { rejectUnauthorized: false }
        });
        // const mailList = [
        //     "daddesignsweb.ppc@gmail.com",
        //     req.body.email
        // ]
        const mailOptions = {
            from: `Dad Designs Web <${req.body.email}>`,
            to: "daddesignsweb.ppc@gmail.com",
            subject: req.body.subject,
            text: req.body.text,
            html: `
            <h1>Dad Designs Web</h1>
            ${req.body.firstName ?
                    `<p>Full Name: ${req.body.firstName} ${req.body.lastName}</P>` :
                    `<p>Full Name: ${req.body.fullName}</P>`
                }
            <p>Contact: ${req.body.phone}</P>
            ${req.body.packageName ?
                    `<p>Package Name: ${req.body.packageName}</P>` :
                    ""
                }
            ${req.body.packagePrice ?
                    `<p>Package Price: ${req.body.packagePrice}</P>` :
                    ""
                }
            ${req.body.pageName ?
                    `<p>Page Name: ${req.body.pageName}</P>` :
                    ""
                }
                ${req.body.stars ?
                    `<p>Page Name: ${req.body.stars}</P>` :
                    ""
                }
                ${req.body.words ?
                    `<p>Page Name: ${req.body.words}</P>` :
                    ""
                }
                ${req.body.pages ?
                    `<p>Page Name: ${req.body.pages}</P>` :
                    ""
                }
                ${req.body.urgency ?
                    `<p>Page Name: ${req.body.urgency}</P>` :
                    ""
                }
                ${req.body.videoType ?
                    `<p>Page Name: ${req.body.videoType}</P>` :
                    ""
                }
                ${req.body.videoDuration ?
                    `<p>Page Name: ${req.body.videoDuration}</P>` :
                    ""
                }
            <p>Button Name: ${req.body.buttonName}</P>
            <p>Email: ${req.body.email}</P><br/>
            <p style="font-size: 20px; font-weight: 600;" >${req.body.text}</p>
            `
        }
        // const mailOptions2 = {
        //     from: `Dad Designs Web <Sales@daddesignsweb.com>`,
        //     subject: req.body.subject,
        //     text: req.body.text,
        //     html: `
        //     <h1>Dad Designs Web</h1>
        //     <h1 style="color: red;" >Sales@daddesignsweb.com</h1>
        //     <p>Contact: ${req.body.phone}</P><br/>
        //     <p style="font-size: 20px; font-weight: 600;" >${req.body.text}</p>
        //     <img src="https://firebasestorage.googleapis.com/v0/b/shop-c150d.appspot.com/o/thankyou.png?alt=media&token=5ca3af97-a6f0-4c02-a481-9b545636a135" />
        //     `
        // }
        // mailList.forEach((email, index) => {
        //     if (index === 0) {
        //         mailOptions.to = email;
        //     } else {
        //         mailOptions2.to = email;
        //         transport.sendMail(mailOptions2);
        //     }
        // });

        transport.sendMail(mailOptions);
        res.status(200).json({ msg: "the mail has been sent" });
    } catch (err) {
        res.status(501).json(err)
        console.log(err)
    }
})
const PORT = 5500;
app.listen(PORT, () => {
    console.log("the server is ready on port number:", PORT)
});