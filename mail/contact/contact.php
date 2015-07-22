<h3><?= $contact->type ?></h3>
<p>
<?php if($contact->identity!=''){
    echo 'Cedula: '.$contact->identity.'<br/>';
} ?>
Nombre: <?= $contact->name ?><br/>
Apellido: <?= $contact->lastname ?><br/>
Email: <?= $contact->email ?><br/>
Cellphone: <?= $contact->cellphone ?><br/>
Mensaje: <?= $contact->message ?><br/>
</p>