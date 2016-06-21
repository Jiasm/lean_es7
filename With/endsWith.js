'use strict';

String.prototype.endsWith = endsWith;

/**
 * 返回当前字符串是否由给定的字符串为开头
 * @param  {String} str     判断是否为该字符串为开头
 * @param  {Number} postion 开头的位置 默认为0
 * @return {Boolean}        true： 是以该字符串为开头的
 */
function endsWith(str, position) {

  // 如果第一个参数为 正则表达式 抛出异常
  if (str instanceof RegExp) throw new TypeError('must not be a regular expression');

  // 如果 传入参数为一个空串 直接返回 true
  if (str === '') return true;

  // 如果 不传参数 或者参数为 null  直接返回 false
  if (str === undefined || str === null) return false;

  var len = str.length;

  position = (+position | 0) || this.length;

  // 如果开始长度小于0 或者 起点＋匹配串的长度大于当前串的长度
  if (position < 0 || (position - len) > this.length) return false;

  return str === this.slice(position - len, position);
}

console.log('test'.endsWith('s', 3));


// Let O be ? RequireObjectCoercible(this value).
// Let S be ? ToString(O).
// Let isRegExp be ? IsRegExp(searchString).
// If isRegExp is true, throw a TypeError exception.
// Let searchStr be ? ToString(searchString).
// Let len be the number of elements in S.
// If endPosition is undefined, let pos be len, else let pos be ? ToInteger(endPosition).
// Let end be min(max(pos, 0), len).
// Let searchLength be the number of elements in searchStr.
// Let start be end - searchLength.
// If start is less than 0, return false.
// If the sequence of elements of S starting at start of length searchLength is the same as the full element sequence of searchStr, return true.
// Otherwise, return false.
