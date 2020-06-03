## Exercise 4: Array Cardio 

### Key Take-aways:

1. `array.filter` returns a new array
2. `array.map` returns a new array
3. `array.sort` is to in-place sort, so it will change the order of the original array; when it's sorting number, the easist way is to do arrow function `(a, b) => a.year - b.year`, but when it's sorting non-num, you can do `(a, b) => a > b ? 1 : -1`
4. `console.table` can dispaly the data in a table format, which is more readable for data
5. `array.reduce` has to include `return` statement in the callback unless it's an arrow function. The syntax is `array.reduce((total, ele) => total + ele, initVal)`. initVal here could be "0" or [] or {} or ''. See exe # 8 for example
6. You can use `document.querySelectorAll` for an dom element like so: 
    const category = document.querySelector('.mw-category');
    const links = Array.from(category.querySelectorAll('a'));

    or you may comebine them into: 
        const boulElements = Array.from(document.querySelectorAll('.mw-category a'))
7. `string.includes` is a handy method to find strings that contains some substring