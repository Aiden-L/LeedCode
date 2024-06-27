/*
小组中每位都有一张卡片
卡片是6位以内的正整数
将卡片连起来可以组成多种数字
计算组成的最大数字

输入输出示例
22,221 -> 22221
4589,101,41425,9999 -> 9999458941425101

https://wiki.amoscloud.com/zh/ProgramingPractice/NowCoder/Adecco/Topic0079
 */

function solve(num_list) {
    for (let i = 0; i < num_list.length; i++) {
        num_list[i] = num_list[i].toString();
    }
    return num_list.sort(
        (a, b) => {
            let min_len = Math.min(a.length, b.length);
            if (a.length != b.length && a.slice(0, min_len) == b.slice(0, min_len)) {
                if (a.length > b.length) {
                    return b[0] - a[min_len];
                }else{
                    return b[min_len] - a[0];
                }
            }else{
                if (a == b) return 0;
                else return a > b ? -1 : 1;
            }
        }
    ).join("")
}

let num_list = [22, 221]
// let num_list = [2999,29993]
// let num_list = [4589,101,41425,9999]

console.log(solve(num_list))

// 9999458941425101
