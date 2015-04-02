<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "contact".
 *
 * @property integer $id
 * @property string $type
 * @property string $name
 * @property string $lastname
 * @property string $email
 * @property string $cellphone
 * @property string $message
 * @property string $identity
 * @property string $medium
 */
class Contact extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'contact';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['type', 'name', 'lastname', 'email', 'cellphone', 'message'], 'required'],
            [['type', 'message'], 'string'],
            [['name', 'lastname', 'email'], 'string', 'max' => 150],
            [['cellphone', 'identity'], 'string', 'max' => 10],
            [['medium'], 'string', 'max' => 50]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'type' => 'Type',
            'name' => 'Name',
            'lastname' => 'Lastname',
            'email' => 'Email',
            'cellphone' => 'Cellphone',
            'message' => 'Message',
            'identity' => 'Identity',
            'medium' => 'Medium',
        ];
    }
}
