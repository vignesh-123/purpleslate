var N = 8;//Enter the number of customers

var FinalQueue = [2,1,4,3,5,8,7,6];//Enter the final queue structure

var a = [];
for(var i=1; i<=N; i++)//Creating the initial queue
{
	a.push(i);
}

var changeIndex = [];
a.forEach(function(ele1,ind1)//checking for the index changes between the two arrays
{
	FinalQueue.forEach(function(ele2,ind2)
	{
		if(ele1===ele2)
		{
			changeIndex.push(ind1-ind2);
		}
	});
});
var count = 0;

changeIndex.forEach(function(e)//calculating switch count based on the index change obtained above
{
	if(e===1){
		count++;
	}else if(e===2){
		count = count+2;
	}
});

console.log("Number of requests = "+count);

