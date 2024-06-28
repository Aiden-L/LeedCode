/*
给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回 滑动窗口中的最大值 。

示例 1：
输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

 示例 2：
 输入：nums = [1], k = 1
 输出：[1]
 */

// 暴力解法
function solve(nums, k) {
    let new_list = []
    for (let i = 0; i < nums.length - k + 1; i++) {
        new_list.push(Math.max(...nums.slice(i, i + k)))
    }
    return new_list
}

// 单调队列解法 解析参考：https://www.bilibili.com/video/BV1XS4y1p7qj/
function solve2(nums, k) {
    function max_queue_push(max_queue, val){
        while (max_queue[max_queue.length - 1] < val) {
            max_queue.pop()
        }
        max_queue.push(val)
    }
    function max_queue_pop(max_queue, val){
        if (max_queue[0] === val) {
            max_queue.shift()
        }
    }
    let new_list = []
    let max_queue = []
    for (let i = 0; i < k; i++) {
        max_queue_push(max_queue, nums[i])
    }
    new_list.push(max_queue[0])
    for (let i = 0; i < nums.length - k; i++) {
        max_queue_pop(max_queue, nums[i])
        max_queue_push(max_queue, nums[i + k])
        new_list.push(max_queue[0])
    }
    return new_list
}

let nums = [1,3,-1,-3,5,3,6,7]
let k = 3

console.log(solve(nums, k))
console.log(solve2(nums, k))
