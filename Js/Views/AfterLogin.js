function headerAfterLogin(authController,Body,expenseController,Userid){
    let nav=document.createElement('nav'); 
    nav.setAttribute('class','navbar navbar-inverse'); 

    let div1=document.createElement('div'); 
    div1.setAttribute('class','container-fluid'); 
        let div2=document.createElement('div');
        div2.setAttribute('class','navbar-header');
            let a = document.createElement('a'); 
            a.setAttribute('class','navbar-brand'); 
            a.textContent="ExpenseTra<ker"; 
            a.setAttribute('style','cursor:pointer');
            a.onclick=()=>{
                console.log('vvv');
                clear();
                Body.appendChild(Welcome());
            }
            div2.appendChild(a); 
        let ul=document.createElement('ul');
        ul.setAttribute('class','nav navbar-nav'); 
            let li1=document.createElement('li'); 
                let a1=document.createElement('a'); 
                a1.textContent="Add Expense"; 
                //a1.href= expenseController.addExpense(Body,Userid);
                a1.setAttribute('style','cursor:pointer');
                a1.onclick=()=>{
                    clear();
                    expenseController.addExpense(Body,Userid,expenseController);
                }

            li1.appendChild(a1); 

            let li3=document.createElement('li'); 
                let a3=document.createElement('a'); 
                a3.textContent="List Expenses";
                a3.setAttribute('style','cursor:pointer');
                a3.onclick=()=>{
                    clear();
                    expenseController.getExpenses(Body,Userid,expenseController);
                };
            li3.appendChild(a3); 
            /*let li6=document.createElement('li');
                let a6=document.createElement('a'); 
                a6.textContent="View Categories Pie Chart";
                a6.setAttribute('style','cursor:pointer');
                a6.onclick=()=>{
                    clear(); 
                    expenseController.getPieChart(Body);
                }
            li6.appendChild(a6);*/

            let li8=document.createElement('li'); 
                let a8=document.createElement('a'); 
                a8.textContent="Manage Categories";
                a8.setAttribute('style','cursor:pointer'); 
                //Handle the categories functions, add delete, view chart on the same page
                a8.onclick=()=>{
                    expenseController.getCategories(Body,expenseController); 
                    expenseController.getPieChart(Body);
                }
                
            li8.appendChild(a8);

        ul.appendChild(li1); 
        ul.appendChild(li3);
        //ul.appendChild(li6);
        ul.appendChild(li8);

        //SIGN UP SIGN IN DIV
        let ul2=document.createElement('ul'); 
        ul2.setAttribute('class','nav navbar-nav navbar-right'); 
            
        let li4=document.createElement('li'); 

        let a4=document.createElement('a'); 
        a4.setAttribute('style','cursor:pointer');
        a4.onclick=()=>{
            document.getElementById('Body').innerHTML='';
            ul2.removeChild(li4);
            authController.registerform(Body);
            ul2.appendChild(li5);

            
        }

        let spanSignup=document.createElement('span'); 
        spanSignup.setAttribute('class','glyphicon glyphicon-user');
        spanSignup.textContent="SignUp"; 
        a4.appendChild(spanSignup); 
        li4.appendChild(a4); 

        let li5=document.createElement('li'); 
                let a5=document.createElement('a'); 

                a5.setAttribute('style','cursor:pointer');
                a5.onclick= ()=>{
                    document.getElementById('Body').innerHTML='';
                    ul2.removeChild(li5);
                    ul2.appendChild(li4);
                    //ul2.removeChild
                    authController.loginform(Body);
                    
                }

                let spanLogin=document.createElement('span'); 
                spanLogin.setAttribute('class','glyphicon glyphicon-log-in');
                spanLogin.textContent="Login"; 
                a5.appendChild(spanLogin); 
                li5.appendChild(a5);

                
        
            let li7=document.createElement('li'); 
            let a7=document.createElement('a');
            a7.textContent="Logout";
            a7.setAttribute('style','cursor:pointer');
            a7.onclick=()=>{
                document.getElementById('Body').innerHTML='';
                ul2.removeChild(li7); 
                ul2.appendChild(li4);
                ul2.appendChild(li5);
                
                authController.logout();
                
            }
            li7.appendChild(a7);
            
        ul2.appendChild(li7); 

    div1.appendChild(div2);
    div1.appendChild(ul);
    div1.appendChild(ul2);
    nav.appendChild(div1);
    return nav;
    
}              


