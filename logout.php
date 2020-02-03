<meta http-equiv="refresh" content="2;url=index.html"> 
<link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap" rel="stylesheet">
<style>
    .text{
text-align:center;  
font-weight: 700;
font-family: 'Nunito', sans-serif;
padding-top: 300px;
    }
    
</style>
<?php
SESSION_START();

echo "<h3 class='text'>You have been logged out successfully. Please wait while we redirect you!</h3>";

$_SESSION=array();
session_destroy();
//header('location: index_investor.html');


?>