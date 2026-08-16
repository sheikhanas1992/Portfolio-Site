<?php
// TEMPORARY TEST FILE. DELETE BEFORE LAUNCH.

require __DIR__ . '/PHPMailer/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

$config = require __DIR__ . '/config.php';

$debugLog = [];

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = $config['smtp_host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['smtp_user'];
    $mail->Password   = $config['smtp_pass'];
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = $config['smtp_port'];

    $mail->SMTPDebug   = 2;
    $mail->Debugoutput = function ($str, $level) use (&$debugLog) {
        $debugLog[] = trim($str);
    };

    $mail->setFrom($config['send_from'], $config['from_name']);
    $mail->addAddress($config['send_to']);

    $mail->Subject = 'PHP mail test';
    $mail->Body    = 'This is a test email sent at ' . date('Y-m-d H:i:s') . '.';

    $mail->send();
    echo "<h1>Sent successfully</h1>";
} catch (Exception $e) {
    echo "<h1>Failed:</h1>";
    echo "<p>" . htmlspecialchars($mail->ErrorInfo) . "</p>";
}

echo "<h2>SMTP debug log</h2>";
echo "<pre>" . htmlspecialchars(implode("\n", $debugLog)) . "</pre>";
