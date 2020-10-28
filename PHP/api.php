<?php 
require_once 'Expense.php'; 
$expenseService=new ExpenseService();

header('Content-Type: application/json; charset=UTF-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Content-Language, Accept-Language, Accept, Downlink");

$method=''; 
$action='';
$id=0;

if(isset($_SERVER['REQUEST_METHOD'])){
    $method = $_SERVER['REQUEST_METHOD'];
}

if(isset($_GET['action'])){
    $action = $_GET['action'];
}


if($method=='POST'){
    switch($action){
        case 'postLogin':
            $jsonBody = file_get_contents('php://input');
            $json = json_decode($jsonBody, true);

            $email=$json['email']; 
            $password=$json['password'];
            $expenseService->login($email,$password); 
        break;

        case 'postRegister':
            $jsonBody = file_get_contents('php://input');
            $json = json_decode($jsonBody, true);

            $email=$json['email']; 
            $password=$json['password'];
            $expenseService->addUser($email,$password); 
        break;

        case 'addExpense': 
            $jsonBody=file_get_contents('php://input'); 
            $json=json_decode($jsonBody,true);
            //$itemName, $price, $categoryName, $amount, $userId, $date

            //get the id to pass it to the function that add to the database 
            $userId=$_GET['id']; 
            $itemName=$json['itemName'];
            $price=$json['price']; 
            $categoryName=$json['categoryName']; 
            $amount=$json['amount']; 
            $date = str_replace("T"," ", str_replace("-", ":", $json['date']));
            $expenseService->addExpense($itemName, $price, $categoryName, $amount, $userId, $date);
        break;

        case 'editExpense': 
            $jsonBody=file_get_contents('php://input'); 
            $json=json_decode($jsonBody,true);
            //$expenseId, $name=null, $amount=null, $price=null, $categoryName=null
            $expenseid=$_GET['expenseid']; 
            $itemName=$json['itemName']; 
            $amount=$json['amount'];
            $price=$json['price'];
            $category=$json['category'];
            $expenseService->editExpense($expenseid,$itemName,$amount,$price,$category);
        break;

        case 'removeExpense':
            $id=$_GET['id'];
            $expenseid=$_GET['expenseid'];
            $expenseService->deleteExpense($expenseid,$id);
        break;

        case 'removeCategory':
            $catId=$_GET['id']; 
            $expenseService->deleteCategory($catId);
        break;

        case 'addCategory': 
            $jsonBody=file_get_contents('php://input'); 
            $json=json_decode($jsonBody,true);
            $name=$json['category'];
            $expenseService->addCategory($name);
        break;

        case 'FilterExpenses': 
            $jsonBody=file_get_contents('php://input'); 
            $json=json_decode($jsonBody,true); 
            $date1=$json['date1']; 
            $date2=$json['date2']; 
            $UserId=$_GET['id']; //get the user id and pass it to the function in expenses Service

            $expenseService->getExpensesFiltered($UserId,$date1,$date2); 
        break; 


    }//swicth
}
else{ //GET METHOD
    switch($action){
        case 'getExpenses':
            $id=$_GET['id']; 
            $expenseService->getAllExpensesByUser($id);
        break;

        case 'getPieChart': 
            $expenseService->getCategoriesPieChart();
        break;

        case 'getCategories': 
            
            $expenseService->getAllCategories();
        break;
    }
}