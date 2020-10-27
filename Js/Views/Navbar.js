function headerform(authController,Body,expenseController,Userid){
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
                //console.log("clicked");
                clear();
                Body.appendChild(Welcome());
                
            }
            div2.appendChild(a); 
        let ul=document.createElement('ul');
        ul.setAttribute('class','nav navbar-nav'); 
            let li1=document.createElement('li'); 
                let a1=document.createElement('a'); 
                a1.textContent="Add Expense"; 
                //a1.href= function add expense
            li1.appendChild(a1); 

            let li2=document.createElement('li'); 
                let a2=document.createElement('a'); 
                a2.textContent="List Categories"; 
                //a2.href= function edit expense
            li2.appendChild(a2);

            let li3=document.createElement('li'); 
                let a3=document.createElement('a'); 
                a3.textContent="List Expenses";
            li3.appendChild(a3); 

            let li6=document.createElement('li');
                let a6=document.createElement('a'); 
                a6.textContent="Categories Pie Chart";
            li6.appendChild(a6);
        ul.appendChild(li1); 
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li6);

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
        ul2.appendChild(li4); 
        ul2.appendChild(li5);

    div1.appendChild(div2);
    //div1.appendChild(ul);
    div1.appendChild(ul2);
    nav.appendChild(div1);
    return nav;
    
}              


