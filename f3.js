var input = document.getElementById('input');
var result = document.getElementById('result');
var upperrank = document.getElementById('upperrank');
var lowerrank = document.getElementById('lowerrank');
var From,To;

input.addEventListener("keyup",myResult);
upperrank.addEventListener("change",myResult);
lowerrank.addEventListener("change",myResult);


From = upperrank.value;
To   = lowerrank.value;


function myResult(){

	From = upperrank.value;
	To = lowerrank.value;


	if(From === "celsius" && To==="fahrenheit")
	{
		result.value = ((Number(input.value) * (1.8)) + (32));
	}
	else if(From === "celsius" && To==="kelvin")
	{
		result.value = (Number(input.value) + (274.15));

	}
	else if(From === "celsius" && To==="celsius")
	{
		result.value = input.value
	}



	if(From === "fahrenheit" && To==="celsius")
	{
		result.value = ((Number(input.value) - (32)) * (5/9));
	}
	else if(From === "fahrenheit" && To==="kelvin")
	{
		result.value = (((Number(input.value) - (32)) * (5/9)) + (273.15));
	}
	else if(From === "fahrenheit" && To==="fahrenheit")
	{
		result.value = input.value
	}



	if(From === "kelvin" && To==="celsius")
	{
		result.value = (Number(input.value) - (273.15));
	}
	else if(From === "kelvin" && To==="fahrenheit")
	{
		result.value = (((Number(input.value) - (273.15)) * (1.8)) + (32));
	}
	else if(From === "kelvin" && To==="kelvin")
	{
		result.value = input.value
	}
}