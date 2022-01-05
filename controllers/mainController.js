const date = require('../getDate.js');
const Date = require('../models/date')


exports.getMainPage = (request,response)=>{
    Date.fetchLogs(logs =>{
        let time = date.getDate();
        response.render('index',{Time: time, Logs: logs});
        let newLog = new Date(time);
        newLog.saveDate();
    })
}