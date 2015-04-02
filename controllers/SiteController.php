<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;
use app\models\City;
use app\models\Local;
use app\models\Contact;
use app\models\WorkWithUs;
use yii\web\UploadedFile;

class SiteController extends Controller
{
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout'],
                'rules' => [
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }

    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    public function actionIndex()
    {
        return $this->render('index');
    }

    public function actionLogin()
    {
        if (!\Yii::$app->user->isGuest) {
            return $this->goHome();
        }

        $model = new LoginForm();
        if ($model->load(Yii::$app->request->post()) && $model->login()) {
            return $this->goBack();
        } else {
            return $this->render('login', [
                'model' => $model,
            ]);
        }
    }

    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }

    public function actionContact()
    {
        /*$model = new ContactForm();
        if ($model->load(Yii::$app->request->post()) && $model->contact(Yii::$app->params['adminEmail'])) {
            Yii::$app->session->setFlash('contactFormSubmitted');

            return $this->refresh();
        } else {
            return $this->render('contact', [
                'model' => $model,
            ]);
        }*/
        if(isset($_POST['nombre']) && isset($_POST['apellido']) && isset($_POST['email']) && isset($_POST['celular']) && isset($_POST['tipo']) && isset($_POST['mensaje'])){
            $contact=new Contact;
            $contact->type=$_POST['tipo'];
            $contact->name=$_POST['nombre'];
            $contact->lastname=$_POST['apellido'];
            $contact->email=$_POST['email'];
            $contact->cellphone=$_POST['celular'];
            $contact->message=$_POST['mensaje'];
            if($contact->type=='Reclamo'){
                if(isset($_POST['cedula'])){
                    $contact->identity=$_POST['cedula'];
                }
                else{
                    echo "no cedula";
                }
            }
            if($contact->save()){
            	echo "enviado";
            }
            else{
            	echo "no save";
            	print_r($contact->getErrors());
            }
        }
        else{
            echo "no post";
        }
    }

    public function actionWork()
    {
        if(isset($_POST['nombre']) && isset($_POST['email']) && isset($_POST['celular']) && isset($_POST['mensaje']) && isset($_FILES['cv'])){
            $work=new WorkWithUs;
            $work->name=$_POST['nombre'];
            $work->email=$_POST['email'];
            $work->phone=$_POST['celular'];
            $work->comment=$_POST['mensaje'];
            $filename = date('Y_m_d_H_i_s').'_'.$_FILES['cv']['name'];
		    $filetype = $_FILES['cv']['type'];
		    $filetemp = $_FILES['cv']['tmp_name'];
		    $filepath = "images/cv/";
            if(is_uploaded_file($filetemp)) {
		        if(move_uploaded_file($filetemp, $filepath . $filename)) {
		        	if(chmod($filepath . $filename, 777)){
		            	$work->cv=$filename;
		        	}
		        	else{
		        		echo "no chmod";
		        	}
		        }
		        else {
		            echo "no move";
		        }
		    }
		    else {
		        echo "no upload";
		    }
            if($work->save()){
            	echo "enviado";
            }
            else{
            	echo "no save";
            	print_r($work->getErrors());
            }
        }
        else{
            echo "no post";
        }
    }

    public function actionAbout()
    {
        return $this->render('about');
    }

    public function actionLoadStores()
    {
        $cities=City::find()->all();
        $return=[];
        foreach ($cities as $i => $city) {
            $cit=[];
            $cit['name']=$city->description;
            foreach ($city->locals as $j => $local) {
                $loc=[];
                $loc['name']=$local->name;
                $loc['address']=$local->address;
                $loc['schedule']=$local->schedule;
                $loc['phone']=$local->phone;
                $loc['cellphone']=$local->cellphone;
                $loc['map']=$local->maps;
                $loc['picture']=$local->picture;
                $cit['locales'][$local->id]=$loc;
            }
            $return[$city->id]=$cit;
        }
        return json_encode($return);
    }
}
