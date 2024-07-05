/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let p1 =0, p2 = 1;
    intervals.sort((a, b) => a[0] - b[0]);
    while (p2 < intervals.length) {
        if (intervals[p1][1]>=intervals[p2][0]) {
            intervals[p1][1] = Math.max(intervals[p2][1], intervals[p1][1]);
            intervals.splice(p2, 1);
        } else {
            p1++;
            p2++;
        }
    }
    return intervals;
};
let intervals = [[1,3],[2,6],[8,10],[15,18]]
console.log(merge(intervals))
