import {Csv, Parsed} from './src/adapter/csv'
import {distance} from "./src/domain/diffs";

const csv = new Csv("./data/part-01.txt")
const fileContent = csv.read()

fileContent.then(result => {
    console.log(`<${result}>`);
    const distances = new Parsed(result).distances();
    console.log(distances);
    console.log(distance(distances));
}).catch(error => {
    console.log("ERROR !")
}).finally(() => {
    console.log("The end!")
})


