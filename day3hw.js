//Odd or Even
console.log("THE RESULT OF IS ODD OR EVEN");
function isOddOrEven(number) {
    if(number % 2 == 0){
        console.log(number, "is even");
        
    }else{
        console.log(number, "is odd");
        
    }
}
isOddOrEven(20);
isOddOrEven(5);
isOddOrEven(112);

//Number Type
console.log("THE RESULT OF NUMBER TYPE");
function numberType(num) {
    if(num > 0){
        console.log(num, "is positive");
        
    }else if (num < 0) {
        console.log(num, "is negative");
        
    } else {
        console.log(num, "is Zero");
        
    }
}
numberType(-829);
numberType(0);
numberType(238);

//Conditional Statements

console.log("THE RESULT OF Conditional Statements");

function launchBrowser(browserName) {
    if(browserName == "Chrome"){

        console.log(browserName, "has been launched");
        
    }else{
        console.log("The given browser is not chrome");
        
    }
}
function runTests(testType) {
    switch (testType) {
        case "sanity":
            {
            console.log("It is sanity testing");            
        }            
            break;
        case "regression":
            {
        console.log("It is regression testing");
        
        }
            break;    
    
        default:
            {
        console.log("It is Smoke testing");
        
        }        
            break;
    }
    
}
launchBrowser("Chrome");
launchBrowser("Firefox");
runTests("regression");
runTests("smoke");

