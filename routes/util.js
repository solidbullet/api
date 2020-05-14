const rp = require('request-promise');
const config = require("../config.json")
const dbtoken = require('../controller/tokencontroller')


async function getToken() {
    const { access_token, expires_time } = await dbtoken.findByAppID(config.APPID)

    const curentTime = new Date().getTime()

    console.log('curentTime',curentTime)
    console.log('expires_time',expires_time)
    console.log(curentTime - expires_time  > 7000 * 1000)
    let url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${config.APPID}&secret=${config.SECRET}`
    let options = {
        uri: url,
        json: true
    }
    if (!access_token || curentTime - expires_time  > 7000 * 1000) {
        let res = await rp(options)
        // config.access_token = access_token;
        // config.expires_time = curentTime;
        let token = {
            access_token:  res.access_token,
            expires_time: curentTime
        }
        let dbres = await dbtoken.findAndUpdate(config.APPID,token)
        
        return  res.access_token

    } else return access_token
}

module.exports = {
    getToken: getToken

};