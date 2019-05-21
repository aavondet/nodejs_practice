var rect = require('./rectangle.js');

function solveRect(x,y) {
    rect(x, y, (err, rectangle) => {
        if (err) {
            console.log("ERROR: " + err.message);
        } else {
            console.log("area: " + rectangle.area());
            console.log("perimeter: " + rectangle.perimeter());
        }
    });
}

solveRect(0, 2);
solveRect(2, 2);
solveRect(3, 5);