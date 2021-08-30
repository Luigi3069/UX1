<?php
class connection
{

    private $pdo;

    //Function to establish connection with database
    public function connect_db()
    {

        //define the data source name 
        $dsn = 'mysql:dbname=books;host=localhost;port=3306';
        $username = "root";
        $password = "";
        try{
            $pdo = new PDO($dsn, $username, $password);
            return $pdo;
        }catch (PDOExecption $e){
            echo 'Connection failed: ' . $e->getMessage();
            header("location:../index.php?msg=DatabaseError".$e->getMessage());
        }
    }
}