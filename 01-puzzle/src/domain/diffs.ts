export function diffs(a: number[], b: number[]): number[] {
    let result: number[] = [];
    a.forEach((e1, idx) => {
        result.push(Math.abs(e1 - b[idx]))
    })
    return result;
}

export class Distances {
    constructor(public readonly listA: number[],
                public readonly listB: number[]) {
    }
}

export function distance(distances: Distances): number {
    let result = diffs(distances.listA.sort(), distances.listB.sort());

    return result.reduce((total, item) => total + item);
}