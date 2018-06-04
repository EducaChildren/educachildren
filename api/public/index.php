<?php 
require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../config.php';

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

$app = new \Slim\App($config);

require __DIR__ . '/../dependencies.php';

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

$app->get('/v1/tarefas', function (Request $request, Response $response) {
    
    $mapper = $this->get('mapper');

    $tarefas = $mapper->tarefas->fetchAll();

    return $response->withJson(['data' => $tarefas], 200);
});

$app->post('/v1/tarefas', function (Request $request, Response $response) {
    
    $tarefa = (object)$request->getParsedBody();

    $mapper = $this->get('mapper');

    $mapper->tarefas->persist($tarefa);

    $mapper->flush();

    return $response->withJson([
        'msg' => 'Tarefa criada com sucesso'
    ], 201);
});

$app->patch('/v1/tarefas/{id}', function (Request $request, Response $response, $id) {
    
    $patch = (object)$request->getParsedBody();

    $mapper = $this->get('mapper');

    $tarefa = $mapper->tarefas[$id]->fetch();
    $filho = $mapper->filho[1]->fetch();

    if (!$tarefa) {
        return $response->withStatus(404);
    }

    if ($tarefa->status_tarefa === 'concluida') {
        return $response->withStatus(404);
    }

    $tarefa->status_tarefa = $patch->status_tarefa;
    $filho->saldo += $tarefa->preco;

    $mapper->tarefas->persist($tarefa);
    $mapper->filho->persist($filho);

    $mapper->flush();

    return $response->withJson([
        'msg' => 'Tarefa conluida'
    ], 204);
});

$app->get('/v1/user/saldo', function (Request $request, Response $response) {
    $mapper = $this->get('mapper');

    $saldo = $mapper->filho[1]->fetch()->saldo;

    return $response->withJson([
        'saldo' => $saldo
    ]);
});

$app->run();