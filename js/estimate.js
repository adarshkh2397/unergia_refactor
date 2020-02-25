
window.onload = function() {
    monthlySavings        = localStorage.getItem('MS');
    systemSize            = localStorage.getItem('SS');
    areaRequired          = localStorage.getItem('AR');
    lowerSystemCost       = localStorage.getItem('LSC');
    minimumSystemCost     = localStorage.getItem('LSC');
    upperSystemCost       = localStorage.getItem('USC');
    maximumSystemCost     = localStorage.getItem('USC');
    solarUnits            = localStorage.getItem('MSU');
    monthlySolarUnits     = localStorage.getItem('MSU');
    lifetimeSavings       = localStorage.getItem('LS');
    lifeSavings           = localStorage.getItem('LS');
    treesSaved            = localStorage.getItem('TS');

    if(lowerSystemCost.length >= 8){
        lowerSystemCost = ((Number(lowerSystemCost)) / 10000000).toFixed(0);
        upperSystemCost = ((Number(upperSystemCost)) / 10000000).toFixed(1);
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



function postToGoogle() {
                
                var pinCode = localStorage.getItem('PIN');
                var phoneNumber = $("#phoneNumber").val();
                var typeOfCustomer = localStorage.getItem('TOC');
             
 				
                if(phoneNumber == "" || phoneNumber.length > 10 || phoneNumber.length < 10){
                
                    document.getElementById("phoneNumber").focus();
                    return false;
                }
                


				
	
                $.ajax({
                    url: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSepUvNhoiuO02bwuo0SQC5EIW2j-4XIJ43Qy_GDgyFHLAuWRw/formResponse",
                    data: {"entry.1485241368"  : pinCode, 
                           "entry.812020068"   : phoneNumber, 
                           "entry.2146252979"  : typeOfCustomer, 
                           "entry.2111807601"  : monthlySavings, 
                           "entry.45522672"    : systemSize, 
                           "entry.1072063984"  : areaRequired, 
                           "entry.1665472243"  : minimumSystemCost, 
                           "entry.2020252965"  : maximumSystemCost ,
                           "entry.551045867"   : monthlySolarUnits , 
                           "entry.1622319793"  : lifeSavings , 
                           "entry.259511586"   : treesSaved},
                    type: "POST",
                    dataType: "xml",
                    success: function(d){
				    },
				    error: function(x, y, z){
                        swal({
                            text: "We Will Contact You Soon!",
                            icon: "success",
                        });
                        document.getElementById("calcForm").reset();
					}
                });
                
			    return false;
}

//https://docs.google.com/forms/d/1SIDbTzp1BV3s425rl3RbtjcwKNVypuP0KYjc9j9IqXc/edit?ts=5e53bc52#responses (GOOGLE FORM)
//https://docs.google.com/spreadsheets/d/176Eg6tRNVPmSxjXPKXiSIkRmSfWhPgSqmpF4wbkn1A8/edit#gid=1848772866 (GOOGLE SPREADSHEET)