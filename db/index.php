<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $conn = mysqli_connect('localhost', 'root', '', 'mydb');
    $query = "SELECT * FROM Product";
    $result = mysqli_query($conn, $query);
    $products = mysqli_fetch_all($result, MYSQLI_ASSOC);
    mysqli_free_result($result);
    mysqli_close($conn);

    echo "<table>";
    echo "<tr>" . "<th>ID</th>" . "<th>Name</th>" . "<th>Price</th>" . "<th>Currency</th>" . "</tr>";
    for ($i = 0; $i < count($products); $i++) {
        $product = $products[$i];
        echo "<tr>";
        echo "<td>".$product['ID']."</td>";
        echo "<td>".$product['name']."</td>";
        echo "<td>".$product['price']."</td>";
        echo "<td>".$product['currency']."</td>";
        echo "</tr>";
    }
    echo "</table>";
    ?>
</body>
</html>