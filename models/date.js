const fs = require('fs')
const path = require('path')

const filePath = path.join(path.dirname(require.main.filename), 'data', 'logs.json')

module.exports = class Date {
    constructor(date){
        this.time = date
    }

    saveDate(){
        //read file content first
        fs.readFile(filePath, (error, fileContent) => {
            let Dates = [];

            if (!error) {
                Dates = JSON.parse(fileContent)                
            }
            else {
                console.log(error);
            }
            Dates.push(this) //newWish.saveWish();
 
            fs.writeFile(filePath, JSON.stringify(Dates),(error)=>{
                if (!error) {
                    console.log('Date saved!!!');
                }
            })
        })
    }

    static fetchLogs(callback){
        fs.readFile(filePath, (error, fileContent) => {
            if (error) {
                callback([])
            }
            callback(JSON.parse(fileContent))
        })
    }
}