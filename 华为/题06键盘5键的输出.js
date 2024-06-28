/*
【5键键盘的输出】有一个特殊的 5键键盘，上面有 a,ctrl-c,ctrl-x,ctrl-v,ctrl-a五个键。
a键在屏幕上输出一个字母 a;
ctrl-c将当前选择的字母复制到剪贴板;
ctrl-x将当前选择的 字母复制到剪贴板，并清空选择的字母;
ctrl-v将当前剪贴板里的字母输出到屏幕;
ctrl-a 选择当前屏幕上所有字母。
注意:
1、剪贴板初始为空，新的内容被复制到剪贴板时会覆盖原来的内容
2、当屏幕上没有字母时，ctrl-a无效
3、当没有选择字母时，ctrl-c和 ctrl-x无效
4、当有字母被选择时，a和ctrl-v这两个有输出功能的键会先清空选择的字母，再进行输出
给定一系列键盘输入，输出最终屏幕上字母的数量。
输入描述:
输入为一行，为简化解析，用数字 12345代表 a,ctrl-c,ctrl-x,ctrl-v,ctrl-a五个键的输入，数字用空格分隔
输出描述:
输出一个数字，为最终屏目上字母的数量。
示例:
1 1 1 -> 3
 */
function solve(str) {
    let str_list = str.split(" ")
    let num = 0
    let chosen_num = 0
    let copy_num = 0
    for (let i = 0; i < str_list.length; i++) {
        switch(str_list[i]){
            case "1":
                if (chosen_num>0){
                    num = 1;
                    chosen_num = 0;
                }else{
                    num ++;
                }
                break;
            case "2":
                copy_num = chosen_num; break;
            case "3":
                copy_num = chosen_num; num -= chosen_num; break;
            case "4":
                if (chosen_num>0){
                    num = copy_num;
                    chosen_num = 0;
                }else{
                    num += copy_num;
                }
                break;
            case "5":
                chosen_num = num; break;
        }
    }
    return num
}

// let str = "1 1 5 1 5 2 4 4"
let str = "1 1 1"

console.log(solve(str))
