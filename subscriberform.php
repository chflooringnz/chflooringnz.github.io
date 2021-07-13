<?php
if($_POST["message"]) {
mail("ianchang1339@gmail.com", "Here is the subject line",
$_POST["insert your message here"]. "From: ianchang1339@gmail.com");
}
?>
