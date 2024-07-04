/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let p1 = 0, p2 = 0
    let ans = Infinity
    let sum = nums[p1]
    while (p2 < nums.length) {
        if (sum >= target) {
            ans = p2 - p1 + 1 < ans ? p2 - p1 + 1 : ans
            sum -= nums[p1]
            p1 ++
        } else {
            p2 ++
            sum += nums[p2]
        }
    }
    return ans === Infinity ? 0 : ans
}
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
