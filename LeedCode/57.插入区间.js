/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (intervals.length === 0) {
        return [newInterval]
    }
    let start = 0
    while (true) {
        if (intervals[start][1] < newInterval[0]) {
            start++
            // 判断是否到数组末尾
            if (start === intervals.length){
                intervals.splice(start, 0, newInterval)
                break;
            }
        } else {
            if (intervals[start][0] > newInterval[1]) {
                intervals.splice(start, 0, newInterval)
                break;
            } else {
                newInterval[0] = Math.min(intervals[start][0], newInterval[0])
                newInterval[1] = Math.max(intervals[start][1], newInterval[1])
                // 判断是否到数组末尾
                if (start === (intervals.length-1)){
                    intervals.splice(start, 1, newInterval)
                    break;
                } else {
                    intervals.splice(start, 1)
                }
            }
        }
    }
    return intervals
};
// let intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
let intervals = [[1,5]], newInterval = [2,3]

console.log(insert(intervals, newInterval))
