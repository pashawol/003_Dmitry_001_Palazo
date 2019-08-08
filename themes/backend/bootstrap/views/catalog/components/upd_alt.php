<?php
//TODO не в работе, рабочий в корне
$b= $_POST[0];
$a= $_POST[1];
$c= $_POST['param3'];
$connection=Yii::app()->db;

// выполняем запрос
//$connection->createCommand("update set into table (pole1,pole2) values (:a, :b)")->execute(array(':a'=>$a, ':b'=>$b));
if($c==2){
	$connection->createCommand("UPDATE `catalog_category_images` SET `alt` = (:a) WHERE `catalog_category_images`.`id` = (:b)")->execute(array(':a'=>$a, ':b'=>$b));
}else{
$connection->createCommand("UPDATE `catalog_product_images` SET `alt` = (:a) WHERE `catalog_product_images`.`id` = (:b)")->execute(array(':a'=>$a, ':b'=>$b));
}

echo"ssssssssss-".$c;