<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["file"]["name"]);
    $category = strtolower($_POST['category']);
    $allowed_extensions = array("jpg", "jpeg", "png", "mp4");

    // Dosya uzantısı kontrolü
    $extension = pathinfo($target_file, PATHINFO_EXTENSION);
    if (in_array($extension, $allowed_extensions)) {
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
            echo "File ". basename($_FILES["file"]["name"]). " uploaded successfully!";
        } else {
            echo "Error uploading your file.";
        }
    } else {
        echo "Invalid file type.";
    }
}
?>
