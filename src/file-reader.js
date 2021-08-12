const path = require('path')
const file_reader=()=>{
    var filePath = path.join(__dirname,'../reader-service/src/csv-files')
    var csvstream = csv.fromPath(filePath, { headers: true })
        .on("data", function (row) {
            csvstream.pause();
            //will be sending rows to the rmq-sender
            csvstream.resume();
        })
        .on("end", function () {
            console.log("We are done!")
        })
        .on("error", function (error) {
            console.log(error)
        });
}
module.exports= file_reader