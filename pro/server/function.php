<?php

require "dp_connection.php";

/*for index.php*/
function getCat(){
    global $con;
    $getCatQuery= "select * from categories";
    $result = mysqli_query($con,$getCatQuery);
    while($row=mysqli_fetch_assoc($result))
    {
        $title=$row['cat_title'];
        $id=$row['cat_id'];

        echo "<li><a class='nav-link' href='#'>$title</a></li>";
    }
}
/*for index.php*/
function getBrand(){
    global $con;
    $getCatQuery= "select * from brand";
    $result = mysqli_query($con,$getCatQuery);
    while($row=mysqli_fetch_assoc($result))
    {
        $title=$row['brand_title'];
        $id=$row['brand_id'];

        echo "<li><a class='nav-link' href='#'>$title</a></li>";
    }
}

/*for insert_product.php*/
function getCat2(){
    global $con;
    $getCatQuery= "select * from categories";
    $result = mysqli_query($con,$getCatQuery);
    while($row=mysqli_fetch_assoc($result))
    {
        $title=$row['cat_title'];
        $id=$row['cat_id'];

        echo "<option>$title</option>";
    }
}
/*for insert_product.php*/
function getBrand2(){
    global $con;
    $getCatQuery= "select * from brand";
    $result = mysqli_query($con,$getCatQuery);
    while($row=mysqli_fetch_assoc($result))
    {
        $title=$row['brand_title'];
        $id=$row['brand_id'];

        echo "<option>$title</a></option>";
    }
}


?>