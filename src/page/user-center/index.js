/*
 * @Author: haobrother 
 * @Date: 2019-07-30 18:08:16 
 * @Last Modified by: haobrother
 * @Last Modified time: 2019-07-30 22:36:36
 */
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _mm = require('util/mm.js');
var _user = require('service/user-service.js');
var templateIndex = require('./index.string');

// page逻辑部分
var page = {
    init: function(){
        this.onLoad();
    },
    onLoad: function(){
        // 初始化左侧列表
        navSide.init({
            name: 'user-center'
        });
        this.loadUserInfo();
    },
    // 加载用户信息
    loadUserInfo: function(){
        var userHtml = '';
        _user.getUserInfo(function(res){
            userHtml = _mm.renderHtml(templateIndex, res);
            $('.panel-body').html(userHtml);
        }, function(errMsg){
            _mm.errorTips(errMsg);
        });
    }
}
$(function(){
    page.init();
});