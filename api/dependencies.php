<?php

$container = $app->getContainer();

$container['pdo'] = function ($c) {
    $db = $c->get('database');

    $drive = 'mysql:dbname=' . $db['dbname'] . ';host=' . $db['host'];

    return new \PDO($drive, $db['user'], $db['password']);
};

$container['mapper'] = function ($c) {
    return new Respect\Relational\Mapper($c->get('pdo'));
};