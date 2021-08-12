var cron = require('node-cron')
var file_reader = require('./file-reader.js')
const cron_manager= ()=>{
cron.schedule('*/30 * * * *', () => {
        // file_reader = () => {
        //     if(error){
        //         console.log("error")
        //     }
        //     else
        //     console.log("Fine!!")
        // }
        // working on the above code
});
}
module.exports = cron_manager