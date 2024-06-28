/*
给定一段英文文章片段，由若干单词组成，单词间以空格间隔，单词下标从0开始。
请翻转片段中指定区间的单词顺序并翻转后的内容。
例如个给定的英文文章片段为"I am a developer"，翻转区间为[0,3]，则输出"developer a am I"。
String reverseWords(String s，int start, int end)

输入描述：
使用换行隔开三个参数，第一个参数为英文文章内容即英文字符串，第二个参数为待翻转内容起始单词下标，
第三个参数为待翻转内容最后一个单词下标。

输出描述：
翻转后的英文文章片段所有单词之间以一个半角空格分隔进行输出

备注：
英文文章内容首尾无空格

示例1：
输入
I am a developer
1
2

输出
I a am developer
 */
function solve(str, start, end) {
    let str_list = str.split(' ')
    str_list.splice(start, end - start + 1, ...str_list.slice(start, end + 1).reverse())
    return str_list.join(" ")
}

// let str = "I am a developer"
// let start = 1
// let end = 2
let str = "I am a developer"
let start = 0
let end = 3

console.log(solve(str, start, end))
