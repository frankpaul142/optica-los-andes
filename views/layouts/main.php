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
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>

<?php $this->beginBody() ?>
    <!-- HEADER OPTICA LOS ANDES -->
<header>
	<div class="header-line"></div>
    <div class="cont-menu">
    	<div class="logo-optica"><img src="images/logo-ola.png"/></div>
        <nav>
        	<ul>
            	<li><a href="#">QUIENES SOMOS</a></li>
                <!-- <li><a href="#">PRODUCTOS</a></li> -->
                <!-- <li><a href="#">SERVICIOS</a></li> -->
                <!-- <li><a href="#">PLANES EMPRESARIALES</a></li> -->
                <li><a href="#">ENCUÉNTRANOS</a></li>
                <li><a href="#">TRABAJA CON NOSOTROS</a></li>
                <li><a href="#">CONTACTO</a></li>
            </ul>
        </nav>
    </div>
</header>
<?= $content ?>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
