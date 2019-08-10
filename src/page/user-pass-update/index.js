/*
 * @Author: haobrother 
 * @Date: 2019-07-31 11:38:33 
 * @Last Modified by: haobrother
 * @Last Modified time: 2019-07-31 12:15:05
 */
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _mm = require('util/mm.js');
var _user = require('service/user-service.js');

// page逻辑部分
var page = {
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    bindEvent: function(){
        var _this = this;
        // 点击提交按钮后的动作
        $(document).on('click', '.btn-submit', function(){
            var userInfo = {
                password: $.trim($('#password').val()),
                passwordNew: $.trim($('#password-new').val()),
                passwordConfirm: $.trim($('#password-confirm').val())
            },
            validateResult = _this.validateForm(userInfo);
            if(validateResult.status){
                // 更改密码
                _user.updatePassword({
                    passwordOld: userInfo.password,
                    passwordNew: userInfo.passwordNew
                }, function(res){
                    _mm.successTips(validateResult.msg);
                }, function(errMsg){
                    _mm.errorTips(errMsg);
                });
            }
            else{
                _mm.errorTips(validateResult.msg);
            }
        });
    },
    onLoad: function(){
        // 初始化左侧列表
        navSide.init({
            name: 'user-pass-update'
        });
    },
    // 验证密码信息
    validateForm: function(formData){
        var result = {
            status: false,
            msg: ''
        };
        // 验证原密码是否为空
        if (!_mm.validate(formData.password, 'require')) {
            result.msg = '原密码不能为空';
            return result;
        }
        // 验证新密码长度
        if (!formData.passwordNew || formData.passwordNew.length < 6) {
            result.msg = '密码长度不得少于6位';
            return result;
        }
        // 验证两次输入密码是否一致
        if (formData.passwordNew !== formData.passwordConfirm) {
            result.msg = '两次输入密码不一致';
            return result;
        }

        // 通过验证，返回正确提示
        result.status = true;
        result.msg = '修改密码成功';
        return result;
    }
}
$(function(){
    page.init();
});