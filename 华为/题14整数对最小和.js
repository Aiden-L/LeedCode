/*
给定两个整数数组array1、array2，数组元素按升序排列。
假设从array1、array2中分别取出一个元素可构成一对元素，现在需要取出k对元素，并对取出的所有元素求和，计算和的最小值。
注意：两对元素如果对应于array1、array2中的两个下标均相同，则视为同一对元素。

输入描述：
输入两行数组array1、array2，每行首个数字为数组大小size(0 < size <= 100);
0 <array1[i] <=1000
0 <array2[i] <= 1000
接下来一行为正整数 k
0 < k <= array1.size() * array2.size()

输出描述：
满足要求的最小和

示例：
输入：
3 1 1 2
3 1 2 3
2

输出：
4

说明：
用例中，需要取2对元素
取第一个数组第0个元素与第二个数组第0个元素组成1对元素[1,1];
取第一个数组第1个元素与第二个数组第0个元素组成1对元素[1,1];
求和为1+1+1+1=4，为满足要求的最小和


 */
function solve(array1, array2, num) {
    let all_solution = []
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            all_solution.push(array1[i] + array2[j]);
        }
    }
    all_solution.sort((a, b) => a - b)
    let min_sum = 0
    for (let i = 0; i < num; i++) {
        min_sum += all_solution[i]
    }
    return min_sum
}

let array1 = [1, 1, 2]
let array2 = [1, 2, 3]
let num = 2
// let array1 = [1, 7, 11]
// let array2 = [2, 4, 6]
// let num = 3

console.log(solve(array1, array2, num))
