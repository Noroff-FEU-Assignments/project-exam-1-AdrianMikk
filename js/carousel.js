document.addEventListener("click", e => {
    let handle
    if (e.target.matches(".handle")) {
      handle = e.target
    } else {
      handle = e.target.closest(".handle")
    }
    if (handle != null) onHandleClick(handle)
  })
  
  const throttleProgressBar = throttle(() => {
    document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)
  }, 250)
  window.addEventListener("resize", throttleProgressBar)
  
  document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)
  
  function calculateProgressBar(progressBar) {
    progressBar.innerHTML = ""
    const slider = progressBar.closest(".row").querySelector(".slider")
    const itemCount = slider.children.length
    const itemsPerScreen = parseInt(
      getComputedStyle(slider).getPropertyValue("--items-per-screen")
    )
    let sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    )
    const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen)
  
    if (sliderIndex >= progressBarItemCount) {
      slider.style.setProperty("--slider-index", progressBarItemCount - 1)
      sliderIndex = progressBarItemCount - 1
    }
  
    for (let i = 0; i < progressBarItemCount; i++) {
      const barItem = document.createElement("div")
      barItem.classList.add("progress-item")
      if (i === sliderIndex) {
        barItem.classList.add("active")
      }
      progressBar.append(barItem)
    }
  }
  
  function onHandleClick(handle) {
    const progressBar = handle.closest(".row").querySelector(".progress-bar")
    const slider = handle.closest(".container").querySelector(".slider")
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    )
    const progressBarItemCount = progressBar.children.length
    if (handle.classList.contains("left-handle")) {
      if (sliderIndex - 1 < 0) {
        slider.style.setProperty("--slider-index", progressBarItemCount - 1)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[progressBarItemCount - 1].classList.add("active")
      } else {
        slider.style.setProperty("--slider-index", sliderIndex - 1)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[sliderIndex - 1].classList.add("active")
      }
    }
  
    if (handle.classList.contains("right-handle")) {
      if (sliderIndex + 1 >= progressBarItemCount) {
        slider.style.setProperty("--slider-index", 0)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[0].classList.add("active")
      } else {
        slider.style.setProperty("--slider-index", sliderIndex + 1)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[sliderIndex + 1].classList.add("active")
      }
    }
  }
  
  function throttle(cb, delay = 1000) {
    let shouldWait = false
    let waitingArgs
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false
      } else {
        cb(...waitingArgs)
        waitingArgs = null
        setTimeout(timeoutFunc, delay)
      }
    }
  
    return (...args) => {
      if (shouldWait) {
        waitingArgs = args
        return
      }
  
      cb(...args)
      shouldWait = true
      setTimeout(timeoutFunc, delay)
    }
  }




//   <div class="slider">
//   <img src="/images/raimond-klavins-KvVCDvD1_t0-unsplash 1-min.png">
//   <img src="/images/damiano-baschiera-hFXZ5cNfkOk-unsplash 2-min.png">
//   <img src="/images/kylefromthenorth-UrhglJ-2Q8M-unsplashcarousel-min.png">
//   <img src="/images/james-ting-6N2mSJsKTtA-unsplash 2-min.png">
//   <img src="/images/raimond-klavins-JqT2Wp5S0Dk-unsplash 2-min.png">
//   <img src="/images/jose-llamas--8Ir6uO4a_A-unsplash 2-min.png">
//   <img src="/images/cyril-mazarin-WSvth_lwCi0-unsplash 3-min.png">
//   <img src="/images/rolands-varsbergs-ePOH0oKeOjE-unsplash 2-min.png">
//   <img src="/images/timo-wagner-fT6-YkB0nfg-unsplash 2-min.png">
//   <img src="/images/guille-pozzi-g3esK1uXCjM-unsplash 2-min.png">
//   <img src="/images/chelsea-gates-0653_wY0nRc-unsplash 2-min.png">
//   <img src="/images/rosario-janza-69qT-N3L5sc-unsplash 2-min.png">
// </div>