<?php
$conn = mysqli_connect("localhost", "root", "", "newstu");
// 按省份 prov 分组统计人数
$sql = "SELECT prov, COUNT(*) AS total FROM student GROUP BY prov";
$res = mysqli_query($conn, $sql);

$prov = [];
$count = [];

while ($row = mysqli_fetch_assoc($res)) {
    array_push($prov, $row['prov']);
    array_push($count, $row['total']);
}

$data = [
    'prov' => $prov,
    'count'  => $count
];
echo json_encode($data, JSON_UNESCAPED_UNICODE);

mysqli_close($conn);
?>