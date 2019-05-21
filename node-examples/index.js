var rect = require('./rectangle.js');

function solveRect(x,y) {
    if (x <= 0 || y <= 0) {
        console.log("Please use positive values");
    } else {
        console.log('area is ' + rect.area(x, y));
        console.log('perimeter is ' + rect.perimeter(x, y))
    }
}

solveRect(0, 2);
solveRect(2, 2);
solveRect(3, 5);