// > Problem: [3. 无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/)
var lengthOfLongestSubstring = function(s) {
    let p1 = 0
    let p2 = 1
    let max = ""
    while (p2 < s.length) {
        if (s.substring(p1, p2).indexOf(s[p2]) !== -1) {
            p1 ++
        }else {
            max = max.length > s.substring(p1, p2 + 1).length ? max : s.substring(p1, p2 + 1)
            p2 ++
        }
    }
    return [max.length, max]
};
console.log(lengthOfLongestSubstring("abcabcbb"))
