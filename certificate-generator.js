const pdfdoc = require('pdfkit')
const fs = require('fs')

module.exports = (name) => {

    //creating a new empty pdf document
    const doc = new pdfdoc({
        layout: "landscape",
        size: "A4"
    })

    //creating a write stream to save the pdf with user's name
    doc.pipe(fs.createWriteStream(`${name}.pdf`))
    
    //importing the image in pdf
    doc.image('assets/participation.png', 0, 0, { width: 842 })

    // writing the name on PDF file 
    doc.font("fonts/Caveat-VariableFont_wght.ttf").fontSize(55).text(name, 50, 250, {
        align: "left"
    });

    //closing the connection with pdf
    doc.end()
}


