<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/site.css',
        'css/styles-optica.css',
        'css/style.css',
        'css/fractionslider.css',
        'css/queries-optica.css',
		'css/jquery.fancybox-1.3.4.css',
    ];
    public $js = [
        '//code.angularjs.org/1.3.9/angular.min.js',
        '//code.angularjs.org/1.3.9/angular-route.min.js',
        '//code.angularjs.org/1.3.9/angular-animate.min.js',
        'js/ui-bootstrap-tpls-0.12.1.min.js',
        'js/freewall.min.js',
        'js/app.js',
        'js/controllers.js',
        'js/angular-recaptcha.min.js',
        'js/script.js',
        'js/angular-swipe.min.js',
        'js/jquery.fractionslider.min.js',
		'js/jquery.fancybox-1.3.4.pack.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        // 'yii\bootstrap\BootstrapAsset',
    ];
}
