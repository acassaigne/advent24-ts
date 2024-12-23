import {diffs,  distance, Distances} from '../src/domain/diffs'
import {Parsed} from "../src/adapter/csv";


test('diff on two lists with single value', () => {
    expect(diffs([1], [2])).toStrictEqual([1]);
});

test('diff on two lists with single value 1 & 3', () => {
    expect(diffs([1], [3])).toStrictEqual([2]);
});

test('diff on two lists with two values', () => {
    expect(diffs([1, 2], [3 ,4])).toStrictEqual([2, 2]);
});

test('distance of two lists with two values', () => {
    expect(distance(new Distances([1, 2], [3 ,4]))).toStrictEqual(4);
});

test('distance of two lists with two values', () => {
    expect(distance(new Distances([1, 2], [3 ,4]))).toStrictEqual(4);
});

test('distance of two lists not ordered with two values', () => {
    expect(distance(new Distances([2, 1], [1 ,2]))).toStrictEqual(0);
});


test('points A point B', () => {
    expect(new Distances([1], [2])).toStrictEqual(new Distances([1], [2]));
});


test('First example exercice', () => {
    const input = `3   4
4   3
2   5
1   3
3   9
3   3`

    const distances = new Parsed(input).distances();

    expect(distances).toStrictEqual(new Distances([3, 4, 2, 1, 3, 3], [4, 3, 5, 3, 9, 3]));
});