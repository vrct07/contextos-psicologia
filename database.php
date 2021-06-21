<?php include_once "contextos-psicologia.php";?>
<html>
    <body>
        <?php
        $nome= $_POST ["nome"];
        $email= $_POST ["email"];
        $hora = $_POST ['assunto'];
        $Telefone = $_POST ['mensagem'];

        $conn= mysqli_connect ($servidor, $dbusuario, $dbsenha, $dbname)
        ;
        mysqli_select_db ($conn,'$dbname');
        $sql = "INSERT INTO contacts (nome, email, assunto, mensagem) VALUES ('$nome', '$email', '$assunto', '$mensagem')";
        if (mysqli_query ($conn, $sql)) {
            echo "<script>alert('salvei seus dados !'); window.location
            = 'index.php'; </script>";

        }else{
            echo "Deu errro:" . $sql . "<br>" . mysqli_error($conn); 
        }
        mysqli_close ($conn);
        ?>
        </body>
        </html>