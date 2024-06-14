<?php 
    session_start();

    $username = $_POST['username'];
    $password = $_POST['password'];

    if($username ==='admin' && $password === '123')
    {
        $_SESSION['autenticado'] = true;
        $_SESSION['username'] = $username;
        header('Location: pagina_segura.php');
    }
    else {
        echo 'Login inválido';
    }

    $_SESSION['informacao'] = 'FATEC';
?>