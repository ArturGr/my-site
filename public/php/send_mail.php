<?php

header("Access-Control-Allow-Origin:Domain-Name");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$json = file_get_contents('php://input');
$params = json_decode($json);

if ($params) {
    $name = strip_tags(trim($params->name));
    $email = filter_var(trim($params->email), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($params->message));

    $recipient = "mailRecipient";
    $subject = "New message from: $name";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($recipient, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo json_encode(["message" => "Message sent successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Server error: Failed to send email."]);
    }
} else {
    http_response_code(400);
    echo json_encode(["message" => "Wrong input data"]);
}
?>
