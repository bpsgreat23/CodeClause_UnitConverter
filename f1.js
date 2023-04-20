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


	if(From === "meter" && To==="kilometer")
	{
		result.value = Number(input.value) * 0.001;
	}
	else if(From === "meter" && To==="Centimeter")
	{
		result.value = Number(input.value) * 100;

	}
	else if(From === "meter" && To==="meter")
	{
		result.value = input.value
	}



	if(From === "kilometer" && To==="meter")
	{
		result.value = Number(input.value) * 1000;
	}
	else if(From === "kilometer" && To==="Centimeter")
	{
		result.value = Number(input.value) * 100000;
	}
	else if(From === "kilometer" && To==="kilometer")
	{
		result.value = input.value
	}



	if(From === "Centimeter" && To==="kilometer")
	{
		result.value = Number(input.value) * 0.00001;
	}
	else if(From === "Centimeter" && To==="meter")
	{
		result.value = Number(input.value) * (0.01);
	}
	else if(From === "Centimeter" && To==="Centimeter")
	{
		result.value = input.value
	}
}