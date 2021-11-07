const csv = require('csv-parser')
const fs = require('fs')
const results = [];
const generateCertificate = require('./certificate-generator')
const mailCertificate = require('./certificate-mailer')

fs.createReadStream('data/participantData.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {    //to create synchronicity - i.e. after the data is recieved

        //generating a certificate for each user and then mailing it 
        results.forEach((result) => {
            generateCertificate(result['Name'])
            mailCertificate(result["Name"], result["Email Address"])
        })
        
    });
