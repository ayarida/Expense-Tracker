//LOGIN FORM
function getLogInForm(parent,handler1,handler2){ //handler1 for login, handler2 for register

    let formDiv=document.createElement('div');
    formDiv.setAttribute('align','center'); 
    formDiv.setAttribute('class','loginDiv');
    
    //title of the form 
    let TitleDiv=document.createElement('div');
    let Title = document.createElement("H1");
    TitleDiv.setAttribute('class','loginTitle');
    let textTitle = document.createTextNode("Welcome Again:");
    Title.appendChild(textTitle); 
    TitleDiv.appendChild(Title);
    formDiv.appendChild(TitleDiv);

    //Email creation
    let emailDiv=document.createElement('div'); 
    emailDiv.setAttribute('class','form-group');
    emailDiv.setAttribute('id','emailDiv');
    
    let emailLabel=document.createElement('label'); 
    emailLabel.textContent="Email: "
    let emailInput=document.createElement('input'); 
    emailInput.setAttribute('type','text'); 
    emailInput.setAttribute('name','email'); 
    emailInput.setAttribute('placeholder','Email');
    emailDiv.appendChild(emailLabel); 
    emailDiv.appendChild(emailInput); 


    //Password Creation
    let PassDiv=document.createElement('div'); 
    PassDiv.setAttribute('class','form-group'); 

    let PassLabel=document.createElement('label'); 
    PassLabel.textContent="Password: "; 
    let PassInput=document.createElement('input'); 
    PassInput.setAttribute('type','password'); 
    PassInput.setAttribute('name','password'); 
    PassInput.setAttribute('placeholder','Password');

    PassDiv.appendChild(PassLabel);
    PassDiv.appendChild(PassInput);

    let submit=document.createElement('button'); 
    submit.setAttribute('class','submitLogin');
    submit.textContent="Submit";

    submit.addEventListener('click', ()=>{
        if(emailInput.value.length==0 && PassInput.value.length==0){
            let span=document.createElement('span'); 
            span.setAttribute('class','help-block');
            span.textContent="Email and Password are required";
            formDiv.appendChild(span);
        }
        else{
            if(emailInput.value.length==0){
                let span=document.createElement('span'); 
                span.setAttribute('class','help-block');
                span.textContent="Email is required";
                formDiv.appendChild(span);
            }
            else{
                if(PassInput.value.length==0){
                    let span=document.createElement('span'); 
                    span.setAttribute('class','help-block');
                    span.textContent="Password is required";
                    formDiv.appendChild(span);
                }
                else{
                    let value1=emailInput.value;
                    let value2=PassInput.value;
                    handler1(value1,value2);
                }
            }
        }
    });

    /*let SignUpDiv=document.createElement('div'); 
    SignUpDiv.setAttribute('id','SignUpDiv');

    let SignUpLabel=document.createElement('label');
    SignUpLabel.textContent="You don't have an account?";

    let SignUpLink=document.createElement('button'); 
    SignUpLink.textContent="Sign Up!";
    SignUpDiv.appendChild(SignUpLabel); 
    SignUpDiv.appendChild(SignUpLink);

    SignUpLink.addEventListener('click', () => {
        parent.removeChild(formDiv);
        getRegisterForm(parent,handler2);
        //createUser(parent);
    });
    */
    formDiv.appendChild(emailDiv);
    formDiv.appendChild(PassDiv);
    formDiv.appendChild(submit);
    formDiv.appendChild(document.createElement('br'));
    //formDiv.appendChild(SignUpDiv);
    parent.appendChild(formDiv);
}

///////////////////////////////////////////////////////////////////////////

//REGISTER FORM
function getRegisterForm(root,handler2){
    let formDiv=document.createElement('div');
    formDiv.setAttribute('align','center'); 
    formDiv.setAttribute('class','registerDiv');
    let emailDiv=document.createElement('div'); 
    emailDiv.setAttribute('class','form-group');
    emailDiv.setAttribute('id','emailDiv');
    let emailLabel=document.createElement('label'); 
    emailLabel.textContent="Email:"
    let emailInput=document.createElement('input'); 
    emailInput.setAttribute('type','text'); 
    emailInput.setAttribute('name','email'); 
    emailInput.setAttribute('placeholder','Email');
    emailInput.required=true; 

    emailDiv.appendChild(emailLabel); 
    emailDiv.appendChild(emailInput); 


    let PassDiv=document.createElement('div'); 
    PassDiv.setAttribute('class','form-group'); 

    let PassLabel=document.createElement('label'); 
    PassLabel.textContent="Password:"; 
    let PassInput=document.createElement('input'); 
    PassInput.setAttribute('type','password'); 
    PassInput.setAttribute('name','password'); 
    PassInput.setAttribute('placeholder','Password');
    PassInput.required=true;
    PassDiv.appendChild(PassLabel);
    PassDiv.appendChild(PassInput);

    let ConfirmPassDiv=document.createElement('div'); 
    ConfirmPassDiv.setAttribute('class','form-group'); 
   
    let ConfirmPassLabel=document.createElement('label');
    ConfirmPassLabel.textContent="Confirm Password:"; 
    ConfirmPassLabel.setAttribute('id','ConfirmPassLabel');
    ConfirmPassInput=document.createElement('input');
    ConfirmPassInput.setAttribute('id','ConfirmPassInput');
    ConfirmPassInput.setAttribute('type','password');
    ConfirmPassInput.setAttribute('placeholder','Confirm Password');
    ConfirmPassInput.required=true;
    ConfirmPassDiv.appendChild(ConfirmPassLabel); 
    ConfirmPassDiv.appendChild(ConfirmPassInput);

    

    let submit=document.createElement('button'); 
    submit.setAttribute('class','submitRegister');
    submit.textContent="Submit";

    submit.addEventListener('click', ()=>{
        clear();
        if(emailInput.value.length==0 && PassInput.value.length==0){
            let span=document.createElement('span'); 
            span.setAttribute('class','help-block');
            span.textContent="Email and Password are required";
            formDiv.appendChild(span);
        }
        else{
            if(emailInput.value.length==0){
                let span=document.createElement('span'); 
                span.setAttribute('class','help-block');
                span.textContent="Email is required";
                formDiv.appendChild(span);
            }
            else{
                if(PassInput.value.length==0){
                    let span=document.createElement('span'); 
                    span.setAttribute('class','help-block');
                    span.textContent="Password is required";
                    formDiv.appendChild(span);
                }
                else{
                    if(ConfirmPassInput.value.length==0){
                        let span=document.createElement('span'); 
                        span.setAttribute('class','help-block');
                        span.textContent="Please confirm your Password";
                        formDiv.appendChild(span);
                    }
                    else{
                        if(PassInput.value==ConfirmPassInput.value){
                            let value1=emailInput.value;
                            let value2=PassInput.value;
                            handler2(value1,value2);
                        }
                    }
                    
                }
            }
        }
    });

    formDiv.appendChild(emailDiv);
    formDiv.appendChild(PassDiv);
    formDiv.appendChild(ConfirmPassDiv);
    formDiv.appendChild(submit);
    root.appendChild(formDiv);
}
