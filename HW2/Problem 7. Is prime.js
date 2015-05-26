//Problem 7. Is prime
//Write an expression that checks if given positive integer number n (n ≤ 100) is prime.

var numbers = [1,2,3,4,9,37,97,51,-3,0];

function isPrime(x) {
	var prime=true;
	if(x>=2){
		for (var i = 2; i <= Math.sqrt(x) && prime===true; i+=1) {
			if(x%i===0){
				prime=false;
			}
		}
	}
	else {
		prime=false;
	}
	return prime;
}

var prime;

for (var i = 0; i < 10; i+=1) {
	prime = isPrime(numbers[i]);
	console.log('Is ' + numbers[i] + ' Prime ? : ' + prime);
};