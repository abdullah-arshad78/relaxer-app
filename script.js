const container = document.getElementById('container');
const text = document.getElementById('text');
const starter = document.getElementById('starter');
const stopper = document.getElementById('stopper');
const pointerContainer = document.querySelector(".pointer-container")




const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

  
  // clearAll()

breathAnimation();
breathInterval()

function breathAnimation(){
  text.innerHTML="Breathe In"
  container.className = "container grow"
 breathInOut()
}

function breathInOut(){ 
  setTimeout(()=>{
    text.innerHTML = "Hold"

    setTimeout(()=>{
      text.innerHTML = "Breathe Out"
      container.className = "container shrink"
    },holdTime)
  },breatheTime)
}
function breathInterval(){
  setInterval( breathAnimation, totalTime);
}

// function clearAll(){
//   text.innerHTML = "Relaxer";
//   container.className = "container"
// clearInterval(breathInterval)
// clearInterval(breathInOut)
// pointerContainer.className = "pointer-container stop"
// }



// starter.addEventListener("click",()=>{
//   breathAnimation()
//  breathInterval()
//  pointerContainer.classList.remove("stop");
//  starter.style.display = "none";
//  stopper.style.display = "block"
 
  
// })

// stopper.addEventListener("click",()=>{
//   clearAll()
//   stopper.style.display = "none";
//   starter.style.display="block"
// })



