const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

try {
    // `who-to-greet` input defined in action metadata file
    const inputDir = core.getInput('inputDir');
    console.log(`Hello ${inputDir}!`);

    // read the files in the directory
    const files = fs.readdirSync(inputDir);

    // iterate over the files
    for (const file of files) {
        // print the file name
        console.log(file);
    }



    const time = (new Date()).toTimeString();
    core.setOutput("outputDir", "dir/" + time);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}