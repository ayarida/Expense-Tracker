function listExpenses(parent,list,expenseController,UserId){

    //document.getElementById(Body).innerHTML='';
    //console.log(list);
    
    let maindiv=document.createElement('div'); 
    maindiv.setAttribute('class','table-title'); 

    var h = document.createElement("h3"); 
    var t = document.createTextNode("Manage Expenses:");
    h.appendChild(t);

    //create the div for two inputs date 1 and date2 
    let FilterDateDiv=document.createElement('div');
    FilterDateDiv.setAttribute('class','FilterDateDiv');

    let date1Input=document.createElement('input'); 
    date1Input.setAttribute('placeholder','Date1'); 
    let date2Input=document.createElement('input'); 
    date2Input.setAttribute('placeholder','Date2'); 

    let filterButton=document.createElement('button'); 
    filterButton.textContent="Filter";
    filterButton.onclick=('click', ()=> {
        expenseController.getFilteredExpenses(parent,UserId,date1Input.value,date2Input.value,expenseController);
    })

    FilterDateDiv.appendChild(date1Input); 
    FilterDateDiv.appendChild(date2Input); 
    FilterDateDiv.appendChild(filterButton);

    maindiv.appendChild(h);
    maindiv.appendChild(FilterDateDiv);


    let tbody = document.createElement('tbody');
    tbody.setAttribute('class','table-hover');
    let table=document.createElement('table');
    table.setAttribute('class','table-fill');
    //Item Name:
    let th1=document.createElement('th'); 
    th1.textContent='Name';
    th1.setAttribute('class','theader');

    //Actions:
    let th2=document.createElement('th'); 
    th2.textContent='Actions';
    th2.setAttribute('class','theader');

    //Item Amount: 
    let th3=document.createElement('th');
    th3.textContent='Amount'; 
    th3.setAttribute('class','theader'); 

    //Item price: 
    let th4=document.createElement('th'); 
    th4.textContent='Price'; 
    th4.setAttribute('class','theader');

    //Date:
    let th5=document.createElement('th'); 
    th5.textContent='Date'; 
    th5.setAttribute('class','theader');

    table.appendChild(th1); //name header
    table.appendChild(th3); //amount header 
    table.appendChild(th4); //price header
    table.appendChild(th5); //date header 
    table.appendChild(th2); //actions header 
    

    
    list.forEach((expense) => { 
        //console.log("hello");
        let tr=document.createElement('tr'); 

        
        let td1=document.createElement('td');
        td1.setAttribute('style','text-align:center');
        let spanitemName=document.createElement('span'); 
        spanitemName.innerHTML=expense['itemName'];
        td1.appendChild(spanitemName); 


        let td3=document.createElement('td');
        td3.setAttribute('style','text-align:center');
        let spanAmount=document.createElement('span'); 
        spanAmount.innerHTML=expense['amount'];
        td3.appendChild(spanAmount);

        let td4=document.createElement('td');
        td4.setAttribute('style','text-align:center');
        let spanPrice=document.createElement('span'); 
        spanPrice.innerHTML=expense['price'];
        td4.appendChild(spanPrice);

        let td5=document.createElement('td'); 
        td5.setAttribute('style','text-align:center'); 
        let spanDate=document.createElement('span'); 
        spanDate.innerHTML=expense['date']; 
        td5.appendChild(spanDate);

        let td2=document.createElement('td');

        let editDeleteDiv=document.createElement('div');
        editDeleteDiv.setAttribute('class','editDeleteDiv');

        let editLink = document.createElement('button');  
        editLink.setAttribute('class','btn1');
        let i2 = document.createElement('i');
        i2.setAttribute('class','fa fa-edit');
        editLink.appendChild(i2);

        editLink.onclick=()=>{
            $Eid=expense['id']; 
            expenseController.edit(parent,$Eid,UserId,expenseController); 
        }
        //td2.appendChild(editLink); 


        let deleteLink = document.createElement('button'); 
        deleteLink.setAttribute('class','btn2');

        editDeleteDiv.appendChild(editLink);
        editDeleteDiv.appendChild(deleteLink);
        
        td2.appendChild(editDeleteDiv);

        let i1 = document.createElement('i');
        i1.setAttribute('class','fa fa-trash');
        deleteLink.appendChild(i1);

        deleteLink.addEventListener('click', () => {
            $Eid=expense['id'];
            expenseController.delete(parent,$Eid,expenseController,UserId);
        })

        //td2.appendChild(deleteLink); 
        tr.appendChild(td1); 
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td2); 
        table.appendChild(tr);
    });
    tbody.appendChild(table);
    parent.appendChild(maindiv);
    parent.appendChild(table);
}

function getAddExpense(parent,handler){
    let div = document.createElement('div');
    div.setAttribute('align','center');
    div.setAttribute('style','font: 14px sans-serif;');

    //Creation of Form Div
    let formDiv = document.createElement('div');
    formDiv.setAttribute('class', 'wrapper');

    //Creation of Item Name Label
    let itemNameDiv = document.createElement('div');
    itemNameDiv.setAttribute('class', 'form-group');

    let itemNameLabel = document.createElement('label');
    itemNameLabel.setAttribute('style', 'float: left;');
    itemNameLabel.innerText='Item Name:';

    let itemNameInput = document.createElement('input');
    itemNameInput.setAttribute('placeholder', 'Item Name');
    itemNameInput.setAttribute('type', 'text');
    itemNameInput.setAttribute('name','itemName');
    itemNameInput.setAttribute('class','form-control wrapper');

    let itemNameSpan = document.createElement('span');
    itemNameSpan.setAttribute('class', 'help-block');

    itemNameDiv.appendChild(itemNameLabel);
    itemNameDiv.appendChild(itemNameInput);
    itemNameDiv.appendChild(itemNameSpan);

    //Creation of Category Label
    let categoryDiv = document.createElement('div');
    categoryDiv.setAttribute('class', 'form-group');

    let categoryLabel = document.createElement('label');
    categoryLabel.setAttribute('style', 'float: left;');
    categoryLabel.innerText='Category:';

    let categoryInput = document.createElement('input');
    categoryInput.setAttribute('placeholder', 'Category');
    categoryInput.setAttribute('type', 'text');
    categoryInput.setAttribute('name','category');
    categoryInput.setAttribute('class','form-control wrapper');

    let categorySpan = document.createElement('span');
    categorySpan.setAttribute('class', 'help-block');

    categoryDiv.appendChild(categoryLabel);
    categoryDiv.appendChild(categoryInput);
    categoryDiv.appendChild(categorySpan);

    //Creation of Price Label
    let priceDiv = document.createElement('div');
    priceDiv.setAttribute('class', 'form-group');

    let priceLabel = document.createElement('label');
    priceLabel.setAttribute('style', 'float: left;');
    priceLabel.innerText='Price:';

    let priceInput = document.createElement('input');
    priceInput.setAttribute('placeholder', 'Price');
    priceInput.setAttribute('type', 'number');
    priceInput.setAttribute('name','price');
    priceInput.setAttribute('class','form-control wrapper');

    let priceSpan = document.createElement('span');
    priceSpan.setAttribute('class', 'help-block');

    priceDiv.appendChild(priceLabel);
    priceDiv.appendChild(priceInput);
    priceDiv.appendChild(priceSpan);

    //Creation of Amount Label
    let amountDiv = document.createElement('div');
    amountDiv.setAttribute('class', 'form-group');

    let amountLabel = document.createElement('label');
    amountLabel.setAttribute('style', 'float: left;');
    amountLabel.innerText='Amount:';

    let amountInput = document.createElement('input');
    amountInput.setAttribute('placeholder', 'Amount');
    amountInput.setAttribute('type', 'number');
    amountInput.setAttribute('name','amount');
    amountInput.setAttribute('class','form-control wrapper');

    let amountSpan = document.createElement('span');
    amountSpan.setAttribute('class', 'help-block');

    amountDiv.appendChild(amountLabel);
    amountDiv.appendChild(amountInput);
    amountDiv.appendChild(amountSpan);

    //Creation of Date Label
    let dateDiv = document.createElement('div');
    dateDiv.setAttribute('class', 'form-group');

    let dateLabel = document.createElement('label');
    dateLabel.setAttribute('style', 'float: left;');
    dateLabel.innerText='Date:';

    let dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'datetime-local');
    dateInput.setAttribute('class','form-control wrapper');

    let dateSpan = document.createElement('span');
    dateSpan.setAttribute('class', 'help-block');

    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(dateInput);
    dateDiv.appendChild(dateSpan);

    //Creation of Button
    let buttonsDiv = document.createElement('div');
    buttonsDiv.setAttribute('class', 'form-group');

    let addExpenseButton = document.createElement('button');
    addExpenseButton.textContent='Add Expense';
    addExpenseButton.setAttribute('class', 'AddExpenseBtn');

    let addExpenseSpan = document.createElement('span');
    addExpenseSpan.setAttribute('style', 'text-align: center');
    addExpenseSpan.setAttribute('class', 'help-block');

    let divButtons = document.createElement('div');
    divButtons.setAttribute('class', 'wrapper btn-toolba doubleButtons');

    divButtons.appendChild(addExpenseButton);

    buttonsDiv.appendChild(addExpenseSpan);
    buttonsDiv.appendChild(divButtons);

    addExpenseButton.addEventListener('click', async (event)=>{
        //Check if data is filled.
        let itemName = itemNameInput.value.trim();
        let category = categoryInput.value.trim();
        let price = priceInput.value.trim();
        let amount = amountInput.value.trim();
        let date = dateInput.value.trim();

        if(itemName.length == 0 || category.length == 0 || price.length==0 || amount.length==0 || date.length==0){
            if(itemName.length==0)
                itemNameSpan.innerText='Please Fill In The item Name';
            if(category.length==0)
                categorySpan.innerText='Please Fill In a category';
            if(price.length==0)
                priceSpan.innerText='Please Fill In The Price';
            if(amount.length==0)
                amountSpan.innerText='Please Fill In The Amount';
            if(date.length==0)
                dateSpan.innerText='Please Provide a Specific Date';
        }
        else{
            //itemName, categoryName,price, amount, date
            handler(itemName,category,price,amount,date);
        }
    });

    formDiv.appendChild(itemNameDiv);
    formDiv.appendChild(categoryDiv);
    formDiv.appendChild(priceDiv);
    formDiv.appendChild(amountDiv)
    formDiv.appendChild(dateDiv);
    formDiv.appendChild(buttonsDiv);

    div.appendChild(formDiv);
    //Append Elements to Main Div
    parent.appendChild(div);

}
//////////////////////////////////////////////////////////////////////////////////////////////////

function editExpenseForm(parent,handler){
    let div = document.createElement('div');
    div.setAttribute('align','center');
    div.setAttribute('style','font: 14px sans-serif;');

    //Creation of Form Div
    let formDiv = document.createElement('div');
    formDiv.setAttribute('class', 'wrapper');

    //Creation of Item Name Label
    let itemNameDiv = document.createElement('div');
    itemNameDiv.setAttribute('class', 'form-group');

    let itemNameLabel = document.createElement('label');
    itemNameLabel.setAttribute('style', 'float: left;');
    itemNameLabel.innerText='Item Name:';

    let itemNameInput = document.createElement('input');
    itemNameInput.setAttribute('placeholder', 'Item Name');
    itemNameInput.setAttribute('type', 'text');
    itemNameInput.setAttribute('name','itemName');
    itemNameInput.setAttribute('class','form-control wrapper');

    let itemNameSpan = document.createElement('span');
    itemNameSpan.setAttribute('class', 'help-block');

    itemNameDiv.appendChild(itemNameLabel);
    itemNameDiv.appendChild(itemNameInput);
    itemNameDiv.appendChild(itemNameSpan);

    //Creation of Category Label
    let categoryDiv = document.createElement('div');
    categoryDiv.setAttribute('class', 'form-group');

    let categoryLabel = document.createElement('label');
    categoryLabel.setAttribute('style', 'float: left;');
    categoryLabel.innerText='Category:';

    let categoryInput = document.createElement('input');
    categoryInput.setAttribute('placeholder', 'Category');
    categoryInput.setAttribute('type', 'text');
    categoryInput.setAttribute('name','category');
    categoryInput.setAttribute('class','form-control wrapper');

    let categorySpan = document.createElement('span');
    categorySpan.setAttribute('class', 'help-block');

    categoryDiv.appendChild(categoryLabel);
    categoryDiv.appendChild(categoryInput);
    categoryDiv.appendChild(categorySpan);

    //Creation of Price Label
    let priceDiv = document.createElement('div');
    priceDiv.setAttribute('class', 'form-group');

    let priceLabel = document.createElement('label');
    priceLabel.setAttribute('style', 'float: left;');
    priceLabel.innerText='Price:';

    let priceInput = document.createElement('input');
    priceInput.setAttribute('placeholder', 'Price');
    priceInput.setAttribute('type', 'number');
    priceInput.setAttribute('name','price');
    priceInput.setAttribute('class','form-control wrapper');

    let priceSpan = document.createElement('span');
    priceSpan.setAttribute('class', 'help-block');

    priceDiv.appendChild(priceLabel);
    priceDiv.appendChild(priceInput);
    priceDiv.appendChild(priceSpan);

    //Creation of Amount Label
    let amountDiv = document.createElement('div');
    amountDiv.setAttribute('class', 'form-group');

    let amountLabel = document.createElement('label');
    amountLabel.setAttribute('style', 'float: left;');
    amountLabel.innerText='Amount:';

    let amountInput = document.createElement('input');
    amountInput.setAttribute('placeholder', 'Amount');
    amountInput.setAttribute('type', 'number');
    amountInput.setAttribute('name','amount');
    amountInput.setAttribute('class','form-control wrapper');

    let amountSpan = document.createElement('span');
    amountSpan.setAttribute('class', 'help-block');

    amountDiv.appendChild(amountLabel);
    amountDiv.appendChild(amountInput);
    amountDiv.appendChild(amountSpan);

    //Creation of Button
    let buttonsDiv = document.createElement('div');
    buttonsDiv.setAttribute('class', 'form-group');

    let editExpenseButton = document.createElement('button');
    editExpenseButton.textContent='Update Expense';
    editExpenseButton.setAttribute('class', 'editExpenseButton');

    let editExpenseSpan = document.createElement('span');
    editExpenseSpan.setAttribute('style', 'text-align: center');
    editExpenseSpan.setAttribute('class', 'help-block');

    let divButtons = document.createElement('div');
    divButtons.setAttribute('class', 'wrapper btn-toolba doubleButtons');

    divButtons.appendChild(editExpenseButton);

    buttonsDiv.appendChild(editExpenseSpan);
    buttonsDiv.appendChild(divButtons);

    //Handle the edit form
    editExpenseButton.onclick=()=>{   
        handler(itemNameInput.value,categoryInput.value,amountInput.value,priceInput.value);
    }
    formDiv.appendChild(itemNameDiv);
    formDiv.appendChild(categoryDiv);
    formDiv.appendChild(priceDiv);
    formDiv.appendChild(amountDiv)
    //formDiv.appendChild(dateDiv);
    formDiv.appendChild(buttonsDiv);

    div.appendChild(formDiv);
    //Append Elements to Main Div
    parent.appendChild(div);

}
////////////////////////////////////////////////////////////////////////////////////////
function PieChartView(parent, allCategories) {
    let PieChartDiv = document.createElement('div');
    PieChartDiv.setAttribute('id', 'PieChartDiv');
    
    parent.appendChild(PieChartDiv);
    console.log("piecharview".PieChartDiv);
    CanvasJS.addColorSet("colorSet",
        [
            "#C0C0C0",
            "#808080",
            "#CD5C5C",
            "#C1C3D1",
            "#708090",
            "#f95d6a",
            "#ff7c43",
            "#ffa600"
        ]);

    let chart = new CanvasJS.Chart("PieChartDiv",
        {
            colorSet: "colorSet",
            theme: "light2",
            title: {
                text: "Categories Pie Chart:"
            },
            data: [
                {
                    type: "pie",
                    showInLegend: true,
                    toolTipContent: "{indexLabel} - {y} - #percent %",
                    legendText: "{indexLabel}",
                    dataPoints: allCategories
                }
            ]
    });

    chart.render();
}

function getCategoriesView(parent,categories,expenseController){

    let TableCatDiv=document.createElement('div');
    TableCatDiv.setAttribute('class','TableCatDiv'); 
    TableCatDiv.setAttribute('align','center');
        let tbody = document.createElement('tbody');
        tbody.setAttribute('class','table-hover');

        let addCatDiv=document.createElement('div'); 
        addCatDiv.setAttribute('class','addCatDiv');
        let addCatButton=document.createElement('button'); 
        addCatButton.setAttribute('class','addCatButton');
        addCatButton.textContent="Add Category"; 

        addCatButton.addEventListener('click',()=>{
            expenseController.addCategory(parent,addCatDiv,expenseController);
        }); 

        addCatDiv.appendChild(addCatButton);

        let table=document.createElement('table');
        table.setAttribute('class','table-fillcat');
        //Item Name:
        let th1=document.createElement('th'); 
        th1.textContent='Category Name';
        th1.setAttribute('class','theader');

        //Actions:
        /*let th2=document.createElement('th'); 
        th2.textContent='';
        th2.setAttribute('class','theader');*/

        
        table.appendChild(th1); //price header 
        //table.appendChild(th2); //actions header 

        
        categories.forEach((category) => { 
            //console.log("hello");
            let tr=document.createElement('tr'); 

            
            let td1=document.createElement('td');
            td1.setAttribute('style','text-align:center');
            let spanitemName=document.createElement('span'); 
            spanitemName.innerHTML=category['name'];
            td1.appendChild(spanitemName); 


            let td2=document.createElement('td');
            td2.setAttribute('class','tdCategory');
            td2.setAttribute('align','center');
            let deleteLink = document.createElement('button'); 
            deleteLink.setAttribute('class','btn2');
            td2.appendChild(deleteLink);

            let i1 = document.createElement('i');
            i1.setAttribute('class','fa fa-trash');
            deleteLink.appendChild(i1);

            deleteLink.addEventListener('click', () => {
                $Cid=category['id'];
                console.log($Cid);
                expenseController.deleteCategory(parent,$Cid,expenseController);
            });

            //td2.appendChild(deleteLink); 
            tr.appendChild(td1); 
            tr.appendChild(td2); 
            table.appendChild(tr);
        });
        tbody.appendChild(addCatDiv);
        tbody.appendChild(table);
        TableCatDiv.appendChild(tbody);
        parent.appendChild(TableCatDiv);

        //return TableCatDiv;  
}


function getAddCategory(addCategoryDiv,handler){
    let Catinput=document.createElement('input'); 
        Catinput.setAttribute('placeholder','Category Name:'); 
        Catinput.setAttribute('type','text');
        Catinput.setAttribute('name','category');
        Catinput.setAttribute('class','AddCatinput');
        let CatButton=document.createElement('button'); 
        CatButton.setAttribute('class','AddCatinput');
        CatButton.textContent="+";

        addCategoryDiv.appendChild(Catinput);
        addCategoryDiv.appendChild(CatButton);

        CatButton.addEventListener('click', ()=> {
            console.log('clicked');
            handler(Catinput.value); 
        });
}
