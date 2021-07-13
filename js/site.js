const getValues = () => {
	// Get input values from the page
	let startValue = document.getElementById("startValue").value;
	let endValue = document.getElementById("endValue").value;

	// Convert values to number type
	startValue = parseInt(startValue);
	endValue = parseInt(endValue);

	// Validate inputs
	if (
		Number.isInteger(startValue) &&
		Number.isInteger(endValue) &&
		startValue < endValue
	) {
		// Call generateNumbers
		const numbers = generateNumbers(startValue, endValue);
		// Call displayNumbers
		displayNumbers(numbers);
	} else {
		const error = `<div class="alert alert-danger" role="alert">
        You can only enter numbers and the start value cannot be larger than the end value!
      </div>`;
		document.getElementById("results").innerHTML = error;
	}
};

const generateNumbers = (startValue, endValue) => {
	// Init numbers array
	const numbers = [];

	for (let i = startValue; i <= endValue; i++) {
		// Add values in input range to numbers
		numbers.push(i);
	}
	return numbers;
};

const displayNumbers = (numbers) => {
	// Init className as even
	let className = "even";
	// Init rows to be inserted into the DOM
	let templateRows = "";

	for (let number of numbers) {
		// Check if number is even or odd
		if (number % 2 !== 0) {
			className = "odd";
		} else {
			className = "even";
		}
		// Concat templateRows with a row, corresponding className and current number
		templateRows += `<tr><td class=${className}>${number}</td></tr>`;
	}
	// Insert templateRows into the DOM as a child of #results
	document.getElementById("results").innerHTML = templateRows;
};

// Listen for button click event
document.getElementById("btnSubmit").addEventListener("click", (e) => {
	e.preventDefault();
	// Call getValues
	getValues();
});
