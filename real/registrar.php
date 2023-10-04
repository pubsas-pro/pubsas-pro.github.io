<?php


include("con_db.php");

if (isset($_POST['register'])) {
    if (strlen($_POST['name']) >= 1 && strlen($_POST['email']) >= 1 && strlen($_POST['password']) >= 1 ) {
        $name = trim($_POST['name']);
        $email = trim($_POST['email']);
        $password = trim($_POST['password']) ;
        // $fechareg = date("d/m/y");
        $consulta = "INSERT INTO registrarse(nombre, email, contrasena) VALUES ('$name','$email','$password')";
        $resultado = mysqli_query($conex,$consulta);
        if ($resultado){
            ?>
                <h3 class='ok'> Te has inscrito correctamente </h3>
            <?php
        } else {
            ?>
                <h3 class='bad'>ups ha ocurrido un error</h3>
    <?php
        }
    } else {
        ?>
            <h3 class='bad'>por favor complete los campos</h3>
        <?php
    }
}

?>