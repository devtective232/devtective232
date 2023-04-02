// H:\MIO\Extras\HHCommandTest\Sovryn-smart-contracts_master\scripts\pruebita.js
// const hre = require("hardhat");
const child = require('child_process');
const fs = require('fs');

var pu = child.execSync('git pull');
console.log(pu.toString());
// var commHash = child.execSync('git log --pretty=format:[%x22%H%x22,%x22%ad%x22], --branches=*');
// var commHash = child.execSync('git log --pretty=format:[%x22%H%x22,%x22%ad%x22], --date=short --all');
// var commHash = child.execSync('git log --pretty=format:[%x22%H%x22,%x22%ad%x22], --date=format:%Y-%m-%d-%H:%M:%S --all');
// var commHash = child.execSync('git log --pretty=format:[%x22%H%x22,%x22%ad%x22,%x22%at%x22], --date=format:%Y-%m-%d-%H:%M:%S --all');
var commHash = child.execSync('git log --pretty=format:[%x22%H%x22,%x22%at%x22,%x22%s%x22], --all');
// commHash = JSON.stringify(commHash.toString());
commHash = commHash.toString();
commHash = "[" + commHash.substring(0,commHash.length-2) + "]]";
if (!fs.existsSync('./scripts/')) {fs.mkdirSync('./scripts/', { recursive: true }, (err) => {if (err) throw err;});}
if (!fs.existsSync('./scripts/out.json')) fs.writeFileSync('./scripts/out.json',commHash,{flag:"a+"});
commHash = require('./scripts/out.json');
// commHash = JSON.parse(commHash);
// console.log(commHash);

/*
fs.unlink('./scripts/out.json', (err) => {
    if (err) {
        throw err;
    }
    console.log("Delete File successfully.");
});
*/

console.log('total number of commits: ' + commHash.length);

/*
async function main() {
    await child.execSync('node suma 3 4');
}

main();
*/