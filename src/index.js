const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const path = require('path');

try {
    // `who-to-greet` input defined in action metadata file
    const inputDir = core.getInput('inputDir');
    console.log(`Hello ${inputDir}!`);

    const imageDirectory = '/github/workspace/' + inputDir

    // read the files in the directory
    const files = fs.readdirSync(imageDirectory);

    // create a markdown string
    let markdown = '';

    // iterate over the files
    for (const file of files) {
        // get the file path
        const filePath = path.join(imageDirectory, file);
        console.log(file);
        // append the image to the markdown string
        markdown += `![image](${filePath})`;
    }

    // write the markdown string to a file
    fs.writeFileSync(   imageDirectory + '/README.md', markdown);




    const time = (new Date()).toTimeString();
    core.setOutput("outputDir", "dir/" + time);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}