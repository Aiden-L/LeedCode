/*
公司用一个字符串来表示员工的出勤信息

absent：缺勤
late：迟到
leaveearly：早退
present：正常上班
现需根据员工出勤信息，判断本次是否能获得出勤奖，能获得出勤奖的条件如下：

缺勤不超过一次；
没有连续的迟到/早退；
任意连续7次考勤，缺勤/迟到/早退不超过3次。
如：

2
present
present absent present present leaveearly present absent

输入描述
用户的考勤数据字符串

记录条数 >= 1；
输入字符串长度 < 10000；
不存在非法输入；

输出描述

根据考勤数据字符串，如果能得到考勤奖，输出”true”；否则输出”false”，
对于输入示例的结果应为：

true false

原文链接：https://blog.csdn.net/qq_33183456/article/details/130967614
 */
function solve_item(num, str) {
    let s_list = str.split(' ')
    let absent_count = 0
    // 判断第二个条件的list
    let n2_list = ""
    // 判断第三个条件的list
    let n3_list = ""
    for (let j = 0; j < s_list.length; j++) {
        if (s_list[j] === "present"){
            n2_list += "0"
            n3_list += "0"
        }else if (s_list[j] === "absent") {
            absent_count ++
            n2_list += "0"
            n3_list += "1"
        }else {
            n2_list += "1"
            n3_list += "1"
        }
    }
    console.log(absent_count, n2_list, n3_list)
    if (absent_count > 1 || n2_list.indexOf("11") !== -1){
        return false
    }
    for (let j = 0; j < n3_list.length; j++) {
        let count = 0
        for (let k = j; k < j + 7; k++) {
            // if (!(k < n3_list.length)){
            //     break
            // }
            if (n3_list[k] === '1'){
                count ++
            }
            if (count > 3){
                return false
            }
        }
        // if (!(j + 7 < n3_list.length)){
        //     break
        // }
    }
    return true
}

function solve(num, str_list) {
    for (let i = 0; i < num; i++) {
        console.log(solve_item(num, str_list[i]))
    }
}

let str_list = [
    "present",
    "present absent present present leaveearly present absent",
    "late late late late"
]

solve(str_list.length, str_list)
