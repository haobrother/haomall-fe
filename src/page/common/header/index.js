/*
 * @Author: haobrother
 * @Date: 2019-07-28 16:34:13
 * @Last Modified by: haobrother
 * @Last Modified time: 2019-07-31 19:54:38
 */
'use strict';
require('./index.css');
var _mm = require('util/mm.js');

// 通用页面头部
var header = {
    // 初始化
    init : function(){
        this.onLoad();
        this.bindEvent();
    },
    // 查询信息回填
    onLoad : function(){
        var keyword = _mm.getUrlParam('keyword');
        // keyword存在，则回填输入框
        if(keyword){
            $('#search-input').val(keyword);
        }
    },
    // 绑定事件
    bindEvent : function(){
        var _this = this;
        // 点击搜索按钮以后，做搜索提交
        $('#search-btn').click(function(){
            _this.searchSubmit();
        });
        // 输入回车后，做搜索提交
        $('#search-input').keyup(function(e){
            // 13是回车键的keyCode
            if(e.keyCode === 13){
                _this.searchSubmit();
            }
        })
    },
    // 搜索的提交
    searchSubmit : function(){
        var keyword = $.trim($('#search-input').val());
        // 如果提交时候有keyword，正常跳转到list页
        if(keyword){
            window.location.href = './list.html?keyword=' + keyword;
        }
        // 如果keyword为空，直接返回首页
        else{
            _mm.goHome();
        }
    }
}

header.init();