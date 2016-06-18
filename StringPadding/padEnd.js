'use strict';

var padStr = require('./padStr');

String.prototype.padEnd = String.prototype.padEnd || padEnd;

/**
 * 从字符串结尾开始补位
 * @param  {Number} targetLength 补位后的字符串长度
 * @param  {String} padString    要用做补位的字符串 默认为空格
 * @return {String}              补位后的值 不会影响到原值
 */
function padEnd(targetLength, padString) {

  var currentLength = this.length;

  // 如果原串长度不小于补位后的长度 或者 padString值为一个空串 直接返回原串
  if (targetLength <= currentLength || padString === '') return this;

  // 默认为 空格
  if (padString === undefined) {

    padString = ' ';
  } else {

    // 转换为字符串
    padString += '';
  }

  return this + padStr(targetLength - this.length, padString);
}

console.log('123'.padEnd(10, 'test'));
