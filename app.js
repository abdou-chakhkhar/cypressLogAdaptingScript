const fs = require('fs')

const iLabFilePathName = './OussamaReport.json'
const cypressLogPathName = './mochawesome.json'

const finalReport = "finalReport.json"

const TransformedLog = {
    reports: []
};

fs.readFile(cypressLogPathName, 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    try {
        const obj = JSON.parse(jsonString)

        const { start, failures } = obj.stats;
        const { title } = obj.results[0].suites[0];
        const batch = failures === 0 ? "successful" : "failed";

        console.log(failures);



        const fileObj = {
            date: start,
            database : "WebStudioE2EProject",
            product: {
                OS: "Windows 10 Pro 1809 (17763.195)",
                '4D': "4D v17 R5 build 17R5.232656 (A1)",
                branch: "17R5",
                build: "232656",
                bitness: ""
            },
            unit: {
                description: title,
                developer: "@4d.com"
            },
            runConfig: "4D Local mode",
            runCompiled: {
                "testRun": 1,
                "testCases": [
                    "test_XBOXTrace"
                ],
                "assert": 2,
                "duration": 0.505,
                "result": "successful"
            },
            batch
        }

        
        TransformedLog.reports.push(fileObj)

        console.log("TransformedLog is:", TransformedLog) 
    } catch(err) {
        console.log('Error parsing JSON string:', err)
    }
})





//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// const fs = require("fs-extra");
// const path = require("path");


// const mapThroughFiles = () => {
//     const resultsFolder = path.resolve("results")
//     const files = fs.readdirSync(resultsFolder)


//     const regex = new RegExp('/.json$/')

//     const jsonFiles = files.filter(file => file.match(/.json$/))

//     console.log(jsonFiles);
// }

// mapThroughFiles()