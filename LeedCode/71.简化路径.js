var simplifyPath = function(path) {
    let arr = path.split('/')
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === '..' && res.length > 0){
            res.pop()
        }else if(arr[i] !== '.' && arr[i] !== '..' && arr[i]){
            res.push(arr[i])
        }
    }
    return '/' + res.join('/')
};
let path = "/a/./b/../../c/"
console.log(simplifyPath(path))
