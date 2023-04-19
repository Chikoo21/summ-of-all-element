<!DOCTYPE html>
<html>
<head>
	<title>Sum of Array Elements</title>
	<script>
		function myArray() {
			let arr = [1, 2, 4, 5, 6];
			let sum = 0;
			for(let i = 0; i < arr.length; i++) {
				sum += arr[i];
			}
			document.getElementById("result").innerHTML = "The sum of all the elements in an array is: " + sum;
		}
	</script>
</head>
<body>
	<button onclick="myArray()">Find Sum</button>
	<p id="result"></p>
</body>
</html>
