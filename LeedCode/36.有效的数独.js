/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let row = [[],[],[],[],[],[],[],[],[]];
    let col = [[],[],[],[],[],[],[],[],[]];
    let box = [
        [[],[],[]],
        [[],[],[]],
        [[],[],[]]
    ];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if(board[i][j] !== '.'){
                // 判断row
                if(row[i].includes(board[i][j])){
                    return false;
                }else{
                    row[i].push(board[i][j]);
                }
                // 判断col
                if(col[j].includes(board[i][j])){
                    return false;
                }else{
                    col[j].push(board[i][j]);
                }
                // 判断box
                const x = Math.floor(i / 3);
                const y = Math.floor(j / 3);
                if(box[x][y].includes(board[i][j])){
                    return false;
                }else{
                    box[x][y].push(board[i][j])
                }
            }
        }
    }
    return true;
};
board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]
console.log(isValidSudoku(board))