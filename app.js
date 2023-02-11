const toggle=document.querySelector('.togglebtn')
const tgl=document.querySelector('.Calculator')
const btns = document.querySelectorAll('.btn')
const output = document.querySelector('.output')
toggle.addEventListener('click',()=>{
    tgl.classList.toggle("active")

})


btns.forEach(btn =>{
        
        btn.addEventListener('click',() =>{
            
            
            if(btn.id=='c'){
                output.innerText=''
                output2=''
                
            }
            else if(btn.id=='del'){
                output.innerText = string.substr(0, string.length - 1);
                let output2 =output.innerText.toString()
            }
            else if(output.innerText!='' && btn.id=='='){
                output.innerText=eval(output.innerText)
            }
            else if(output.innerText=='' && btn.id=='='){
                output.innerText='Error!'
            }
            else {
                output.innerText += btn.id
              }
        })
})

// buttons.forEach((item) => {
//     item.onclick = () => {
//       if (item.id == "clear") {
//         display.innerText = "";
//       } else if (item.id == "backspace") {
//         let string = display.innerText.toString();
//         display.innerText = string.substr(0, string.length - 1);
//       } else if (display.innerText != "" && item.id == "equal") {
//         display.innerText = eval(display.innerText);
//       } else if (display.innerText == "" && item.id == "equal") {
//         display.innerText = "Empty!";
//         setTimeout(() => (display.innerText = ""), 2000);
//       } else {
//         display.innerText += item.id;
//       }
//     };
//   });