<?php

$admin_email="contact@unergia.net";
 $name =$_POST['name'];
  $email =$_POST['email'];
  $message  =$_POST['message'];
  $phone =$_POST['phone'];
  $subject="Invest Mail - ".$name;

$body = "From: $name\n Phone: $phone\n E-Mail: $email\n Message: $message\n ";

  if(@mail($admin_email, "$subject", $body, "From:" . $email))
echo 'done';
else
echo 'fail';
?>
