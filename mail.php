<?php
//get data from form  
$email= $_POST['email'];
$to = "habib.naveed519@gmail.com";
$subject = "New Subscriber from HyperTrade";
$txt ="Email = " . $email;
$headers = "From: noreply@hypertrade.ai";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>
