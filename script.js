const Getnew = ()=>{
       fetch("https://dog.ceo/api/breeds/image/random",{    //I'm fetching the API through get method
        method:"GET"
       })
       .then((res)=>res.json())                             // The response is coverted into JSON
       .then((data)=>{
           let Display = document.querySelector(".image")   //The obtained response has a Url which is placed into my img bar
           Display.setAttribute("src",data.message)
       }
        
       )
       .catch((error)=>{console.log(error)})                //Consoling th error for error-handling


    //    .then((data)=>console.log(data.message))  //this is for checking that i'm getting the correct response
       
}


Getnew()