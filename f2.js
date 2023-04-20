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


	if(From === "square_feet" && To==="square_inches")
	{
		result.value = Number(input.value) * 144;
	}
	else if(From === "square_feet" && To==="square_meter")
	{
		result.value = Number(input.value) * 0.09290304;

	}
	else if(From === "square_feet" && To==="square_feet")
	{
		result.value = input.value
	}



	if(From === "square_inches" && To==="square_feet")
	{
		result.value = Number(input.value) * 0.0069444444;
	}
	else if(From === "square_inches" && To==="square_meter")
	{
		result.value = Number(input.value) * 0.00064516;
	}
	else if(From === "square_inches" && To==="square_inches")
	{
		result.value = input.value
	}



	if(From === "square_meter" && To==="square_feet")
	{
		result.value = Number(input.value) * 10.7639104167;
	}
	else if(From === "square_meter" && To==="square_inches")
	{
		result.value = Number(input.value) * 1550.0031000062;
	}
	else if(From === "square_meter" && To==="square_meter")
	{
		result.value = input.value
	}
}