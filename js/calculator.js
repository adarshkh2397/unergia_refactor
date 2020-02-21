var state = {
    '11' : '8',
    '12' : '10',
    '20' : '11',
    '33' : '7' 
}
var pinCode="";
var eBill= 0;
var roofSpace=0;
var statePrice=0;
var monthlySavings = 0;
var typeOfCustomer="";
var pin = "";

$('.res').on('click' , (e)=> {
    typeOfCustomer = $('.res').val();
    $('.res').toggleClass('btn-success');
    $('.res').toggleClass('btn-outline-success');
    $('.com').removeClass('btn-success');
    $('.com').addClass('btn-outline-success');
    $('.ind').removeClass('btn-success');
    $('.ind').addClass('btn-outline-success');
});

$('.com').on('click' , (e)=> {
    typeOfCustomer = $('.com').val();
    $('.com').toggleClass('btn-success');
    $('.com').toggleClass('btn-outline-success');
    $('.res').removeClass('btn-success');
    $('.res').addClass('btn-outline-success');
    $('.ind').removeClass('btn-success');
    $('.ind').addClass('btn-outline-success');
});

$('.ind').on('click' , (e)=> {
    typeOfCustomer = $('.ind').val();
    $('.ind').toggleClass('btn-success');
    $('.ind').toggleClass('btn-outline-success');
    $('.res').removeClass('btn-success');
    $('.res').addClass('btn-outline-success');
    $('.com').removeClass('btn-success');
    $('.com').addClass('btn-outline-success');
});

if(typeOfCustomer == ""){
    typeOfCustomer = "Residential";
}


$('#estimate').on('click', (e)=> {
    pinCode = $('#pin').val();
    eBill   = Number($('#eBill').val());
    roofSpace = Number($('#roofspace').val());

    if(pinCode.length == 6 && eBill !=0 && roofSpace != 0){

        pin = pinCode.substring(0,2);
        statePrice = Number(state[pin]);
        //console.log(typeOfCustomer , statePrice);
        monthlyUnits = eBill / statePrice;

        //MONTHLY SAVINGS
        monthlySavings = Math.round(statePrice * monthlyUnits);
        
        //SYSTEM SIZE CALCULATION
        size1 = Number((eBill/(statePrice*116)).toFixed(2));
        size2 = Number((roofSpace/100).toFixed(2));
        //console.log(size1 , size2);
        if(size1 <= size2){
            systemSize = size1;
        }else{
            systemSize = size2;
        }

        //AREA REQUIRED
        areaRequired = Math.round(systemSize * 100) ;

        //SYSTEM COST CALCULATION
        if(systemSize < 5){
            lowerSystemCost = 60*systemSize*1000;
            upperSystemCost = 65*systemSize*1000;
        } 
        else if(systemSize>=5 && systemSize<20){
            lowerSystemCost = 50*systemSize*1000;
            upperSystemCost = 55*systemSize*1000;
        }
        else if(systemSize>=20 && systemSize<40){
            lowerSystemCost = 45*systemSize*1000;
            upperSystemCost = 50*systemSize*1000;
        }
        else{
            lowerSystemCost = 37*systemSize*1000;
            upperSystemCost = 43*systemSize*1000;
        }
        lowerSystemCost = Math.round(lowerSystemCost);
        upperSystemCost = Math.round(upperSystemCost);
        //console.log(monthlySavings , systemSize , areaRequired )
        //console.log(lowerSystemCost  , upperSystemCost);

        //MONTHLY SOLAR UNITS
        monthlySolarUnits = Math.round(systemSize * 116) ;

        //LIFETIME SAVINGS
        lifetimeSavings = Math.round((monthlySavings*(Math.pow(1.01,25)-1))*100);

        //console.log("Lifetime" , lifetimeSavings);

        //TREES SAVED
        treesSaved = Math.round(systemSize*41.6);
        //console.log("Trees" , treesSaved);

        localStorage.setItem('MS', monthlySavings);
        localStorage.setItem('SS', systemSize);
        localStorage.setItem('AR', areaRequired);
        localStorage.setItem('LSC', lowerSystemCost);
        localStorage.setItem('USC', upperSystemCost);
        localStorage.setItem('MSU', monthlySolarUnits);
        localStorage.setItem('LS', lifetimeSavings);
        localStorage.setItem('TS', treesSaved);

        window.document.location = './calculator.html';
    } 
});




