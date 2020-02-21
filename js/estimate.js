
window.onload = function() {
    monthlySavings        = localStorage.getItem('MS');
    systemSize            = localStorage.getItem('SS');
    areaRequired          = localStorage.getItem('AR');
    lowerSystemCost       = localStorage.getItem('LSC');
    upperSystemCost       = localStorage.getItem('USC');
    solarUnits            = localStorage.getItem('MSU');
    lifetimeSavings       = localStorage.getItem('LS');
    treesSaved            = localStorage.getItem('TS');

    if(lowerSystemCost.length >= 8){
        lowerSystemCost = ((Number(lowerSystemCost)) / 10000000).toFixed(0);
        upperSystemCost = ((Number(upperSystemCost)) / 10000000).toFixed(0);
        document.getElementById("systemCost").innerHTML = lowerSystemCost+"Cr." +" - "+ upperSystemCost+"Cr." ;
    }
    else if(lowerSystemCost.length == 7){
        lowerSystemCost = ((Number(lowerSystemCost)) / 100000).toFixed(0);
        upperSystemCost = ((Number(upperSystemCost)) / 100000).toFixed(0);
        document.getElementById("systemCost").innerHTML = lowerSystemCost+"L" +" - "+ upperSystemCost+"L" ;
    }
    else if(lowerSystemCost.length == 6){
        lowerSystemCost = ((Number(lowerSystemCost)) / 100000).toFixed(1);
        upperSystemCost = ((Number(upperSystemCost)) / 100000).toFixed(1);
        document.getElementById("systemCost").innerHTML = lowerSystemCost+"L" +" - "+ upperSystemCost+"L" ;
    }
    else if (lowerSystemCost.length == 5){
        lowerSystemCost = ((Number(lowerSystemCost)) / 1000).toFixed(0);
        upperSystemCost = ((Number(upperSystemCost)) / 1000).toFixed(0);
        document.getElementById("systemCost").innerHTML = lowerSystemCost+"K" +" - "+ upperSystemCost+"K" ;
    }
    else if(lowerSystemCost.length == 4){
        lowerSystemCost = ((Number(lowerSystemCost)) / 1000).toFixed(1);
        upperSystemCost = ((Number(upperSystemCost)) / 1000).toFixed(1);
        document.getElementById("systemCost").innerHTML = lowerSystemCost+"K" +" - "+ upperSystemCost+"K" ;
    }
    else{
        document.getElementById("systemCost").innerHTML = lowerSystemCost+" - "+ upperSystemCost ;
    }

    if(lifetimeSavings.length >= 8){
        lifetimeSavings = (Number(lifetimeSavings)/10000000).toFixed(2);
        document.getElementById("lifetimeSavings").innerHTML = lifetimeSavings+" Cr." ;
    } 
    else if(lifetimeSavings.length == 7){
        lifetimeSavings = (Number(lifetimeSavings)/100000).toFixed(2);
        document.getElementById("lifetimeSavings").innerHTML = lifetimeSavings+" L" ;
    }
    else if(lifetimeSavings.length == 6){
        lifetimeSavings = (Number(lifetimeSavings)/100000).toFixed(2);
        document.getElementById("lifetimeSavings").innerHTML = lifetimeSavings+" L" ;
    }
    else if(lifetimeSavings.length == 5){
        lifetimeSavings = (Number(lifetimeSavings)/1000).toFixed(2);
        document.getElementById("lifetimeSavings").innerHTML = lifetimeSavings+" K" ;
    }
    else if(lifetimeSavings.length == 3){
        lifetimeSavings = (Number(lifetimeSavings)/1000).toFixed(2);
        document.getElementById("lifetimeSavings").innerHTML = lifetimeSavings+" K" ;
    }
    else{
        document.getElementById("lifetimeSavings").innerHTML = "Rs. "+lifetimeSavings ;
    }

    document.getElementById("monthlySavings").innerHTML = "Rs. "+monthlySavings;
    document.getElementById("systemSize").innerHTML = systemSize + " kW";
    document.getElementById("areaRequired").innerHTML = areaRequired + " sq.ft" ;
    document.getElementById("solarUnits").innerHTML = solarUnits ;
    document.getElementById("treesSaved").innerHTML = treesSaved ;
}