//function func1() {
//  var checkbox;
//  checkbox = document.getElementById('checkbox');
//  if (checkbox.checked) {
//    alert('Выбран');
//  }
//  else {
//    alert ('Не выбран');
//  }
//};
//
//var elem = 
//	document.getElementsByName("radio1");
//	elem.addEventListener("change",func2);
//
//function func2() {
//  var radio = document.getElementByName('radio1');
//  for (var i = 0; i < radio.length; i++) {
//    if (radio[i].checked) {
//      alert ('Выбран' + i + 'элемент');
//    }
//  }
//}

"" + 1 + 0 // "10" 
"" - 1 + 0 // - работает только с числами
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"

"4" - 2 // 2

"4px" - 2 // NaN

7 / 0 //infinity

"  -9\n" + 5 // строка
"  -9\n" - 5 // -14
5 && 2 // 2

2 && 5 // 5

5 || 0 // 5

0 || 5 // 5
null + 1
undefined + 1
null == "\n0\n"
+null == +"\n0\n"

//&& спотыкается на лжи, если все правда то дает последнее значение
//|| спотыкается на правде, если все лож дает последнее значение


