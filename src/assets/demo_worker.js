/*
 * @Author: zhouchao
 * @Date:   2020-04-20 14:12:03
 * @Last Modified by:   zhouchao
 * @Last Modified time: 2020-04-20 14:12:44
 */
var i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()", 500);
}

timedCount();
