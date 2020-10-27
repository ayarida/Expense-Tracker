class AuthController{
    
    constructor(service){
        this.service=service;
    }

    loginform(parent){
    
        getLogInForm(parent, 
        //handler1
            async (email,password)=>{
            let response=await this.service.post(url.concat('postLogin'),{email,password}); 
           
                if(response['success']==true){ //check the response object returned by login function in expense
                    User.isLoggedIn=true;
                    User.email=response['email'];
                    User.id=response['id'];
                    localStorage.setItem('User',JSON.stringify(User));
                    Refresh();
                }
             });
    }

    registerform(parent){

        getRegisterForm(parent, async (email,password)=>{
            let response=await this.service.post(url.concat('postRegister'),{email,password}); 
    
            if(response['success']==true){
                User.isLoggedIn=true;
                User.email=response['email'];
                User.id=response['id'];
                localStorage.setItem('User',JSON.stringify(User));
                Refresh();
            }
        });
    }

    logout(){

        User.isLoggedIn=false;
        localStorage.setItem('User',JSON.stringify(User));
        Refresh();
        //headerform(this,expenseController,Body,Userid);
        //redirect to the main page
    }
    
   
}