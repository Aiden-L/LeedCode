/*
题目描述：给出原文字符串str，通过对字符串的每个字母进行改变来实现加密，加密方式是在每一个字母str[i]偏移特定数组元素a[i]的量。数组a的前三位已经赋值：a[0]=1,a[1]=2,a[2]=4,当i>=3时，数组元素a[i]=a[i-1]+a[i-2]+a[i-3]。例如：原文abcde加密后bdgkr，其中偏移量分别是1，2，4，7，13。
输入描述：第一行是整数n，表示n组测试数据。每组数据包含一行，原文str(只含有小写字母，长度大于0小于50)。
输出描述：每组测试数据输出一行，表示密文。
 */
function solve(str) {
    let a = [1, 2, 4]
    let new_str = ""
    for (let i = 0; i < str.length; i++) {
        if (i > 2) a.push(a[i-1]+a[i-2]+a[i-3])
        new_str += String.fromCharCode((str.charCodeAt(i) + a[i] - 97) % 26 + 97)
    }
    return new_str
}

let str = "erskaadaazerskaadaazerskaadaazerskerskaadaazerskaadaazerskaadaazerskerskaadaazerskaadaazerskaadaazersk"

console.log(solve(str))
