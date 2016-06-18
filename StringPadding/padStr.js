'use strict';

module.exports = padStr;

/**
 * 填充字符串
 * @param  {Number} length    合成后的总长度
 * @param  {String} padString 合成需要重复的串
 * @return {String}           返回的串
 */
function padStr(length, padString) {

  return padString.repeat(((length / padString.length) | 0) + 2).slice(0, length);
}
