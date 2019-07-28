/*
 * @Author: haobrother 
 * @Date: 2019-07-28 14:22:04 
 * @Last Modified by: haobrother
 * @Last Modified time: 2019-07-28 14:40:49
 */
'use strict';

var _mm = require('util/mm.js');

var _user = {
    // 检查登录状态
    checkLogin : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/get_user_info.do'),
            method  : 'POST',
            success : resolve,
            error   : reject 
        });
    },
    // 登出
    logouut : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/logout.do'),
            method  : 'POST',
            success : resolve,
            error   : reject 
        });
    }
}

module.exports = _user;