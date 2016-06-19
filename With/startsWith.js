'use strict';

String.prototype.startsWith = startsWith;

/**
 * 返回当前字符串是否由给定的字符串为开头
 * @param  {String} str     判断是否为该字符串为开头
 * @param  {Number} postion 开头的位置 默认为0
 * @return {Boolean}        true： 是以该字符串为开头的
 */
function startsWith(str, position) {

  // 如果第一个参数为 正则表达式 抛出异常
  if (str instanceof RegExp) throw new TypeError('must not be a regular expression');

  // 如果 传入参数为一个空串 直接返回 true
  if (str === '') return true;

  // 如果 不传参数 或者参数为 null  直接返回 false
  if (str === undefined || str === null) return false;

  var len = str.length

  position = +position | 0;

  // 如果开始长度小于0 或者 起点＋匹配串的长度大于当前串的长度
  if (position < 0 || (position + len) > this.length) return false;

  return str === this.slice(position, position + len);
}

console.log('test'.startsWith('st', 3));


// 1. Let O be ? RequireObjectCoercible(this value).
// 2. Let S be ? ToString(O).
// 3. Let isRegExp be ? IsRegExp(searchString).
// 4. If isRegExp is true, throw a TypeError exception.
// 5. Let searchStr be ? ToString(searchString).
// 6. Let pos be ? ToInteger(position). (If position is undefined, this step produces the value 0.)
// 7. Let len be the number of elements in S.
// 8. Let start be min(max(pos, 0), len).
// 9. Let searchLength be the number of elements in searchStr.
// 10. If searchLength+start is greater than len, return false.
// 11. If the sequence of elements of S starting at start of length searchLength is the same as the full element sequence of
// searchStr, return true.
// 12. Otherwise, return false.
