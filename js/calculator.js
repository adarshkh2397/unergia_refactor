var state = {
    '11' : '7',
    '12' : '6.3',
    '13' : '6.3',
    '14' : '7.2',
    '15' : '7.2',
    '16' : '7.2',
    '17' : '5.45',
    '18' : '4',
    '19' : '4',
    '20' : '6.5',
    '21' : '6.5',
    '22' : '6.5',
    '23' : '6.5',
    '24' : '5.65',
    '25' : '6.5',
    '26' : '5.65',
    '27' : '6.5',
    '28' : '6.5',
    '29' : '4',
    '30' : '6.7',
    '31' : '6.7',
    '32' : '6.7',
    '33' : '6.7',
    '34' : '6.7',
    '35' : '4',
    '36' : '5.1',
    '37' : '5.1',
    '38' : '5.1',
    '39' : '5.1',
    '40' : '11.1',
    '41' : '11.1',
    '42' : '11.1',
    '43' : '11.1',
    '44' : '11.1',
    '45' : '6.5',
    '46' : '6.5',
    '47' : '6.5',
    '48' : '6.5',
    '49' : '4.85',
    '50' : '9',
    '51' : '8.5',
    '52' : '8.5',
    '53' : '8.5',
    '54' : '4',
    '55' : '4',
    '56' : '7.8',
    '57' : '7.8',
    '58' : '7.8',
    '59' : '7.8',
    '60' : '6.6',
    '61' : '6.6',
    '62' : '6.6',
    '63' : '6.6',
    '64' : '6.6',
    '65' : '6.6',
    '66' : '6.6',
    '67' : '6.9',
    '68' : '6.9',
    '69' : '6.9',
    '70' : '7.16',
    '71' : '7.16',
    '72' : '7.16',
    '73' : '7.16',
    '74' : '7.16',
    '75' : '5.7',
    '76' : '5.7',
    '77' : '5.7',
    '78' : '6.8',
    '79' : '6.2',
    '80' : '7.5',
    '81' : '7.5',
    '82' : '4.25',
    '83' : '4.25',
    '84' : '7.5',
    '85' : '7.5',
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
    $('.res').toggleClass('ebutton');
    $('.com').removeClass('btn-success');
    $('.com').addClass('ebutton');
    $('.ind').removeClass('btn-success');
    $('.ind').addClass('ebutton');
    $('.nullCustomer').addClass('d-none');
});

$('.com').on('click' , (e)=> {
    typeOfCustomer = $('.com').val();
    $('.com').toggleClass('btn-success');
    $('.com').toggleClass('ebutton');
    $('.res').removeClass('btn-success');
    $('.res').addClass('ebutton');
    $('.ind').removeClass('btn-success');
    $('.ind').addClass('ebutton');
    $('.nullCustomer').addClass('d-none');
});

$('.ind').on('click' , (e)=> {
    typeOfCustomer = $('.ind').val();
    $('.ind').toggleClass('btn-success');
    $('.ind').toggleClass('ebutton');
    $('.res').removeClass('btn-success');
    $('.res').addClass('ebutton');
    $('.com').removeClass('btn-success');
    $('.com').addClass('ebutton');
    $('.nullCustomer').addClass('d-none');
});




$('#estimate').on('click', (e)=> {
    pinCode = $('#pin').val();
    eBill   = Number($('#eBill').val());
    roofSpace = Number($('#roofspace').val());

    if(typeOfCustomer == ""){
        $('.nullCustomer').removeClass('d-none');
    }else{
        $('.nullCustomer').addClass('d-none');
    }

    if(pinCode.length == 6 && eBill !=0 && roofSpace != 0 && typeOfCustomer != ""){
        pin = pinCode.substring(0,2);
        if(Number(pin) > 10 && Number(pin) < 86){
            if(pinCode.substring(0,3) == '403' || pinCode.substring(0,3) == '396' || pinCode.substring(0,3) == '605' || pinCode.substring(0,3) == '682' || pinCode.substring(0,3) == '744'){
                statePrice = 4;
            }
            else if(pinCode.substring(0,3) == '737'){
                statePrice = 5;
            }
            else{
                statePrice = Number(state[pin]);
            }
        }else{
            statePrice = 4;
        } 
        //console.log(typeOfCustomer , statePrice);
        monthlyUnits = eBill / statePrice;

        
        
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

        //MONTHLY SAVINGS
        monthlySavings = Math.round(statePrice * systemSize * 116);

        //MONTHLY SOLAR UNITS
        monthlySolarUnits = Math.round(systemSize * 116) ;

        //LIFETIME SAVINGS
        lifetimeSavings = Math.round(monthlySavings*12*28.17330458);

        //console.log("Lifetime" , lifetimeSavings);

        //TREES SAVED
        treesSaved = Math.round(systemSize*41.6);
        //console.log("Trees" , treesSaved);

        localStorage.setItem('PIN', pinCode);
        localStorage.setItem('TOC', typeOfCustomer);
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



$("#cal").submit(function(e) {
    e.preventDefault();
});


