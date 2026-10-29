import fs from "fs"


export function readJson(filepath){

    console.log("Reading data from json file");

    //it will read data as text 
    const fileContent = fs.readFileSync(filepath, "utf-8")

    const jsonData = JSON.parse(fileContent)

    return jsonData
    
}