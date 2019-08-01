/*
 * @Author: haobrother 
 * @Date: 2019-07-25 18:53:20 
 * @Last Modified by: haobrother
 * @Last Modified time: 2019-07-31 18:16:37
 */

'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');
var templateBanner = require('./index.string');
var _mm = require('util/mm.js');

$(function() {
    // 渲染banner的HTML
    var bannerHtml = _mm.renderHtml(templateBanner);
    $('.banner-con').html(bannerHtml);
    // 初始化banner
    var $slider = $('.banner').unslider({
        dots: true
    });
    // 前一张和后一张操作的事件绑定
    $('.banner-con .banner-arrow').click(function(){
        var forward = $(this).hasClass('prev') ? 'prev' : 'next';
        $slider.data('unslider')[forward]();
    });
});