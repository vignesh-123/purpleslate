
var N;//number of students
var P;//number of same section pairs

N = 4;//Enter your input here

P=2;//Enter number of same section pairs

var sameSec = [[0,1],[1,2]];//Enter the same section pairs as array elements inside this array

var outputArray = [];

sameSec.forEach(function(ele1)//generating all possible same section pairs
{
	sameSec.forEach(function(ele2)
	{
		if(ele1[1] === ele2[0])
		{
			sameSec.push([ele1[0],ele2[1]]);
		}
	});
});

for(var i= 0;i<N-1;i++)//generating all possible output pairs
{
	for(var j=i+1;j<N;j++)
	{
		outputArray.push([i,j]);
	}
}

var finalArray = [];

for(var i= 0;i<outputArray.length;i++)//genrating the final pairs eliminating the same section pairs
{
	var state = "true";
	for(var j=0;j<sameSec.length;j++)
	{

		if(outputArray[i][0]== sameSec[j][0] && outputArray[i][1]==sameSec[j][1] )
		{
			state = "false";
		}
	}
	if(state == "true")
	{
	finalArray.push(outputArray[i]);
	}
}
console.log("Valid Pairs = ");
console.log(finalArray);
console.log("Total Valid Pairs = "+finalArray.length);






