'use strict'
//const core = require('./lib/index');
const fileReader = require('./searchFile');
const searchDirectories = require('./searchDir');
 
const fileList = searchDirectories._getAllFilesFromFolder('./');


let libs = ['chalk','node','fs'];

console.log('\nLibraries that are not in use are:\n');

const notUsed = fileReader.readFiles(libs,fileList);

for(const lib of notUsed){
	console.log(`* ${lib}`);
}
 
