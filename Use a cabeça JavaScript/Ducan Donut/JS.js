
function updateName(){
    if (document.getElementById("nome").value != ""){
        document.getElementById("myButton").disabled = false;
    } else{
        document.getElementById("myButton").disabled = true;
    }
}

function updateOrder(){
    const TAXRATE = 0.2;
    const DONUTPRICE = 5;

    var numDonuts =  parseDonuts(document.getElementById("cakedonuts").value);
    var numGlasseDonuts = parseDonuts(document.getElementById("glazeddonuts").value);

    if(isNaN(numDonuts))
    {
        numDonuts = 0;
    }

    if(isNaN(numGlasseDonuts))
    {
        numGlasseDonuts = 0;
    }


    if (document.getElementById("cakedonuts").value == ""){
        numDonuts = 0;
    }

    if (document.getElementById("glazeddonuts").value == ""){
        numGlasseDonuts = 0;
    }

    var subTotal = (parseFloat(numDonuts)+parseFloat(numGlasseDonuts)) * DONUTPRICE;
    var tax = TAXRATE*subTotal;
    var total = subTotal+tax;    

    document.getElementById("subtotal").value = "$" + subTotal.toFixed(2);
    document.getElementById("tax").value = "$" + tax.toFixed(2);
    document.getElementById("total").value = "$" + total.toFixed(2);
}

function placeOrder(){
    FormData.submit
}

function parseDonuts(donutString){
    numDonuts = parseInt(donutString);
    if(donutString.indexOf("duzia") != -1)
    {
        numDonuts*=12;        
    }
    return numDonuts;
}
