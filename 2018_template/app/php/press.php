<?php
if(!isset($_POST['submit']))
{
  //This page should not be accessed directly. Need to submit the form.
  echo "error; you need to submit the form!";
}
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$visitor_email = $_POST['email'];
$phone = $_POST['phone'];
$city = $_POST['city'];
$state = $_POST['state'];
//Validate first
if(empty($fname)||empty($visitor_email)) 
{
    echo "Name and email are mandatory!";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

$email_from = 'elite@MPowerEnergy.com';//<== update the email address

$email_subject = "New Form submission";



$email_body = '<html><body>';
$email_body .= "\n<h2>You have received a new message from the user: <u> $fname $lname </u>.</h2>\n \n";

 $email_body .=   "<h3>Here is the user's phone number:\n $phone\n \n <br>";
 $email_body .=   "Here is the user's email address:\n $visitor_email\n \n <br>";
 $email_body .=   "Location: $city, $state </h3>\n \n \n \n \n";
    
$email_body .= '</body></html>';


$to = "elite@MPowerEnergy.com";//<== update the email address


$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";



//Send the email!
mail($to,$email_subject,$email_body,$headers);



//done. redirect to thank-you page.
header('Location: ../fragments/success/thank-you.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 