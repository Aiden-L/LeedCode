/*
现有N个任务需要在T时间内处理完成，同一时间只能处理一个任务，处理每个任务所需要的时间固定为1。
每个任务都有最晚处理时间限制和报酬，在最晚处理时间点之前处理完成任务才可获得对应的报酬奖励。
可用于处理任务的时间有限，请问在有限的时间内，可获得的最多报酬?
1 < N < 100，1 < T < 100

输入描述
第一行输入两个数T和N，表示N个任务和全部任务的最迟的时间节点T。
接下来输入N行，每一行输入两个数K和L表示一个任务，K为这个任务的最晚完成时间，L为完成该任务能够获得的报酬。

输出描述
一个整数，表示能够获取的最大报酬。

示例1
输入
4 3
1 2
1 3
1 4
2 5
输出
9
说明：在单位时间1，完成任务2，获得报酬4；在单位时间2，完成任务3，获得报酬5

示例2
输入
3 5
1 3
2 2
3 1
3 4
4 5
输出
12
说明：在单位时间1，完成任务0，（最晚完成时间是1），获得报酬3；在单位时间2，完成任务4，（最晚完成时间是4），获得报酬5；在单位时间3，完成任务3，（最晚完成时间是3），获得报酬4
 */

function solve(N, T, task_list) {
    // 用一个哈希表储存最晚完成时间为时刻t的任务的报酬
    let task_dict = {}
    for (let task of task_list) {
        if (task[0] in task_dict) {
            task_dict[task[0]<T?task[0]:T].push(task[1])
        }else {
            task_dict[task[0]<T?task[0]:T] = [task[1]]
        }
    }
    console.log(task_dict)
    let cur_task_l = []
    let total_value = 0
    for (let i = T; i > 0; i--) {
        if (i in task_dict) {
            cur_task_l = cur_task_l.concat(task_dict[i])
        }
        // cur_task_l += task_dict[i]
        console.log(cur_task_l)
        cur_task_l.sort((a, b) => a - b)
        if (cur_task_l.length > 0) {
            total_value += cur_task_l.pop()
        }
    }
    return total_value
}

N = 4
T = 3
task_list = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 5]
]

console.log(solve(N, T, task_list))

