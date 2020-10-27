class ExpenseController{

    constructor (service){
        this.service=service;
    }


    //pass the id of the user to the view
    async getExpenses(parent,UserId,expenseController){
        let list=await this.service.get(url.concat('getExpenses&id='+UserId)); //list here to get the 
        clear();
        listExpenses(parent,list,expenseController,UserId); 
        
    }

    addExpense(parent,UserId,expenseController){
        getAddExpense(parent, async (itemName, categoryName,price, amount, date) => {

            let response=await this.service.post(url.concat('addExpense&id='+UserId),{itemName, categoryName,price, amount,date});
            
            if(response['success']==true){
                //clear();
                Refresh();
                this.getExpenses(parent,UserId,expenseController);
                //console.log('test');
               
            }


        });

        /*getRegisterForm(parent, async (email,password)=>{
            let response=await this.service.post(url.concat('postRegister'),{email,password}); 
    
            if(response['success']==true){
                Refresh();
            }
        });*/


    }
    
    async delete(parent,expenseid,expenseController,UserId){
        
        let response=await this.service.post(url.concat('removeExpense&id='+UserId+'&expenseid='+expenseid),{});  
        
        if(response['success']==true){
            //console.log("deleted");
            //Refresh();
             this.getExpenses(parent,UserId,expenseController);
             //console.log("deleted successfully");
        }
        else{
            //console.log("deletedmmm");
        }
        //console.log("DELETED SUCCEESSFULLY");
    }

    edit(parent,expenseid,UserId,expenseController){
        clear();
        editExpenseForm(parent, async (itemName,category,amount,price)=>{
            let response=await this.service.post(url.concat('editExpense&expenseid='+expenseid),{itemName,category,amount,price});
            if(response['success']==true){
                Refresh();
                this.getExpenses(parent,UserId,expenseController);
                
            }
        });

    }
    
    async getPieChart(parent){
        //console.log(parent);
        let getCategories=await this.service.get(url.concat('getPieChart'));
        let PieCategories=[]; 

        getCategories.forEach((category)=>{
            let object={ 
                'y': parseInt(category['count']),
                'indexLabel':category['name']
            }

            PieCategories.push(object);
        });

        //console.log(PieCategories);
        PieChartView(parent,PieCategories);
    }

    async getCategories(parent,expenseController){
       
        let categories=await this.service.get(url.concat('getCategories')); //return the array
            clear();
            getCategoriesView(parent,categories,expenseController);

    }

    async deleteCategory(parent,categoryid,expenseController){
        
        let response=await this.service.post(url.concat('removeCategory&id='+categoryid),{});  
        
        if(response['success']==true){
            clear();
             this.getCategories(parent,expenseController);  
             this.getPieChart(parent);
        }
    }

    addCategory(parent,addCategoryDiv,expenseController){
            getAddCategory(addCategoryDiv, async (category) => {
                let response=await this.service.post(url.concat('addCategory'),{'category':category});
                
                if(response['success']==true){
                   clear();
                   this.getCategories(parent,expenseController); 
                   this.getPieChart(parent);    
                }
            
        });
    }
}
