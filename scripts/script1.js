document.addEventListener("DOMContentLoaded", function () {
  let noButton = document.getElementById("no-btn")
  let yesButton = document.getElementById("yes-btn")
  let errorMessage = document.getElementById("error-message")
  let avatar = document.querySelector(".avatar")

  let noClicked = 0
  let yesClicked = 0

  noButton.addEventListener("click", function () {
    if (noClicked === 0) {
      updateErrorMessage("Oops! You pressed the wrong button!", errorMessage)
      changeWithFade(avatar, "resources/question mark.png")
    }

    if (noClicked >= 1 && noClicked < 7) {
      teleportButton(noButton)
      updateErrorMessage("I don't think you want to do this!", errorMessage)
      changeWithFade(avatar, "resources/argh.png")
    }

    if (noClicked === 7) {
      resetButtonPosition(noButton);
      updateErrorMessage("Ok... try that again", errorMessage)
      noButton.textContent = "Yes 💕"
    }

    if(noClicked >= 8) {
      noButton.remove()
      createHearts()
      updateErrorMessage("I LOVE YOU SO MUCH!!!!", errorMessage);
      changeWithFade(avatar, "resources/heart eyes.png")
      yesClicked++
  }
    noClicked++
  });

  yesButton.addEventListener("click", function () {
    if(yesClicked === 0) {
      resetButtonPosition(noButton)
      createHearts()
      updateErrorMessage("I LOVE YOU SO MUCH!!!!", errorMessage)
      changeWithFade(avatar, "resources/heart eyes.png")
    }

    if(yesClicked === 1) {
      createHearts()
      updateErrorMessage("I MISS YOU !!!", errorMessage)
      changeWithFade(avatar, "resources/i miss you.png")
    }

    if(yesClicked === 2) {
      createHearts()
      updateErrorMessage("YOU MAKE ME THE HAPPIEST!!!", errorMessage)
      changeWithFade(avatar, "resources/love you the most.png")
    }

    if(yesClicked > 2) {
      createHearts()
      updateErrorMessage("CAN'T WAIT TO SEE YOU AGAIN!!!", errorMessage)
      changeWithFade(avatar, "resources/i love you infinity.png")
    }

    yesClicked++
  });
});

function createHearts() {
  const container = document.getElementById("hearts-container");

  for (let i = 0; i < 100; i++) {
    let heart = document.createElement("div")
    heart.classList.add("heart")
    heart.style.left = Math.random() * 100 + "vw"
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"
    container.appendChild(heart)

    setTimeout(() => {
      heart.remove()
    }, 3000)
  }
}

function changeWithFade(object, source) {
  object.classList.add("fade-out")

  setTimeout(function () {
    object.src = source
    object.classList.remove("fade-out")

    object.style.animation = "fadeIn 0.5s ease-in-out"
    object.style.opacity = 1

    setTimeout(function () {
      object.style.animation = ""
    }, 200)
  }, 200)
}


function teleportButton(noButton) {
  const randomX =
    50 + Math.random() * (window.innerWidth - noButton.offsetWidth - 500)
  const randomY =
    Math.random() * (window.innerHeight - noButton.offsetHeight - 200) 

  noButton.style.position = "absolute"
  noButton.style.left = randomX + "px"
  noButton.style.top = randomY + "px"
}


function resetButtonPosition(noButton) {
  noButton.style.position = "relative"
  noButton.style.left = "auto"
  noButton.style.top = "auto"
}


function updateErrorMessage(message, errorMessage) {
  errorMessage.classList.remove("change")
  errorMessage.classList.add("show")

  errorMessage.textContent = message

  setTimeout(function() {
    errorMessage.classList.add("change")
  }, 100)
}
