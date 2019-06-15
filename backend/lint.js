/*jslint
    node
*/

const jslint = require("./dependencies/jslint");
const fs = require("fs");
const fileNames = process.argv.slice(2);

fileNames.forEach(function (fileName) {
    "use strict";
    fs.readFile(fileName, "utf-8", function (error, fileText) {
        if (error) {
            throw error;
        }
        const lintedCode = jslint(fileText);
        if (lintedCode.ok === true) {
            console.log(fileName + " is okay.");
        }
        if (lintedCode.ok === false) {
            console.error(
                `Errors under ${fileName}`
            );
            lintedCode.warnings.forEach((warning) => console.error(
                `${warning.message}`
                + ` at line ${warning.line}`
                + ` on column ${warning.column}.`
                + "\n"
            ));
        }
    });
});

