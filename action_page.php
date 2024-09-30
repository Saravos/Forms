<?php
    $firstname = $_GET['firstname'];
    $lastname = $_GET['lastname'];
    $email = $_GET['email'];
    $phone = $_GET['phone'];
    $passport = $_GET['passport'];
    $timeTaken = $_GET['timeTaken']; // Time taken in seconds

    echo "First Name: " . $firstname . "<br>";
    echo "Last Name: " . $lastname . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Phone Number: " . $phone . "<br>";
    echo "Passport/EID Number: " . $passport . "<br>";
    echo "Time Taken to fill the form: " . $timeTaken . " seconds<br>";
?>
