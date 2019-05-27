	function checkAge(age) {
		age > 17 ? true : confirm( ? )
	}

	function checkAge(age) {
		age > 18 || confirm
	}

	function min(a, b) {
		return (a > b ? b : a)
	}

	function pow(x, n) {
		for (let i = 2; i < n; i++) {
			x *= x
		};
		return x;
	}

	function sumTo(n) {
		var result = 0
		for (var i = n; i > 0; i--) {
			result += i;
		}
		return result;
	} // функция sumTo через цикл

	function sumTo(m) {
		if (m != 0) {
			return m + sumTo(m - 1);
		} else {
			return m;
		}
	} // функция sumTo через рекурсию 

	function sumTo(c) {
		return n * (n + 1) / 2;
	} // функция sumTo через формулу арифметической прогрессии 

	function factorial(n) {
		if (n == 1) return 1;
		return n * factorial(n - 1);
	} // факториал через рекурсию 

	function fib(n) {
		return n <= 1 ? n : fib(n - 1) + fib(n - 2);
	} // фибоначчи через рекурсию

	function fib(n) {
		var a = 0,
			b = 0;
		var c = 1;
		for (var i = n; i > 1; i--) {
			a = b;
			b = c;
			c = a + b;
		}
		return c;
	} // фибонначи через цикл v1 


	function randomInteger(min, max) {
		return Math.floor(Math.random() * (max - min)) + min + max;
	}


	// Функция делает первый символ заглавным, для пустой строки возвращает пустую строку		
	function ucFirst(str) {
		return str.length == 0 ? "" : str[0].toUpperCase() + str.substr(1);
	}


	// Функция обрезает строку до указанной длины (включая троеточие) и не меняет короткие строки
	function truncate(str, maxlength) {
		return (str.length < maxlength) ? str : str.substr(0, maxlength - 3) + "...";
	};
		

