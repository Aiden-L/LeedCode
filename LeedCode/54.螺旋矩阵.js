/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    function right(i, j){
        return [i, j+1]
    }
    function left(i, j){
        return [i, j-1]
    }
    function up(i, j){
        return [i-1, j]
    }
    function down(i, j){
        return [i+1, j]
    }
    let i = 0, j = 0
    let directions = [right, left, up, down]
    let direction = 0
    let ans = [matrix[i][j]]
    while (true){
        let temp_directions = []
        for (let k = 0; k < directions.length; k++){
            let [temp_i, temp_j] = directions[k](i, j)
            if (matrix[temp_i] && matrix[temp_i][temp_j] !== null && matrix[temp_i][temp_j] !== undefined){
                temp_directions.push(k)
            }
        }
        // console.log(temp_directions)
        // 如果没有可选的方向，退出循环
        if (temp_directions.length === 0){
            break;
        }else {
            matrix[i][j] = null
            // 如果只有一个方向可选，改变方向选择该方向，否则方向不变
            if (temp_directions.length === 1){
                direction = temp_directions[0]
            }
            let [temp_i, temp_j] = directions[direction](i, j)
            i = temp_i
            j = temp_j
            ans.push(matrix[i][j])
        }
    }
    return ans
};

// 方法2，循环改变朝向
var spiralOrder2 = function(matrix) {
    function right(i, j){
        return [i, j+1]
    }
    function left(i, j){
        return [i, j-1]
    }
    function up(i, j){
        return [i-1, j]
    }
    function down(i, j){
        return [i+1, j]
    }
    let i = 0, j = 0
    let directions = [right, down, left, up]
    let direction = 0
    let ans = [matrix[i][j]]
    if (matrix.length === 1 && matrix[0].length === 1){
        return ans
    }
    matrix[i][j] = undefined
    while (true){

        let [temp_i, temp_j] = directions[direction](i, j)
        if (!matrix[temp_i] || matrix[temp_i][temp_j] === undefined) {
            direction = (direction + 1) % directions.length
            continue
        }
        i = temp_i
        j = temp_j
        ans.push(matrix[i][j])
        matrix[i][j] = undefined
        if (ans.length === matrix.length * matrix[0].length) break
    }
    return ans
};
matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(spiralOrder(matrix))
matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(spiralOrder2(matrix))
