let user = document.querySelector("#user")
let next = document.querySelector("#btn")
let data = [];
let currentIndex = 0; 
fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=> res.json())
.then((res)=>{  data = res;  

})
.catch((err)=>{
    console.log(err);
})

next.addEventListener("click",function(){

     if( currentIndex < data.length ){
        user.innerHTML = `
        ${data[currentIndex].name }
        `;  
        currentIndex++;
     }else{
        user.textContent = "No more users."; 
     }

});

   

