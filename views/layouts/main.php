<?php
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;
use yii\web\View;

/* @var $this \yii\web\View */
/* @var $content string */

$script=
<<< JS
var LHCChatOptions = {};
LHCChatOptions.opt = {widget_height:340,widget_width:300,popup_height:520,popup_width:500};
(function() {
var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
var refferer = (document.referrer) ? encodeURIComponent(document.referrer.substr(document.referrer.indexOf('://')+1)) : '';
var location  = (document.location) ? encodeURIComponent(window.location.href.substring(window.location.protocol.length)) : '';
po.src = '//chat.leadfort.com/lhc/index.php/esp/chat/getstatus/(click)/internal/(position)/bottom_right/(ma)/br/(top)/350/(units)/pixels/(leaveamessage)/true/(department)/2/3?r='+refferer+'&l='+location;
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
JS;
$script2=
<<<JS
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-5567008-21', 'auto');
  ga('send', 'pageview');
JS;
$this->registerJs($script,View::POS_END);
$this->registerJs($script2,View::POS_END);

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>"/>
    <meta name="description" content="Optica los Andes, distribuidor de lentes, gafas, lunas">
	<meta name="keywords" content="Optica Los Andes, Optica, Los Andes, Lentes, Gafas, Lunas, Ojos, Examenes Visuales, Oftalmología, Armazones">
	<meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <?= Html::csrfMetaTags() ?>
	
		
		
    
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body ng-app="Optica" ng-controller="MainCtrl">
<div class="cont-loader">   
    <div class="mid-top"></div> 
    <div class="mid-bot"></div>    
    <div class="loading">
        <div class="dot"></div>
        <div class="dot2"></div>
    </div>
</div> 
<?php $this->beginBody() ?>
    <!-- HEADER OPTICA LOS ANDES -->
<header>
	<div class="header-line"></div>
    <div class="cont-menu">
    	<a href="#/" ng-click="toSection($event,1)"><div class="logo-optica"><img src="images/logo-ola.png"/></div></a>
        <nav class="nav-comp">
        	<ul>
                <li><a href="#/" ng-click="toSection($event,1)">HOME</a></li>
            	<li><a href="#/quienes_somos" ng-click="toSection($event,4)">QUIÉNES SOMOS</a></li>
                <!-- <li><a href="#">PRODUCTOS</a></li> -->
                <!-- <li><a href="#">SERVICIOS</a></li> -->
                <!-- <li><a href="#">PLANES EMPRESARIALES</a></li> -->
                 <li><a href="#/trabaja_con_nosotros" ng-click="toSection($event,5)">TRABAJA CON NOSOTROS</a></li>
                <li><a href="#/locales" ng-click="toSection($event,6)">ENCUÉNTRANOS</a></li>
                <li><a href="http://facte.gerenciall.com:86/fe/seg_Login_OLA/seg_Login_OLA.php" target="_blank">FACTURACIÓN ELECTRÓNICA</a></li>
                 <li><a href="http://www.opticalosandes.com.ec/docs/optica-transparencia.pdf" target="_blank">TRANSPARENCIA</a></li>
                <li><a href="#/contacto" ng-click="toSection($event,3)">CONTACTO</a></li>
            </ul>
        </nav>
        <div class="trigger">
            <section class="mod model-1">
              <div class="menu">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"> </div>
            </div></section>
        </div>
        <nav class="nav-resp">
        	<ul>
                <li><a href="#/" ng-click="toSection($event,1)">HOME</a></li>
            	<li><a href="#/quienes_somos" ng-click="toSection($event,4)">QUIÉNES SOMOS</a></li>
                <!-- <li><a href="#">PRODUCTOS</a></li> -->
                <!-- <li><a href="#">SERVICIOS</a></li> -->
                <!-- <li><a href="#">PLANES EMPRESARIALES</a></li> -->
                 <li><a href="#/trabaja_con_nosotros" ng-click="toSection($event,5)">TRABAJA CON NOSOTROS</a></li>
                <li><a href="http://www.opticalosandes.com.ec/docs/optica-transparencia.pdf" target="_blank">TRANSPARENCIA</a></li>
                <li><a href="#/locales" ng-click="toSection($event,6)">ENCUÉNTRANOS</a></li>
                <li><a href="#/contacto" ng-click="toSection($event,3)">CONTACTO</a></li>
            </ul>
        </nav>
    </div>
</header>
<!-- <div id="pop-up">
<img src="images/promo/pop-up.jpg"/>
</div> -->
<?= $content ?>

<?php $this->endBody() ?>   
    <!-- <div class="chat"><img src='../web/images/chatenlinea2.png'></img></div>     -->
</body>
</html>
<?php $this->endPage() ?>
