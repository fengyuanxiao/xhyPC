
const phoneNum = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;   //手机号码正则
const pawNum = /^(?![^a-zA-Z]+$)(?!\D+$).{6,16}$/;







module.exports = {
    phoneNum: phoneNum,                   //手机号码正则
    pawNum: pawNum,                       //含有字符串等符号正则
}
