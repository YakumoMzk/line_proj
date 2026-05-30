<?php

  $conn = mysqli_connect("localhost", "root", "", "newstu");
  $sql = "SELECT * FROM depart";
  $res = mysqli_query($conn, $sql);

  //开始获取数据数组
  $depart = array();
  $rate = array();
  $last_rate = array();
  $json_data = array();

  while ($row = mysqli_fetch_assoc($res)) {
    array_push($depart, $row['dept_name']);
    array_push($rate, $row['dept_report_rate']);
    array_push($last_rate, $row['dept_report_rate_last']);
  }

  $data = array('depart' => $depart, 'rate' => $rate, 'last_rate' => $last_rate);

  $json_data = json_encode($data, JSON_UNESCAPED_UNICODE);
  echo $json_data;

?>
