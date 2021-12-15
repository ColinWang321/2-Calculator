

// Display String: display numbers you current input
var dStr = "";

// Store String: store numbers or result when you click buttons like "+", "-",...
var sStr = "";

// Store Calculate Button: before "=" calculate or minus/plus/.., need to know what calculate method you just used.
var sBtn = "";




function clearDisplay() {
    sStr = "";
    dStr = "";
    sBtn = "";
    document.getElementById("cal__store").innerHTML = "";
    document.getElementById("cal__display").innerHTML = "0";
}


// Put the number you clicked in a String.
// Display the string.
// Number(String) when you need to calculate.


// Function: Use this function when you click a number button.
// switch case expression;
function clickNumber(number) {
     switch(number){
        case 1: 
            dStr = dStr + "1";
            document.getElementById("cal__display").innerHTML = dStr;
            return;
         
        case 2: 
            dStr = dStr + "2";
            document.getElementById("cal__display").innerHTML = dStr;
            return;
            
        case 3: 
            dStr = dStr + "3";
            document.getElementById("cal__display").innerHTML = dStr;
            return;

        case 4: 
            dStr = dStr + "4";
            document.getElementById("cal__display").innerHTML = dStr;
            return;
         
        case 5: 
            dStr = dStr + "5";
            document.getElementById("cal__display").innerHTML = dStr;
            return;
            
        case 6: 
            dStr = dStr + "6";
            document.getElementById("cal__display").innerHTML = dStr;
            return;

        case 7: 
            dStr = dStr + "7";
            document.getElementById("cal__display").innerHTML = dStr;
            return;
         
        case 8: 
            dStr = dStr + "8";
            document.getElementById("cal__display").innerHTML = dStr;
            return;
            
        case 9: 
            dStr = dStr + "9";
            document.getElementById("cal__display").innerHTML = dStr;
            return;

        default:
            return;
            
    }
    
}




// : common actions after you click "=" button.
function equalsCommonAction(){
    document.getElementById("cal__display").innerHTML = dStr;
    document.getElementById("cal__store").innerHTML = "";
    dStr = "";
    
}


// Function name: equals. 
// Function: Use when click "=" button.
function equals(){
    if(sStr != ""){
        switch(sBtn){
            case "division":
                dStr = String(Number(sStr) / Number(dStr));
                equalsCommonAction();
                return;
            case "multiple":
                dStr = String(Number(sStr) * Number(dStr));
                equalsCommonAction();
                return;
            case "minus":
                dStr = String(Number(sStr) - Number(dStr));
                equalsCommonAction();
                return;
            case "plus":
                dStr = String(Number(sStr) + Number(dStr));
                equalsCommonAction();
                return;
            
            default:
                return;
        }
        
    }   
}






// : common actions used in below function
function calCommonAction(btnName){
    document.getElementById("cal__store").innerHTML = sStr;
    dStr = "";
    document.getElementById("cal__display").innerHTML = "0";
    sBtn = btnName;
}

// : use this function when you click buttons like -, + , ..
function calculate(btnName){
    if(sBtn == ""){
        sStr = dStr;
        calCommonAction(btnName);
    }else{
        switch(sBtn){
            case "division": 
                sStr = String(Number(sStr) / Number(dStr));
                calCommonAction(btnName);
                return;
            case "multiple": 
                sStr = String(Number(sStr) * Number(dStr));
                calCommonAction(btnName);
                return;
            case "minus": 
                sStr = String(Number(sStr) - Number(dStr));
                calCommonAction(btnName);
                return;
            case "plus": 
                sStr = String(Number(sStr) + Number(dStr));
                calCommonAction(btnName);
                return;
            default:
                return;
        }
    }
}
    


