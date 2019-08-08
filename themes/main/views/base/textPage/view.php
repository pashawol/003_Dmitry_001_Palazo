<?php
/**
 * @var \app\components\UI $ui
 * @var \siix\base\models\TextPage $model
 */
$ui->seo($model->page);
$ui->createBreadcrumbs($model->page);

if ($model->id == 191) {
echo '<a id="otziv" class="otzivv" href="#">Написать отзыв</a>';	
}
if ($model->id == 524) {
echo '<a id="quest" class="otzivv" href="#">Задать вопрос</a>';	
}

?>
<h1><?php echo CHtml::encode($ui->getSeoHeader($model->page)); ?></h1>

<?php
if ($model->id == 530) {
        $ui->widget('calc:components\FormWidget'); 	
}?>

<div class="textContainer">
    <?php if ($model->page->getHasChildren()): ?>
    <ul class="subpages">
        <?php foreach ($model->page->children as $child): ?>
            <li><?php echo CHtml::link($child->title, $child->createUrl()); ?></li>
        <?php endforeach; ?>
    </ul>
    <?php endif; ?>
    
    <?php //echo $model->id; 
    ?>
    <?php echo $model->text;  ?>
   
</div>

<?php
//TODO  Добавил отзывы с контактов Для ОТЗЫВОВ
if ($model->id == 191) {

  $gid = '61473155';
  $pid = '33344729';
  $token ='0c5703e50c5703e50c5703e58b0c3d9efc00c570c5703e550897718a97586f40b927105';   
  $api = file_get_contents("https://api.vk.com/method/board.getComments?group_id=".$gid."&topic_id=".$pid."&extended=1&access_token=".$token."&count=20&v=5.95");
  $result = json_decode($api,true);
	?>
<!-- 	    <div class="bbn" style="text-align: center;"> 
          <a href="https://vk.com/topic-61473155_33344729" target="_blank"><img class="attach__img" src="<?=$result['response']['items'][0]['attachments'][0]['photo']['sizes'][6]['url'] ?>" alt="Отзывы наших клиентов в ВК"></a>
        </div> -->
	<div class="textContainer">
		<?php  
 		$i=1;
		 foreach ($result['response']['items'] as $res) {
		    $admin= $res['from_id'];
		       foreach ($result['response']['profiles'] as $prop) { 
		        if($prop[id]==$admin){
		         $name =$prop['first_name']." ".$prop['last_name'];
		         $prof_img =$prop['photo_100'];
		         $vkname =$prop['screen_name'];
		       //$data =date('Y-m-d',$value['text']);
		       }
		  }

   		 if (!preg_match('/61473155/', $admin)){
	 	?>
        <?php if($i>2){ ?><div class="razdelitel">&nbsp;</div> <?php } ?>
        <p class="">
          <div class="community__fb1 fb">
             <div class="fb__row-1">
                <a style="font-size: 1.2em; color:#000;" href="https://vk.com/<?=$vkname ?>" target="_block" ><i><img src="<?=$prof_img ?>" alt=""></i><?php echo $name; ?></a>
                <span><?php echo date('d-m-Y',$res['date']); ?></span>
              </div>
            </div>  
            <p>

                <?=$res['text'] ?>
               <?php if($res['attachments']){
                   foreach ($res['attachments'] as $atach) { ?>
                  <div class="attach__img2" style="text-align: center;" >  <img src="<?=$atach['photo']['sizes'][4]['url'] ?>" > </div>
               <?php
                } 
              } 
            ?>
            </p>

          </p>
          
 <?php } 
    $i=$i+1;
    }
 ?>
	</div>
<?php } ?>

<?php
if ($model->id == 191) {
echo '<a id="otziv" class="otzivvv" href="#">Написать отзыв</a>';	


}
if ($model->id == 524) {
echo '<a id="quest" class="otzivvvm" href="#">Задать вопрос</a>';	
}

//TODO Форма для страницы https://palazo.ru/skolko-stoit-dizayn-proekt (Сколько стоит дизайн проект?)
 if ($model->id == 672) {
  ?>

<div class="form-45 form-45-dop" >
                
            <form action="" method="post" class="form-m">
                <div class='h3 h3_19'>Заполните и получите бесплатный дизайн-проект</div>
                <div class="flex-46">
                    <div>
                    <input type="text" id="namey" name="name" placeholder="Ваше имя:"><div class="errorx red"  id="bthrow_error_namey"></div>
                    </div>
                    <div>
                    <input type="tel" id="telfy" name="telf" placeholder="Ваш телефон:"> <div class="errorx red"  id="bthrow_error_telfy"></div>
                     </div>
                    <div>
                    <input type="text" id="gorody" name="gorod" placeholder="Ваш город:"><div class="errorx red"  id="bthrow_error_phoney"></div>
                </div>  
                </div>    
                <div class="flex-47">
          <div class="chs7">
            <input type="checkbox" name="check-name" checked="checked" id="condition1y">
            <a  style="color:#aaa" href='/pokupatelu/politika'> Даю согласие на обработку персональных данных </a>
           </div>   
                    <input type="submit" value="Получить дизайн проект" class="btn215">
                 </div>  
                <div class="errorx red"  id="bthrow_error_checky"></div>
                <div class=""  id="itogoy"></div>
                <div   class="throw_error errorx"></div>
            </form>   
                </div>


 <?php } ?>
