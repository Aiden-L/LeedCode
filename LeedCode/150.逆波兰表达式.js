/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN2 = function(tokens) {
    let stack = [];
    for(let i=0;i<tokens.length;i++){
        if(!isNaN(Number(tokens[i]))){
            stack.push(Number(tokens[i]));
        }else{
            let a = stack.pop();
            let b = stack.pop();
            switch (tokens[i]){
                case "+":
                    stack.push(b+a);
                    break;
                case "-":
                    stack.push(b-a);
                    break;
                case "*":
                    stack.push(b*a);
                    break;
                case "/":
                    stack.push(parseInt(b/a));
                    break;
            }
        }
    }
    return stack.pop();
};
var evalRPN = function(tokens) {
    let stack = [];
    for(let i=0;i<tokens.length;i++){
        switch (tokens[i]){
            case "+":
                stack.push(stack.pop()+stack.pop());
                break;
            case "-":
                stack.push(-stack.pop()+stack.pop());
                break;
            case "*":
                stack.push(stack.pop()*stack.pop());
                break;
            case "/":
                stack.push(parseInt(1/stack.pop()*stack.pop()));
                break;
            default:
                stack.push(parseInt(tokens[i]));
                break
        }
    }
    return stack.pop();
};
let tokens = ["2","1","+","3","*"]
console.log(evalRPN(tokens))