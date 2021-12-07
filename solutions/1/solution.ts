import { read } from '@lib/read';
import { split } from '@lib/split';



function CountNumberOfIncreases(input: number[]) {

    var totals: number = 0;

    for (let i = 0; i < input.length - 1; i++) {

        if (input[i + 1] > input[i])
            totals++;

    }

    return totals
}


export const solution1 = async (test: boolean) => {
    const input = split(await read(1, { test }))
        .map(Number);

    console.log(`2021-01 part one: ${CountNumberOfIncreases(input)}`); // 7 test
    // console.log(`2021-01 part two: ${countIncreases(threeAveraged(input))}`); // 1567
}
