function calculate() {
	// Get values from input fields.
	var x = parseInt(document.getElementById('x').value);
	var y = parseInt(document.getElementById('y').value);
	var radios = document.getElementsByName('op');
	var op;
	for (var i = 0; i < radios.length; i++) {
	  if (radios[i].checked) {
	  	op = radios[i].value;
	    break;
	  }
	}

	// Validate input.
	if (isNaN(x) || isNaN(y)) {
		alert('Please enter valid numbers.');
		return;
	}
	if (op == undefined) {
		alert('Please select an operator');
		return;
	}

	// Set up answer variable.
	var ans = 0;

	// Handle addition, subtraction, multiplication, and division.
	if (op == "+") {
		ans = x+y;
	} 

	if (op == "-") {
		ans = x-y;
	}

	if (op == "*") {
		var first = document.getElementById("x").value;
		var second = document.getElementById("y").value;
		for (var i=0; i<second; i++) {
			ans += (+first);
		}
	}

	if (op == "/") {
		var first = document.getElementById("x").value;
		var second = document.getElementById("y").value;
		if (second == "0") {
			alert("Dividing by zero is undefined");
		}

		if (first == second) {
			ans = 1; 
		}

		var diff = first-second;
		ans = 1; 
		while (diff > 0) {
			first = first - (+second); 
			diff = first-second;
			ans++;
		}
	}

	// Define the equation.
	var equation = x + " " + op + " " + y + " = " + ans

	// Log the equation.
	console.log(equation);

	// Display the equation on web page.
	var div = document.createElement("div");
	div.textContent = equation;
	document.body.appendChild(div);
}