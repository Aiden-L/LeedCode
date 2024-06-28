/*
题目描述
【乱序整数序列两数之和绝对值最小】
给定一个随机的整数(可能存在正整数和负整数)数组 nums，请你在该数组中找出两个数，其和的绝对值(|nums[x]+nums[y]|)为最小值，并返回这个两个数(按从小到大返回)以及绝对值:
每种输入只会对应一个答案。
但是，数组中同一个元素不能使用两遍。

输入描述
一个通过空格分割的有序整数序列字符串，最多1000个整数，目整数数值范围是[-65535, 65535]

输出描述
两数之和绝对值最小值

示例1 输入输出示例仅供调试，后台判题数据一般不包含示例
输入
-1 -3 7 5 11 15
输出
-3 5 2
说明
因为 |nums[0] + nums[2]| = |-3 + 5| = 2 最小，所以返回 -3 5 2。
 */
function solve(nums) {
    nums.sort((a, b) => a - b)
    if (nums[0] > 0) return [nums[0], nums[1]]
    let i = 0, j = nums.length - 1
    while (i < j) {
        let sum = Math.abs(nums[i] + nums[j])
        if (sum > Math.abs(nums[i] + nums[j - 1])){
            j --
            continue
        }
        if (sum > Math.abs(nums[i + 1] + nums[j])){
            i ++
            continue
        }
        if (sum > Math.abs(nums[i + 1] + nums[j - 1])){
            j --
            i ++
            continue
        }
        return [nums[i], nums[j], sum]
    }
}

// better solution
function solve2(nums) {
    nums.sort((a, b) => a - b)
    if (nums[0] > 0) return [nums[0], nums[1]]
    let i = 0, j = nums.length - 1
    let min = Number.MAX_SAFE_INTEGER
    let min_i = 0, min_j = 0
    while (i < j) {
        let sum = nums[i] + nums[j]
        if (Math.abs(sum) < min){
            min = Math.abs(sum)
            min_i = i
            min_j = j
        }
        if (sum < 0){
            i ++
        }else if (sum > 0){
            j --
        }else {
            break
        }
    }
    return [nums[min_i], nums[min_j], min]
}

// let nums = [-1, -3, 7, 5, 11, 15]
let nums = [-1, -3, 7, 5, 11, 1, 15]
// let nums = [-3, -1, 2, 5, 9]

console.log(solve2(nums))
