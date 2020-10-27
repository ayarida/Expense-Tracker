//DRIVER
let service=new Service(); 
let auth=new AuthController(service);
let exp=new ExpenseController(service);

let url="http://localhost:3000/api.php?action=";
let User={
    isLoggedIn:false,
    //token:'',
    email:'',
    id:''
};

if(localStorage.getItem('User')==null){
    localStorage.setItem('User',JSON.stringify(User));
}

let mainHead=document.getElementById('mainHead'); 
let Body=document.getElementById('Body');


function clear(){
    Body.innerHTML='';
}

Refresh = () =>{
    Body.innerHTML='';
    User=JSON.parse(localStorage.getItem('User'));
    if(User.isLoggedIn==false){ //Not logged in yet 
        
        document.getElementById('mainHead').innerHTML='';
        mainHead.appendChild(headerform(auth,Body,exp,User.id));
        Body.appendChild(Welcome());
    }

    else{
        //console.log(User.id);
        //true 
        //List all the expenses of the user    
        document.getElementById('mainHead').innerHTML='';
        mainHead.appendChild(headerAfterLogin(auth,Body,exp,User.id));
        exp.getExpenses(Body,User.id,exp);
    }
}


Refresh();