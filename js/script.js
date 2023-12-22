document.addEventListener("DOMContentLoaded", function () {
  let i = 0
  let texts = [
    "A cherished cultural gem of Indonesia,",
    "Embodies a rich tapestry of tradition and storytelling.",
    "Wayang performances showcase moral lessons, local wisdom, and spiritual insights",
    "Wayang is not merely a form of entertainment;",
    "It serves as a cultural bridge, ",
    "Transmitting values and preserving the nation's heritage. ",
  ]
  let speed = 65
  let currentTextIndex = 0
  let currentText = texts[currentTextIndex]
  let heroParagraph = document.getElementById("hero-paragraph-1")

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

document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.getElementById("nav-toggle");
  const navigationBar = document.getElementById("content-navigation");
  const switchBar = document.getElementById("switch-navigation");
  const widthLogo = document.getElementById("width-logo");

  navToggle.addEventListener("click", function() {
    // Toggle a CSS class to show/hide the navigation bar or use any other logic you prefer
    navigationBar.classList.toggle("show-navigation");
    switchBar.classList.toggle("show-navigation");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let i = 0
  let texts = [
    "Wayang is not only a performing art, but also a reflection of local Indonesian wisdom.",
    "The uniqueness of wayang lies in its ability to depict life,",
    "strengthen cultural identity,",
    "and embrace the diversity of Indonesian society.",
    "Through wayang performances,",
    "the younger generation can connect with the noble values of their ancestors",
    "And understand the cultural diversity that enriches the nation.",
  ]
  let speed = 65
  let currentTextIndex = 0
  let currentText = texts[currentTextIndex]
  let heroParagraph = document.getElementById("hero-paragraph-2")

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

document.addEventListener("DOMContentLoaded", function () {
  let i = 0
  let texts = [
    "Wayang, an iconic cultural heritage of Indonesia.",
    "Stands as a testament to the nation's rich artistic legacy. ",
    "Passed down through generations.",
    "Portraying moral values and local wisdom.",
    "Recognized by UNESCO as a Masterpiece of Oral and Intangible Heritage of Humanity.",
  ]
  let speed = 65
  let currentTextIndex = 0
  let currentText = texts[currentTextIndex]
  let heroParagraph = document.getElementById("hero-paragraph-3")

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

document.addEventListener("DOMContentLoaded", function () {
  let i = 0
  let texts = [
    "Wayang, the traditional Indonesian puppetry,",
    "serves as a powerful conduit for imparting moral values. ",
    "Wayang instills virtues such as courage, loyalty, and righteousness.",
    "The puppeteer, or dalang, skillfully weaves these moral narratives,",
    "Wayang, as a cultural treasure.",
  ]
  let speed = 65
  let currentTextIndex = 0
  let currentText = texts[currentTextIndex]
  let heroParagraph = document.getElementById("hero-paragraph-4")

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

document.addEventListener("DOMContentLoaded", function () {
  let i = 0
  let texts = [
    "Wayang embodies profound moral values.",
    "Wayang imparts courage, loyalty, and ethical living.",
    "The culture of wayang goes beyond being a performing art.",
    "it reflects the philosophy of life and moral concepts in Indonesian society.",
    "Each wayang character represents diverse values.",
    "Offering a rich perspective on the struggle between good and evil.",
  ]
  let speed = 65
  let currentTextIndex = 0
  let currentText = texts[currentTextIndex]
  let heroParagraph = document.getElementById("hero-paragraph-5")

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
