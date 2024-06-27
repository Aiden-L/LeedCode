/*
链接：https://www.nowcoder.com/questionTerminal/5382ff24fbf34a858b15f93e2bd85307
来源：牛客网

给定两个字符串 s和 t ，判断 s是否为 t 的子序列。
你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度n ~= 500,000），而 s 是个短字符串（长度 <=100）。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

进阶：时间复杂度𝑂(𝑛) ，空间复杂度𝑂(𝑛)

示例：
abc
ahbgdc
-> true

axc
ahbgdc
-> false
 */
function solve(str1, str2) {
    let str1_index = 0
    for (let i = 0; i < str2.length; i++) {
        if (str1[str1_index] === str2[i]) {
            str1_index ++
        }
        if (str1_index === str1.length) {
            return true
        }
    }
    return false
}

// let str1 = "abc"
// let str2 = "ahbgdc"

let str1 = "axc"
let str2 = "ahbgdc"

console.log(solve(str1, str2))

// 原网站输入代码
/*
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let str1 = await readline()
    let str2 = await readline()
    let str1_index = 0;
    for (let i = 0; i < str2.length; i++) {
        if (str1[str1_index] === str2[i]) {
            str1_index++;
        }
        if (str1_index === str1.length) {
            console.log(true)
            return
        }
    }
    console.log(false)
}()
 */
