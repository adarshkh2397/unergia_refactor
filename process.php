<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');

ob_start();
$host = 'localhost';
$db_user = 'unergian_admin';
$db_pass = 'ridah@123';
$db_name = 'unergian_investor';

$connection = mysqli_connect($host,$db_user,$db_pass,"unergian_investor");

$email = $_REQUEST['email'];
$password = $_REQUEST['password'];
$secret = $_REQUEST['secret'];

$query = mysqli_query($connection,"SELECT * FROM `users` where `email` = '$email' AND `password` = '$password'");

if(mysqli_num_rows($query)<1){
    echo "Invalid pwd";
    
}
else{
 session_start();

    $row = mysqli_fetch_assoc($query);
    $_SESSION['name'] = $row['name'];
    $_SESSION['email'] = $email;

 header('location: testinv.php?para1=Investors_Sign');

 

}



?>