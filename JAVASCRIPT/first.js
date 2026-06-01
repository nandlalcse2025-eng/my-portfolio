const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function calculateAverage(numbers) {
	const total = numbers.reduce((sum, value) => sum + value, 0);
	return total / numbers.length;
}

function getGrade(average) {
	if (average >= 90) return "A";
	if (average >= 75) return "B";
	return "C";
}

rl.question("Student name likho: ", (studentName) => {
	rl.question("Marks comma se likho (example: 78,85,92,88): ", (marksInput) => {
		const marks = marksInput
			.split(",")
			.map((m) => Number(m.trim()))
			.filter((m) => !Number.isNaN(m));

		if (marks.length === 0) {
			console.log("Valid marks nahi mile. Dobara run karo.");
			rl.close();
			return;
		}

		const average = calculateAverage(marks);
		const grade = getGrade(average);

		console.log(`Name: ${studentName}`);
		console.log(`Marks: ${marks.join(", ")}`);
		console.log(`Average: ${average.toFixed(2)}`);
		console.log(`Grade: ${grade}`);

		rl.close();
	});
});
