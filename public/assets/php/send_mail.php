<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$myEmail = "arturgroblicki@gmail.com";

$json = file_get_contents('php://input');
$params = json_decode($json);

if ($params && !empty($params->email) && !empty($params->name) && !empty($params->message)) {

    $name    = htmlspecialchars(strip_tags(trim($params->name)), ENT_QUOTES, 'UTF-8');
    $email   = filter_var(trim($params->email), FILTER_SANITIZE_EMAIL);
    $message = nl2br(htmlspecialchars(strip_tags(trim($params->message)), ENT_QUOTES, 'UTF-8'));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["success" => false, "error" => "Invalid email format"]);
        exit;
    }

    $subject = "New Portfolio Message from: $name";
    $email_content = "
        <html>
        <head><title>$subject</title></head>
        <body style='font-family: Arial, sans-serif; line-height: 1.6;'>
            <h2 style='color: #333;'>New Contact Form Submission</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <hr>
            <p><strong>Message:</strong></p>
            <p style='background: #f9f9f9; padding: 15px; border-left: 4px solid #ccc;'>$message</p>
        </body>
        </html>
    ";

    $headers = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=utf-8',
        'From: Portfolio Contact <' . $myEmail . '>',
        'Reply-To: ' . $email,
        'X-Mailer: PHP/' . phpversion()
    ];

    $success = mail($myEmail, $subject, $email_content, implode("\r\n", $headers), "-f " . $myEmail);

    if ($success) {
        http_response_code(200);
        echo json_encode(["success" => true, "message" => "Message sent successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "error" => "Internal server error: Mail delivery failed"]);
    }

} else {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Incomplete form data"]);
}
?>
