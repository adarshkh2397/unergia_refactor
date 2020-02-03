$("#myform").submit(function(e) {
    $(':button[type="submit"]').attr('disabled' , true);


       console.log("hi");
e.preventDefault(); // avoid to execute the actual submit of the form.
var url = $(this).attr("action"); // the script where you handle the form input.
$.ajax({
 type: "POST",
 url: url,
 data: $("#myform").serialize(), // serializes the form's elements.
 success: function(data)
 {
if(data==="done"){
alert("Email sent successfully!")

$('#myform')[0].reset();
    $(':button[type="submit"]').attr('disabled' , false);


}
else
alert("Please try again!")
    $(':button[type="submit"]').attr('disabled' , false);



 }
});
});