<?php

$conn = mysqli_connect("localhost", "root", "", "newstu");
// 统计每个 nation 民族的人数
$sql = "SELECT nation, COUNT(*) AS total FROM student GROUP BY nation";
$res = mysqli_query($conn, $sql);

$nation = [];
$count = [];

while ($row = mysqli_fetch_assoc($res)) {
    array_push($nation, $row['nation']);
    array_push($count, $row['total']);
}

// 输出JSON
$data = [
    'nation' => $nation,
    'count'  => $count
];
echo json_encode($data, JSON_UNESCAPED_UNICODE);

?>