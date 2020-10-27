<?php 
//DATABASE CONFIGURATION

class Config{

    private $dbServer; 
    private $dbUsername; 
    private $dbPassword; 
    private $dbName; 
    private $connection;


    public function __construct($dbServer,$dbUsername,$dbPassword,$dbName)
    {
        $this->dbServer=$dbServer; 
        $this->dbUsername=$dbUsername;
        $this->dbPassword=$dbPassword; 
        $this->dbName=$dbName; 
        $this->connection=new mysqli($dbServer,$dbUsername,$dbPassword,$dbName); 

    }

    public function getConnection(){

        //check connection 
        if($this->connection->connect_errno){
            die("FAILED TO CONNECT TO MYSQL"); 
            return 0;
        }
        else{
            return $this->connection;
        }
        
    }

    public function closeConnection(){
        $this->connection->close(); 
    }
}