const fs = require('fs');

// 1st of december, count calories according to input series
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

const sortByCalories = groupItemsByIndex.sort(function(a, b){
	return b.caloriesSum - a.caloriesSum
})

console.log('end');
console.log(sortByCalories[0]);

