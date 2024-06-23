<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "form_db";
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $fullname = isset($_POST['fullname']) ? $_POST['fullname'] : null;
    $email = isset($_POST['email']) ? $_POST['email'] : null;
    $phone_code = isset($_POST['phone_code']) ? $_POST['phone_code'] : null;
    $phone = isset($_POST['phone']) ? $_POST['phone'] : null;
    $position = isset($_POST['Position']) ? $_POST['Position'] : null;
    $min_price = isset($_POST['minPriceInput']) ? $_POST['minPriceInput'] : null;
    $max_price = isset($_POST['maxPriceInput']) ? $_POST['maxPriceInput'] : null;
    $motivation = isset($_POST['motivation']) ? $_POST['motivation'] : null;
    $skills = isset($_POST['skills']) ? $_POST['skills'] : null;
    $experience = isset($_POST['experience']) ? $_POST['experience'] : null;
    $submission_date = date('Y-m-d');
    if ($fullname && $email && $phone_code && $phone && $position) {
        $sql = "INSERT INTO submissions (fullname, email, phone_code, phone, position, min_price, max_price, motivation, skills, experience, submission_date)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssssiissss", $fullname, $email, $phone_code, $phone, $position, $min_price, $max_price, $motivation, $skills, $experience, $submission_date);
        if ($stmt->execute()) {
            echo "Dane zostały pomyślnie zapisane";
        } else {
            echo "Błąd: " . $stmt->error;
        }
        $stmt->close();
    } else {
        echo "Wszystkie pola są wymagane!";
    }
    $conn->close();
}
?>
