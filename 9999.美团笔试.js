const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let T = parseInt(await readline());

    for (let k = 0; k < T; k++) {
        let N = parseInt(await readline());
        let arr_str = await readline();
        arr_str = arr_str.split("");
        let M = parseInt(await readline());
        let sex_str = await readline();
        sex_str = sex_str.split("");

        for (let i = 0; i < M; i++) {
            // woman
            if (sex_str[i] == "F") {
                let no_seat_lock = true;
                let first_empty_index = -1;
                for (let j = 0; j < N; j++) {
                    if (arr_str[j] == "0") {
                        no_seat_lock = false;
                        arr_str[j] = "1";
                        console.log(j + 1);
                        break;
                    }
                    if (arr_str[j] == "1" && first_empty_index == -1) {
                        first_empty_index = j;
                    }
                }
                if (no_seat_lock) {
                    arr_str[first_empty_index] = "2";
                    console.log(first_empty_index + 1);
                }
            }
            // man
            else {
                let no_seat_lock = true;
                let first_empty_index = -1;
                for (let j = 0; j < N; j++) {
                    if (arr_str[j] == "1") {
                        no_seat_lock = false;
                        arr_str[j] = "2";
                        console.log(j + 1);
                        break;
                    }
                    if (arr_str[j] == "0" && first_empty_index == -1) {
                        first_empty_index = j;
                    }
                }
                if (no_seat_lock) {
                    arr_str[first_empty_index] = "1";
                    console.log(first_empty_index + 1);
                }
            }
        }

        // console.log(T, N, arr_str, M, sex_str)
    }
})();
