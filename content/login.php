<?php
header('Content-Type: text/plain');
$servername = "localhost";
$username = "root";
$password = "root1";
$dbname = "vj_info";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT * FROM login WHERE email = ? AND password = ?");
$stmt->bind_param("ss", $email, $password);

$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo "Success";
} else {
    echo "Invalid credentials";
}

$stmt->close();
$conn->close();
?>
