/*
 * @Author: haobrother 
 * @Date: 2019-07-28 20:09:32 
 * @Last Modified by: haobrother
 * @Last Modified time: 2019-07-28 21:46:58
 */
'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
    var type        = _mm.getUrlParam('type') || 'default',
        $element    = $('.' + type + '-success');
    // 显示对应的提示
    $element.show();
});