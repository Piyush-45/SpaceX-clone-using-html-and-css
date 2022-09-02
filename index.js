const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById("mobile-menu")
const falconCounter = document.querySelectorAll(".counter")

let scrollStarted = false;



btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage)

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu')
}

// ** function for scrollPage

function scrollPage(){
  const scrollPos = window.scrollY;

  if(scrollPos > 100 && !scrollStarted){
    countUp();
  }else if(scrollPos < 100 && scrollStarted){
    reset();
    scrollStarted = false;
  }
}

// ** function for falcon 9 stats

function countUp(){
  falconCounter.forEach((counter)=>{
    counter.innerText = '0'

    const updateCount = ()=>{
      const target = +counter.getAttribute("data-target")
      const count  = +counter.innerText
  
      const inc = target / 100
      
      // if counter is less than the target, add increment

      if(count < target){
        // round up and set the counter value
        counter.innerText  = `${Math.ceil(count + inc)}`

        setTimeout(updateCount, 75)
      }else{
        counter.innerText = target
      }
    
    }
  updateCount()
  })
  
}
countUp();

function reset(){
  falconCounter.forEach((counter)=> (counter.innerHTML = "0"))
}


