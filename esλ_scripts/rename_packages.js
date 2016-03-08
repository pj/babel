#!/usr/bin/env node --harmony
"use strict";

let glob = require("glob");
let fs = require("fs");

function updateDependencies(dependencies) {
  let newDependencies = {};
  if (dependencies) {
    for (let key of Object.keys(dependencies)) {
      if ((key.indexOf("babel") == 0 || key.indexOf("babylon") == 0) && key.indexOf("babel-runtime") != 0) {
        newDependencies["eslambda-" + key] = dependencies[key];// "^0.0.1";
      } else {
        newDependencies[key] = dependencies[key];
      }
    }
  }
  return newDependencies;
}

glob("packages/eslambda-*/package.json", (er, files) => {
  if (er) {
    console.log(er);
    process.exit(1);
  }

  for (let filename of files) {
    let file = fs.readFileSync(filename, "utf8");

    let packagedotjson = JSON.parse(file);

    packagedotjson["name"] = "eslambda-" + packagedotjson["name"];
    packagedotjson["publishConfig"] = {"registry": "http://localhost:4873"};
    //packagedotjson["version"] = "0.0.1";
    packagedotjson["dependencies"] = updateDependencies(packagedotjson["dependencies"]);
    packagedotjson["devDependencies"] = updateDependencies(packagedotjson["devDependencies"]);

    fs.writeFileSync(filename, JSON.stringify(packagedotjson, null, 2));
  }
});
