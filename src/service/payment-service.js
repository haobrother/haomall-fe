/*
 * @Author: haobrother 
 * @Date: 2019-08-06 14:30:45 
 * @Last Modified by: haobrother
 * @Last Modified time: 2019-08-06 14:42:40
 */
'use strict';

var _mm = require('util/mm.js');

var _payment = {
    // 获取支付信息
    getPaymentInfo : function(orderNumber, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/order/pay.do'),
            data    : {
                orderNo: orderNumber
            },
            success : resolve,
            error   : reject 
        });
    },
    // 查询订单支付状态
    getPaymentStatus : function(orderNumber, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/order/query_order_pay_status.do'),
            data    : {
                orderNo: orderNumber
            },
            success : resolve,
            error   : reject 
        });
    }
}

module.exports = _payment;