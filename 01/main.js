const fs = require('fs');

// 2nd of december, count calories according to input series, return the sum of three top most elves
const input = fs.readFileSync('./input.txt', {encoding: 'utf8', flag: 'r'});

const sanitizeInput = input.split(/\r?\n/);
const groupItemsByIndex = [];
let bagOfCuedElf = 0;

for (let i = 0; i < sanitizeInput.length; i++) {
	const item = sanitizeInput[i];
	
	if (Number(item) > 0) {
		bagOfCuedElf = Number(item) + bagOfCuedElf;
	} else {
		const cuedElf = groupItemsByIndex.length + 1;
		console.log(`Elf-${cuedElf}, current bag sum = ${bagOfCuedElf}`);
		groupItemsByIndex.push({elf: cuedElf, caloriesSum: bagOfCuedElf});
		bagOfCuedElf = 0;
	}
}

const sortDescending = groupItemsByIndex.sort((a,b) => b.caloriesSum - a.caloriesSum);

const returnTopThree = [...sortDescending.slice(0,3)].reduce((prev, curr) => 
		prev + curr.caloriesSum
	, 0);

console.log('Top Elf: ', sortDescending[0]);
console.log('end, sum of Top three elves', returnTopThree);


