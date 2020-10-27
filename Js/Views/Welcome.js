function Welcome(){
    let divWelcome=document.createElement('div'); 
    divWelcome.setAttribute('class','divWelcome');

        let divFlex=document.createElement('div'); 
        divFlex.setAttribute('class','flex-center position-ref full-height');
            let divcontent=document.createElement('div'); 
            divcontent.setAttribute('class','content');
                let divTitle=document.createElement('div');
                divTitle.setAttribute('class','title'); 
                divTitle.setAttribute('id','div');

                    let div=document.createElement('div'); 
                        let b1=document.createElement('b'); 
                        b1.setAttribute('id','BC'); 
                        b1.textContent="Expense";

                        let br=document.createElement('br');

                        let b2=document.createElement('b'); 
                        b2.setAttribute('id','BS'); 
                        b2.textContent="Tra<ker"; 
                    div.appendChild(b1); 
                    div.appendChild(br);
                    div.appendChild(b2);

                    let p=document.createElement('p'); 
                    p.setAttribute('id','pWelcome'); 
                        //let b3=document.createElement('b'); 
                        //b3.textContent="Welcome to Expense Tracker";
                    p.textContent="Welcome to Expense Tracker, control your budget!";
                    //p.appendChild(b3);
                divTitle.appendChild(div); 
                divTitle.appendChild(p);

                divcontent.appendChild(divTitle);
                divFlex.appendChild(divcontent);
                
        divWelcome.appendChild(divFlex);
         return divWelcome;   

}