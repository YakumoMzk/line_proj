<?php

  $conn = mysqli_connect("localhost", "root", "", "newstu");
  $sql = "SELECT * FROM depart";
  $res = mysqli_query($conn, $sql);

  //开始获取数据数组
  $depart = array();
  $plan_num = array();
  $come_num = array();
  $json_data = array();

  while ($row = mysqli_fetch_assoc($res)) {
    array_push($depart, $row['dept_name']);
    array_push($plan_num, $row['dept_plan_num']);
    array_push($come_num, $row['dept_come_num']);
  }

  $data = array('depart' => $depart, 'plan_num' => $plan_num, 'come_num' => $come_num);

  $json_data = json_encode($data,JSON_UNESCAPED_UNICODE);
  echo $json_data;

?>