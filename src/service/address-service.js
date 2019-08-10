/*
 * @Author: haobrother 
 * @Date: 2019-08-05 14:33:07 
 * @Last Modified by: haobrother
 * @Last Modified time: 2019-08-05 19:55:18
 */
'use strict';

var _mm = require('util/mm.js');

var _address = {
    // 获取地址列表
    getAddressList : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/shipping/list.do'),
            data    : {
                pageSize: 50
            },
            success : resolve,
            error   : reject 
        });
    },
    // 添加收货地址
    save : function(addressInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/shipping/add.do'),
            data    : addressInfo,
            success : resolve,
            error   : reject 
        });
    },
    // 更新收货地址
    update : function(addressInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/shipping/update.do'),
            data    : addressInfo,
            success : resolve,
            error   : reject 
        });
    },
    // 删除收货地址
    deleteAddress : function(shippingId, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/shipping/del.do'),
            data    : {
                shippingId: shippingId
            },
            success : resolve,
            error   : reject 
        });
    },
    // 获取指定的地址信息
    getAddress : function(shippingId, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/shipping/select.do'),
            data    : {
                shippingId: shippingId
            },
            success : resolve,
            error   : reject 
        });
    }
    
}

module.exports = _address;