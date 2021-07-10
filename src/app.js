var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color

var addChocolates = (candies,color,number) =>{
    if(number<=0){
        return "Number cannot be zero/negative";
    }
    else{
        if(color=="green"){
            candies.push("green","green");
        }
        else if(color=="red"){
            candies.unshift("red","red");
        }
    }
}

//Progression 2: Remove ___ chocolates from the top the dispenser

var removeChocolates = (candies,number) =>{
    var store = [];
    if(number<=0){
        return "Number cannot be zero/negative";
    }
    else if(number>candies.length){
        return "Insufficient chocolates in the dispenser"
    }
    else{
        for(let i=0;i<number;i++){
            store[i] = candies.shift();
        }
        return store;
    }
}

//Progression 3: Dispense ___ chocolates

var dispenseChocolates = (candies,number) =>{
    var store = [];
    if(number<=0){
        return "Number cannot be zero/negative";
    }
    else if(number>candies.length){
        return "Insufficient chocolates in the dispenser"
    }
    else{
        for(let i=0;i<number;i++){
            store[i] = candies.pop();
        }
        return store;
    }
}

//Progression 4: Dispense ___ chocolates of ____ color

var dispenseChocolatesOfColor = (candies,number,color) =>{
    var store=[];
    if(number<=0){
        return "Number cannot be zero/negative";
    }
    else if(number>candies.length){
        return "Insufficient chocolates in the dispenser"
    }
    else{
        for(let i=0;i<candies.length;i++){
            // if(store.length<number){
                if(candies[i]==color){
                    store.push(candies[i]);
                }
            // }
        }
        return store;
    }
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

var noOfChocolates = (candies) =>{
let count = 1;
var temp = [];
var store = [];
let n=1;
    if(candies.length==0){
        return [];
    }
    else if(candies.length==1){
        return [1];
    }
    else{
        for(let i=0;i<candies.length;i++){
            for(let k=0;k<temp.length;k++){
                if(candies[i]==temp[k]){
                   n++;
                }
            }
            if(n==1){
                for(let j=i+1;j<candies.length+1;j++){
                    if(candies[i]==candies[j]){
                        count++;    
                        temp.push(candies[i]);
                    }
                }           
                store.push(count);
                count=1;
            }
            else{
                n=1;
            }
           
        }
        return store;
    }
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(candies){
    let col =candies.reduce(function(b,a){
        if(a in b){
            b[a]++;
        }
        else{
            b[a]=1;
        }
        return b;
    }, {});
    let Array = candies.sort((a,b)=>{
        if(col[b]>col[a]){
            return 1;
        }
        if(col[b]<col[a]){
            return -1;
        }
        if(a>b){
            return 1;
        }
        if(a<b){
            return -1;
        }
    });
    candies = Array
}

//Progression 7: Change ___ chocolates of ____ color to ____ color

var changeChocolateColor = (candies,number,color1,color2) =>{
    let count=0;
    if(number<=0){
        return "Number cannot be zero/negative";
    }
    else if(color1==color2){
        return "Can't replace the same chocolates";
    }    
    else{
        for(let i=0;i<candies.length;i++){
            if(count==number){
                break;
            }
            else{
                if(candies[i]==color1){
                    candies[i]=color2;
                    count++;
                }
            }
        }
        return candies;
    }
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

var changeChocolateColorAllOfxCount = (candies,color1,color2) =>{
    let count=0;
    if(color1==color2){
        return "Can't replace the same chocolates";
    }    
    else{
        for(let i=0;i<candies.length;i++){
                if(candies[i]==color1){
                    candies[i]=color2;
                }
                if(candies[i]=="blue"){
                    count++;
                }
        }
        return [count,candies];
    }
}

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
