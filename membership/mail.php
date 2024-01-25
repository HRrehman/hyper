<?php

if(isset($_POST['submit'])){
	$to = "hello@hypertrade.ai";
	$first_name = $_POST['first_name'];
	$last_name = $_POST['last_name'];
	$from = $_POST['email'];
	$phone = $_POST['phone_number'];
	$message = "First Name: " . $first_name . "\n" .
               "Last Name: " . $last_name . "\n" .
               "Email: " . $from . "\n" .
               "Phone Number: " . $phone;
	$subject = "User Details for Account Creation";
	$headers = "From:" . $from;
	$result = mail($to,$subject,$message,$headers);

	if ($result) {
		// echo '<script type="text/javascript">alert("Your Message was sent Successfully!");</script>';
		echo '<script type="text/javascript">window.location.href = "https://buy.stripe.com/00g29v9qOcWk20U6oq";</script>';

	}else{
		echo '<script type="text/javascript">alert("Sorry! Message was not sent, Try again Later.");</script>';
		echo '<script type="text/javascript">window.location.href = "/";</script>';
	}
}


?>