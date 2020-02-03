function calc(){
    var x = document.getElementById("myDiv");
    var y = document.getElementById("myDiv2");
    var z = document.getElementById("showme");
    if (x.style.display === "block" & y.style.display ==="block" & z.style.display ==="none") {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
        
    } else {
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "none";
    }
    var invest = document.getElementById("investment").value;
    console.log(invest);
    var return1 = (0.016175877*invest) ;
    return1= return1.toFixed(1);
    document.getElementById("monthly2").innerHTML=return1;
  


      var return2 = (0.194110519*invest) ;
    return2= return2.toFixed(1);


    document.getElementById("yearly2").innerHTML=return2;

     var return3=(4.852762979*invest);
    return3= return3  .toFixed(1);


    document.getElementById("year252").innerHTML=return3;
    
    var return4=(0.00075901*invest)+ 0.285714286;
    
    return4= return4.toFixed(1);


    document.getElementById("trees2").innerHTML=return4+" <img src='images/tree.png' style='width:7%;'>";

    

}

$(document).ready(function() {
    $("#toggle").click(function() {
      var elem = $("#toggle").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        $("#toggle").text("Read Less");
       // $(".perspective-phone").css('margin-top','-500px');
  
        $("#text").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        $("#toggle").text("Read More");
      //  $(".perspective-phone").css('margin-top','-570px');
        $("#text").slideUp();
      }
    });
  });

  $("#text1").slideUp();
  $(document).ready(function() {
$("#toggle1").click(function() {
var elem = $("#toggle1").text();
if (elem == "Read More") {
//Stuff to do when btn is in the read more state
$("#text1").slideDown();
$("#toggle1").text("Read Less");
// $(".perspective-phone").css('margin-top','-500px');


} else {
//Stuff to do when btn is in the read less state
$("#toggle1").text("Read More");
//  $(".perspective-phone").css('margin-top','-570px');
$("#text1").slideUp();
}
});
});  