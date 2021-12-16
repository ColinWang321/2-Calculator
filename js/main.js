


// Display String:          display numbers you current input
var dStr = "";

// Store String:            store numbers or result when you click buttons like "+", "-",...
var sStr = "";

// Store Calculate Button:  before "=" calculate or minus/plus/.., need to know what calculate method you just used.
var sBtn = "";

// Keep Value String:       Only used when you click "=" and then click calculate buttons. 
var kStr = "";

function setStoreString(input){
    document.getElementById("cal__store").innerHTML = input; 
}

function setDisplayString(input){
    document.getElementById("cal__display").innerHTML = input;
}



// Used when click "c" (clear) button.
function clearDisplay() {
    sStr = "";
    dStr = "";
    sBtn = "";
    setStoreString("");
    setDisplayString("0");
}



// Function: Use this function when you click a number button.
// switch case expression;
function clickNumber(number) {
    if(kStr != ""){
        kStr = "";
    }
     switch(number){
        case "0": 
            dStr = dStr + "0";
            setDisplayString(dStr);
            return;

        case "1": 
            dStr = dStr + "1";
            setDisplayString(dStr);
            return;
         
        case "2": 
            dStr = dStr + "2";
            setDisplayString(dStr);
            return;
            
        case "3": 
            dStr = dStr + "3";
            setDisplayString(dStr);
            return;

        case "4": 
            dStr = dStr + "4";
            setDisplayString(dStr);
            return;
         
        case "5": 
            dStr = dStr + "5";
            setDisplayString(dStr);
            return;
            
        case "6": 
            dStr = dStr + "6";
            setDisplayString(dStr);
            return;

        case "7": 
            dStr = dStr + "7";
            setDisplayString(dStr);
            return;
         
        case "8": 
            dStr = dStr + "8";
            setDisplayString(dStr);
            return;
            
        case "9": 
            dStr = dStr + "9";
            setDisplayString(dStr);
            return;
        
        case ".": 
            dStr = dStr + ".";
            setDisplayString(dStr);
            return;

        default:
            return;
            
    }
    
}




// : common actions after you click "=" button.
function equalsCommonAction(){
    setDisplayString(dStr);
    kStr = dStr;

    dStr = "";
    sStr = "";
    sBtn = "";
    setStoreString("");  
}


// Unfinished work: 
//  After clicked "=", Can we keep calculate?
//  1. if click numbers, dispose dstr numbers. store new number in dstr 
//  (Should be written in function "clickNumber")
//  2. if click calbutton, save dstr to sstr, then calculate

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






// : common actions used when click calculate button: 
function calCommonAction(btnName){
    setStoreString(sStr);
    dStr = "";
    setDisplayString("0");
    sBtn = btnName;
}

// : use this function when you click calculate buttons like -, + , ..
function calculate(btnName){
    // If you still want to calculate after you clicked "=";
    if(kStr != ""){
        dStr = kStr;
        kStr = "";
    }

    // If you clicked clear button "c", then click calculate button. Set sStr "0";
    if(sStr == ""){
        sStr = "0";
    } 

    // Calculate process
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
    


