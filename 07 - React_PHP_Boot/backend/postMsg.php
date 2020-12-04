<?php

require "./Models/Comment.php";

header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");

$comment = new Comment;
$comment->nome = $_POST['nome'];
$comment->msg = $_POST['msg'];

$validate = $comment->insertNewComment();

if ($validate == true) {
  echo json_encode(true);
} else {
  echo json_encode(false);
}
