import {Distances} from "../domain/diffs";
// import {readFile} from 'fs'
import {promises} from 'fs'

export function CreateLists(rawLines: string[]): Distances {
    let points = new Distances([], [])
    rawLines.forEach((rawLine) => {
        let [v1, v2] = rawLine.replace(/ +/g, ' ').split(" ")
        points.listA.push(Number(v1))
        points.listB.push(Number(v2))
    })
    return points
}

export function LinesToArray(input: string): string[] {
    return input.split("\n")
}

export function CreateDistances(input: string): Distances {
    const a = LinesToArray(input)
    return CreateLists(a);
}

export class Parsed {
    private input: string;

    constructor(input: string) {
        this.input = input
    }

    distances(): Distances {
        return this.createDistances(this.input)
    }

    private createDistances(input: string): Distances {
        const a = LinesToArray(input)
        return CreateLists(a);
    }

}

export class Csv {
    #filenname: string

    constructor(filename: string) {
        this.#filenname = filename
    }

    read(): Promise<string> {
        return promises.readFile(this.#filenname, 'utf8')
    }
}




