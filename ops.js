let numbers=[];

function addtoarray(){
    let inputele=document.getElementById("price");
    let number=parseFloat(inputele.value);
    if(!isNaN(number)){
        numbers.push(number);
        inputele.value="";
    }
    else{
        console.log("Enter correct value");
    }
}
function showvalue(){
    displayarray();
    var sum=0;
    for(let num of numbers){
        sum+=num;
    }
    document.getElementById("val").innerText=sum;
    if(sum>30){
        document.getElementById("freeornot").innerText="NO FREE SHIPPING AVAILABLE";
    }
    else{
        document.getElementById("freeornot").innerText="FREE SHIPPING AVAILABLE";
    }
    let shipcost=50;
    let cost=(sum<30)?sum:(shipcost+sum);
    document.getElementById("totalcost").innerText=cost;
}
function displayarray(){
    document.getElementById("arr").innerText=numbers;
}


    


