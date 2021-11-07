# Certificate Generator and Mailer 

A blazing fast solution for creating certificates and mailing them just by using the template and the csv file.

## How to use 


* Make sure that you have node and npm installed. In your terminal, run - 
  
  ```
  node --version
  ```
  
  To install node, head over to [this website](https://nodejs.org/en/download/) and download the stable release. 

* Fork and clone this repository by runinng the following command in your terminal - 
  
  ```
  git clone https://github.com/<your_github_username>/certificate-generator-and-mailer
  ```

* cd into the cloned repository using the following command - 
  
  ```
  cd certificate-generator-and-mailer
  ```

* Install all the dependencies using the command -
  
  ```
  npm install
  ```

* You are now ready to generate and send your certificates.

* In the /data folder, replace the participantData.csv file with your own csv file. **Please do not change the name of the file, and make sure that your file must contain "Email Address" and "Name" columns with the same name.** 

* Place your template in the /assets folder and import it in the [certificate-generator.js](certificate-generator.js) file as follows - 
  
  ```
  doc.image('assets/<your_image_name>', 0, 0, { width: 842 })
  ```

* Now we need to make sure that the names on the certificates are placed correctly. To do this, head over to [certificate-generator.js](certificate-generator.js) file and adjust the font configuration by updating the height and width of the text. See this for reference - 

  ```
  doc.font("fonts/Caveat-VariableFont_wght.ttf").fontSize(55).text(name, height, width, {
        align: "left"
  });
  ```
  Here you can pass custom height and width as per your needs. 

* We are not ready yet. We still need to configure our a gmail account so that we can send mails. To configure your account, enable less secure apps from [this link](https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4NgiAxC39PvaRRM09FKs2vwARyjPiyVKq9CIknGcixOdRwDtAVJNGJg4yA4EO8l4ja3D4SNH49nnjZQ4tYZxmsg0ONa4Q)

* Create a .env file in your root folder and update it with your email and password as follows
  
  ```
  USER_EMAIL=<your_email_address>
  USER_PASS=<your_password>
  ```

* Save all the changes and in your terminal run the following command - 
  ```
  node index.js
  ```

* You'll see PDFs getting generated in your root folder and a message "Email is sent" in your terminal.

### Do give this repository a star if you've read till here :)