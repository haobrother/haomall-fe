/*
 * @Author: haobrother 
 * @Date: 2019-07-28 14:22:04 
 * @Last Modified by: haobrother
 * @Last Modified time: 2019-08-01 17:53:13
 */
'use strict';

var _mm = require('util/mm.js');

var _product = {
    // 获取商品列表
    getProductList : function(listParam, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/product/list.do'),
            data    : listParam,
            success : resolve,
            error   : reject 
        });
    },
    // 获取商品详细信息
    getProductDetail : function(productId, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/product/detail.do'),
            data    : {
                productId: productId
            },
            success : resolve,
            error   : reject 
        });
    }
}

module.exports = _product;