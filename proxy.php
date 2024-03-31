<?php
$username = 'demo'; // Your Geonames username
$url = $_GET['url'];
$finalUrl = $url . '&username=' . $username;

$response = file_get_contents($finalUrl);

header('Content-Type: application/json');
echo $response;
?>
