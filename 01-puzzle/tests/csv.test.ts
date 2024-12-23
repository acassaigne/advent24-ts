import {CreateLists, LinesToArray, Parsed} from '../src/adapter/csv'
import {Distances} from "../src/domain/diffs";


test('Create two elements array from string with one newline', () => {
    expect(LinesToArray("one\ntwo")).toStrictEqual(["one", "two"]);
});

test('Create one element array from string without newline', () => {
    expect(LinesToArray("one")).toStrictEqual(["one"]);
});

test('Create list of lists from one line', () => {
    expect(CreateLists(["11 22"])).toStrictEqual(new Distances([11], [22]));
});

test('Create list of lists from two lines', () => {
    expect(CreateLists(["11 22", "33 44"])).toStrictEqual(new Distances([11, 33], [22, 44]));
});

test('Create list of lists from two lines', () => {
    expect(CreateLists(["11 22", "33 44"])).toStrictEqual(new Distances([11, 33], [22, 44]));
});

test('Create lists with multiples spaces', () => {
    expect(CreateLists(["1    3", "56   57"])).toStrictEqual(new Distances([1, 56], [3, 57]));
});

test('Distances lists from string', () => {
    const parsedDistances = new Parsed("1    3\n56   57").distances()
    expect(parsedDistances).toStrictEqual(new Distances([1, 56], [3, 57]));
});

test('Parse input string representing only one line', () => {
    const input = "42 43";

    const distances = new Parsed(input).distances();

    expect(distances).toStrictEqual(new Distances([42], [43]));
});

