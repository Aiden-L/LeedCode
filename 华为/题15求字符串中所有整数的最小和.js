/*
输入字符串s输出s中包含所有整数的最小和，
  说明：
  1字符串s只包含a~z,A~Z,+,-，
  2.合法的整数包括正整数，一个或者多个0-9组成，如：0,2,3,002,102
  3.负整数，负号开头，数字部分由一个或者多个0-9组成，如-2,-012,-23,-00023
  输入描述：包含数字的字符串
  输出描述：所有整数的最小和
  示例：
    输入：
      bb1234aa
  　输出
      10
  　输入：
      bb12-34aa
  　输出：
      -31
  说明：1+2-(34)=-31
 */
function solve(str) {
    let m_judge = false
    let miner_str = ""
    let pos_list = []
    let ans = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '-'){
            m_judge = true
            continue
        }
        if (m_judge && (str[i] >= '0' && str[i] <= '9')) {
            miner_str += str[i]
        } else {
            miner_str += ','
            m_judge = false
        }
        if (!m_judge && (str[i] >= '0' && str[i] <= '9')) {
            pos_list.push(parseInt(str[i]))
        }
    }
    let miner_list = miner_str.split(',')
    for (let i = 0; i < miner_list.length; i++) {
        if (miner_list[i] !== ''){
            ans -= parseInt(miner_list[i])
        }
    }
    for (let i = 0; i < pos_list.length; i++) {
        ans += pos_list[i]
    }
    return [miner_list, pos_list, ans]
}

let str = "bb12a-34aa"

console.log(solve(str))
