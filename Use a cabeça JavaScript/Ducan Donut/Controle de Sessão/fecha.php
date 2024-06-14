<?php
    // Inicia a sessão
    session_start();

    // Desfaz todas as variáveis de sessão
    session_unset();

    // Destroi a sessão
    session_destroy();

    // Se estiver usando cookies de sessão, remove o cookie
    //if (ini_get("session.use_cookies")) {
    //    $params = session_get_cookie_params();
    //    setcookie(session_name(), '', time() - 42000,
    //        $params["path"], $params["domain"],
    //        $params["secure"], $params["httponly"]
    //    );
    //}
?>

<html lang="pt-BR">
    <head>
    </head>
    <body>
        Sessão Encerrada.<br>
    </body>
</html>
