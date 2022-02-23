#!/usr/bin/env node
const { randomInt } = require('crypto');
const process = require('process');
const fs = require('fs');
const { userInfo } = require('os');

async function writeFile(filePath, text, mode='w'){
	//fs.open(filePath, 'w');
	if (mode == 'c'){
		try {
			await fs.writeFile(filePath, text, function(err){
				
				if (err) console.log(err)
			});
		} catch (error) {
			console.error(`Got an error trying to write to a file: ${error.message}`);
		}
	} else
	if (mode == 'w'){
		try {
			await fs.appendFile(filePath, text, function(err){
				
				if (err) console.log(err)
			});
		} catch (error) {
			console.error(`Got an error trying to write to a file: ${error.message}`);
		}
	} else
	if (mode == 'r'){
		return fs.readFileSync(filePath, 'utf-8')
	}

}

function getRandArr(len=10000){
	let arr = []
	let i
	for(i=0; i < len; i++){
		let num = randomInt(-220, 220);
		num = num * (randomInt(-220, 220))
		num = num - (randomInt(-220, 220))
		num = num + (randomInt(-220, 220))
		arr.push(num)
	}
	console.log("Made an array the size of " + arr.length);
	return arr
}

//for (x=0; x<100; x++) {
const arr = getRandArr(process.argv[2])
let fakearr = "[" + arr.length + ",[" +arr.join(", ")+ "]]\n"
return writeFile('./unsorted.log', fakearr, 'w')
let toggled = true
do {
	toggled = false
	let x
	for(x=0; x<arr.length; x++){
		if (arr[x] > arr[x+1]){
			let tmp = arr[x];
			arr[x] = arr[x+1];
			arr[x+1] = tmp;
			toggled = true
		}
	}
} while (toggled)

writeFile('./main.log', fakearr, 'w')
console.log("Done!\n");
console.log(arr)
//}