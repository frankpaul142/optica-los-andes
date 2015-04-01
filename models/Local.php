<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "local".
 *
 * @property integer $id
 * @property integer $city_id
 * @property string $name
 * @property string $address
 * @property string $schedule
 * @property string $phone
 * @property string $cellphone
 * @property string $maps
 * @property string $status
 *
 * @property City $city
 */
class Local extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'local';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['city_id', 'name', 'address', 'schedule'], 'required'],
            [['city_id'], 'integer'],
            [['status'], 'string'],
            [['name'], 'string', 'max' => 150],
            [['address', 'schedule', 'maps'], 'string', 'max' => 255],
            [['phone'], 'string', 'max' => 9],
            [['cellphone'], 'string', 'max' => 10]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'city_id' => 'City ID',
            'name' => 'Name',
            'address' => 'Address',
            'schedule' => 'Schedule',
            'phone' => 'Phone',
            'cellphone' => 'Cellphone',
            'maps' => 'Maps',
            'status' => 'Status',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCity()
    {
        return $this->hasOne(City::className(), ['id' => 'city_id']);
    }
}
