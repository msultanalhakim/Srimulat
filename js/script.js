document.addEventListener("DOMContentLoaded", function () {
  function navbarSticky() {
    const navigationBar = document.getElementById("navigation-bar")
    const windowHeight = 840
    let isSticky = false

    function handleScroll() {
      const shouldBeSticky = window.scrollY > windowHeight
      if (shouldBeSticky !== isSticky) {
        isSticky = shouldBeSticky
        if (isSticky) {
          navigationBar.classList.add("sticky")
        } else {
          navigationBar.classList.add("slide-up")
          navigationBar.classList.remove("sticky")
          setTimeout(function () {
            navigationBar.classList.remove("slide-up")
          }, 500) // Adjust according to the animation duration
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
  }

  navbarSticky() // Calling navbarSticky directly without the need for an extra event listener
  window.addEventListener("scroll", navbarSticky()) // Adding a scroll event listener directly to navbarSticky function
})

document.addEventListener("DOMContentLoaded", function () {
  let i = 0
  let texts = [
    "Ini teks pertama jangan lupa diganti ya.",
    "Ini juga teksnya di array kedua",
    "Jangan lupa cek di script.js",
    "Ini ngulang terus jadi isi banyak juga boleh",
    "Semakin banyak semakin bagus",
    "Yah begitulah",
    "Mengulang lagi",
    "Saatnya balik ke awal",
  ]
  let speed = 65
  let currentTextIndex = 0
  let currentText = texts[currentTextIndex]
  let heroParagraph = document.getElementById("hero-paragraph")

  function typeWriter() {
    if (i < currentText.length) {
      heroParagraph.innerHTML += currentText.charAt(i)
      i++
      setTimeout(typeWriter, speed)
    } else {
      setTimeout(function () {
        heroParagraph.innerHTML = ""
        currentTextIndex++
        if (currentTextIndex >= texts.length) {
          currentTextIndex = 0 // Kembalikan ke indeks awal setelah mencapai akhir array
        }
        currentText = texts[currentTextIndex]
        i = 0
        typeWriter() // Mulai menampilkan teks baru
      }, 930)
    }
  }

  typeWriter()
})

function dropdownNav() {
  let currentClick = 0
  const navToggle = document.querySelector(".nav-user")
  const navList = document.getElementById("dropdown-content")

  navToggle.addEventListener("click", function () {
    if (currentClick == 0) {
      navList.classList.add("show")
    } else if (currentClick == 1) {
      navList.classList.remove("show")
      currentClick = 0
    }
  })
}
