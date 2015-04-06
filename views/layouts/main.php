<?php
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;

/* @var $this \yii\web\View */
/* @var $content string */

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>"/>
    <meta name="description" content="Optica los Andes, distribuidor de lentes, gafas, lunas">
	<meta name="keywords" content="Optica Los Andes, Optica, Los Andes, Lentes, Gafas, Lunas, Ojos, Examenes Visuales, Oftalmología, Armazones">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <?= Html::csrfMetaTags() ?>
    
    <link rel="stylesheet" href="css/style.css" type="text/css" charset="utf-8" />
		<link rel="stylesheet" href="css/fractionslider.css">		
		
		
    
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
        <nav>
        	<ul>
                <li><a href="#/" ng-click="toSection($event,1)">HOME</a></li>
            	<li><a href="#/quienes_somos" ng-click="toSection($event,4)">QUIENES SOMOS</a></li>
                <!-- <li><a href="#">PRODUCTOS</a></li> -->
                <!-- <li><a href="#">SERVICIOS</a></li> -->
                <!-- <li><a href="#">PLANES EMPRESARIALES</a></li> -->
                 <li><a href="#/trabaja_con_nosotros" ng-click="toSection($event,5)">TRABAJA CON NOSOTROS</a></li>
                <li><a href="#/locales" ng-click="toSection($event,6)">ENCUÉNTRANOS</a></li>
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
            	<li><a href="#/quienes_somos" ng-click="toSection($event,4)">QUIENES SOMOS</a></li>
                <!-- <li><a href="#">PRODUCTOS</a></li> -->
                <!-- <li><a href="#">SERVICIOS</a></li> -->
                <!-- <li><a href="#">PLANES EMPRESARIALES</a></li> -->
                 <li><a href="#/trabaja_con_nosotros" ng-click="toSection($event,5)">TRABAJA CON NOSOTROS</a></li>
                <li><a href="#/locales" ng-click="toSection($event,6)">ENCUÉNTRANOS</a></li>
                <li><a href="#/contacto" ng-click="toSection($event,3)">CONTACTO</a></li>
            </ul>
        </nav>
    </div>
</header>
<?= $content ?>

<?php $this->endBody() ?>     
</body>
</html>
<?php $this->endPage() ?>
