<?php
/**
 * Created by PhpStorm.
 * User: Ghulam Hussain
 * Date: 12/26/2018
 * Time: 7:00 PM
 */

$a=array("Benefits of Trees","A tree can be a natural air conditioner.","You can improve the efficiency of your heat pump by shading it with a tree.","Evergreen trees can be used to reduce wind speed and thus loss of heat from your home in the winter by as much as 10 to 50 percent.");
for($x=0;$x<count($a);$x++)
{echo "<li>";
    echo $a[$x];
    echo "</li>";
}
?>