class Service{
    async post(url, body){
        
        //console.log(url); 
        console.log(body);
        let jsonBody=JSON.stringify(body); 
        //console.log(jsonBody);

        let request=await fetch(url, {
            method: 'POST', 
            body: jsonBody,
            headers:{
                 'Content-Type': 'application/json; charset=UTF-8'

            }
        }); 
        return request.json();
    }
    async get(url){
        console.log(url);
        let request=await fetch(url,{
            method:'GET',
            headers:{
                'Content-Type':'application/json; charset=UTF-8'
            }
        }); 
        return request.json();
    }
    
}