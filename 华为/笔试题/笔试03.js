/*
给定M（0 〈 M〈=30）个字符（a-z），从中取出任意字符（每个字符只能用一次）拼接成长度为N（0 〈 N〈=5）的字符串
要求相同的字符不能相邻，计算出给定的字符列表能拼接出多少种满足条件的字符串，输入非法或者无法拼接出满足条件的字符串则返回0

用例1：
abc 1 -> 3
给定的字符为abc，长度为1，可以拼接出3个字符串：a、b、c

用例2：
dde 2 -> 2
给定的字符为dde，长度为2，可以拼接出2个字符串：de、ed
 */
function solve(str, num) {
    let char_map = new Map();
    for (let i = 0; i < str.length; i++) {
        char_map.set(str[i], char_map.get(str[i]) ? char_map.get(str[i]) + 1 : 1)
    }
    console.log(char_map)
    function find_str(cur_length, last_char) {
        if (cur_length === num) {
            return 1
        }
        let res = 0;
        for (let [key, value] of char_map) {
            if (value > 0 && key !== last_char) {
                char_map.set(key, value - 1)
                res += find_str(cur_length + 1, key)
                char_map.set(key, value + 1)
            }
        }
        return res
    }

    return find_str(0, null)
}

// let str = "dde"
// let num = 2
let str = "abc"
let num = 1

console.log(solve(str, num))
