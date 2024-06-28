/*
描述
输入一个字符串，返回其最长的数字子串，以及其长度。若有多个最长的数字子串，则将它们全部输出（按原字符串的相对位置）
本题含有多组样例输入。

数据范围：字符串长度 1≤𝑛≤200 保证每组输入都至少含有一个数字

输入描述：
输入一个字符串。1<=len(字符串)<=200

输出描述：
输出字符串中最长的数字字符串和它的长度，中间用逗号间隔。如果有相同长度的串，则要一块儿输出（中间不要输出空格）。

示例1
输入：
abcd12345ed125ss123058789
a8a72a6a5yy98y65ee1r2

输出：
123058789,9
729865,2

说明：
样例一最长的数字子串为123058789，长度为9
样例二最长的数字子串有72,98,65，长度都为2
 */
function solve(str) {
    let cur_str = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            cur_str += str[i]
        } else {
            cur_str += ","
        }
    }
    let cur_str_arr = cur_str.split(",")
    let max_list = [""]
    for (let i = 0; i < cur_str_arr.length; i++) {
        if (cur_str_arr[i].length > max_list[0].length) {
            max_list = [cur_str_arr[i]]
        } else if (cur_str_arr[i].length === max_list[0].length) {
            max_list.push(cur_str_arr[i])
        }
    }
    return max_list
}

let str = "abcd12345ed125ss123058789"

console.log(solve(str))

// 牛客网代码
// https://www.nowcoder.com/practice/2c81f88ecd5a4cc395b5308a99afbbec
/*
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function solve(str) {
    let cur_str = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            cur_str += str[i]
        } else {
            cur_str += ","
        }
    }
    let cur_str_arr = cur_str.split(",")
    let max_list = [""]
    for (let i = 0; i < cur_str_arr.length; i++) {
        if (cur_str_arr[i].length > max_list[0].length) {
            max_list = [cur_str_arr[i]]
        } else if (cur_str_arr[i].length === max_list[0].length) {
            max_list.push(cur_str_arr[i])
        }
    }
    return max_list
}

void async function () {
    // Write your code here
    while(line = await readline()){
        let ans_list = solve(line)
        console.log(ans_list.join("") + "," + ans_list[0].length)
    }
}()
 */