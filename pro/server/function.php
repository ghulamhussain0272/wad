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

        echo "<option value='$id'>$title</option>";
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
        $id1=$row['brand_id'];

        echo "<option value='$id1'>$title</a></option>";
    }
}

function display_product(){
    global $con;
    $getProductQuery="select * from product";
    $result=mysqli_query($con,$getProductQuery);
    while($row=mysqli_fetch_assoc($result))
    {
        $title=$row['pro_title'];
        $cat=$row['pro_cat'];
        $brand=$row['pro_brand'];
        $price=$row['pro_price'];
        $desc=$row['pro_desc'];
        $keywords=$row['pro_keywords'];

        echo "$title $cat $brand $price $desc $keywords<br>";
    }
}

?>
























