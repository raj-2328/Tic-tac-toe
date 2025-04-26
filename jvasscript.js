var boxer=document.querySelectorAll('.box1');
console.log(boxer);
 

boxer.forEach((box1)=>{
  box1.addEventListener("click",()=>{
    box1.innerText="x"
  });

});

