var fs = require('fs')
// var url = require('url') 
// var path =  require('path')

function getDatas() {
    try {        
        const jsonDatas = fs.readFileSync(`${__dirname}/datas.json`, "utf-8")
        return jsonDatas        
    } catch (error) {
        console.log(error)
    }
}

module.exports = getDatas;


