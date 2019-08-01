/*
 * @Author: haobrother 
 * @Date: 2019-07-28 14:46:14 
 * @Last Modified by: haobrother
 * @Last Modified time: 2019-08-01 18:39:25
 */
'use strict';

var _mm = require('util/mm.js');

var _cart = {
    // 获取购物车数量
    getCartCount : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/get_cart_product_count.do'),
            success : resolve,
            error   : reject 
        });
    },
    // 添加到购物车
    addToCart: function(productInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/add.do'),
            data    : productInfo,
            success : resolve,
            error   : reject 
        });
    }
}

module.exports = _cart;