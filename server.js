/**
 * Created by Aman on 29-01-2017.
 */

//link to connect
let connect = require ('connect');
let url = require('url');

//making a new connect object
let obj = new connect();

//simple calculator
let scl = function(req, res, next){

    //get querystring
    let qs = url.parse(req.url, true).query;

    //let values
    let method = qs.method;
    let x = qs.x;
    let y = qs.y;

    //calculate inputs
    var answer = 0;
    if(method == "add"){
        answer = parseFloat(x) + parseFloat(y);
    }
    else if(method == "subtract"){
        answer = x - y;
    }
    else if(method == "divide"){
        answer = x / y;
    }
    else if(method == "multiply"){
        answer = x * y;
    }
    else{
        answer = "The answer is incorrect. Try to select valid method."
    }

    //display answer
    res.end('<h1><i>Simple Calculator</i></h1>' + '<br/>' + 'Method: ' + method + '<br/>' + 'X: ' + x + '<br/>' + 'Y: ' + y + '<br/>' + 'Answer: ' + answer);
};

//map the url's to the correct pages
obj.use('/scl', scl);

//run on browser
let port = process.env.PORT || 3000
obj.listen(port);
console.log('Connect server running on a random server');