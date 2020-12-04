<?php

require "./Models/Comment.php";

header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");

$comments = Comment::getAll();

echo json_encode($comments);
