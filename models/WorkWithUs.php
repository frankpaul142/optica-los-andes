<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "work_with_us".
 *
 * @property integer $id
 * @property string $name
 * @property string $email
 * @property string $phone
 * @property string $cv
 * @property string $comment
 */
class WorkWithUs extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'work_with_us';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'email', 'phone', 'cv', 'comment'], 'required'],
            [['comment'], 'string'],
            [['name', 'email'], 'string', 'max' => 150],
            [['phone'], 'string', 'max' => 10],
            [['cv'], 'file'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'email' => 'Email',
            'phone' => 'Phone',
            'cv' => 'Cv',
            'comment' => 'Comment',
        ];
    }
}
