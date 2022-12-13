function changeClass() {
  if (document.getElementById("burger-id").className.match("burger active")) {
    document.getElementById("burger-id").className = document
      .getElementById("burger-id")
      .className.replace("burger active", "burger");
    document.getElementById("menu-nav-id").className = document
      .getElementById("menu-nav-id")
      .className.replace("menu-nav active", "menu-nav");
  } else {
    document.getElementById("burger-id").className += " active";
    document.getElementById("menu-nav-id").className += " active";
  }
}

window.onload = function () {
  document.getElementById("burger-id").addEventListener("click", changeClass);

  const anchors = document.querySelectorAll('a[href*="#"]'),
    animationTime = 600,
    framesCount = 20;

  anchors.forEach(function (item) {
    // каждому якорю присваиваем обработчик события
    item.addEventListener("click", function (e) {
      // убираем стандартное поведение
      e.preventDefault();

      // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
      let coordY = document
        .querySelector(item.getAttribute("href"))
        .getBoundingClientRect().top; // + window.pageYOffset;
      let scrollBy = coordY / framesCount;

      let target = coordY + window.pageYOffset;

      if (scrollBy >= 0 && scrollBy < 5) scrollBy = 5;
      if (scrollBy < 0 && scrollBy > -5) scrollBy = -5;

      // запускаем интервал, в котором
      let scroller = setInterval(function () {
        // считаем на сколько скроллить за 1 такт

        coordY = document
          .querySelector(item.getAttribute("href"))
          .getBoundingClientRect().top;

        // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
        // и дно страницы не достигнуто
        if (
          scrollBy > 0 &&
          scrollBy < coordY &&
          window.innerHeight + window.pageYOffset < document.body.offsetHeight
        ) {
          // то скроллим на к-во пикселей, которое соответствует одному такту
          window.scrollBy(0, scrollBy);
        } else if (
          scrollBy < 0 &&
          scrollBy > coordY &&
          window.pageYOffset - window.innerHeight > 0
        ) {
          // то скроллим на к-во пикселей, которое соответствует одному такту
          window.scrollBy(0, scrollBy);
        } else {
          // иначе добираемся до элемента и выходим из интервала
          window.scrollTo(0, target);
          clearInterval(scroller);
        }
        // время интервала равняется частному от времени анимации и к-ва кадров
      }, animationTime / framesCount);
    });
  });
};

// let anchors2 = document.getElementsByClassName("scroll-to");

// // собираем все якоря; устанавливаем время анимации и количество кадров

// const anchors = document.querySelectorAll('.scroll-to'),
//       animationTime = 300,
//       framesCount = 20;

//       console.log(anchors);

// console.log(anchors2);

var set_listener = function (item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener("click", function (e) {
    // убираем стандартное поведение
    e.preventDefault();

    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY =
      document.querySelector(item.getAttribute("href")).getBoundingClientRect()
        .top + window.pageYOffset;

    // запускаем интервал, в котором
    let scroller = setInterval(function () {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;

      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if (
        scrollBy > window.pageYOffset - coordY &&
        window.innerHeight + window.pageYOffset < document.body.offsetHeight
      ) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
      // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
};

// console.log(anchors2.length);

// for (let item of anchors2) {
//     console.log(item.id);
//  set_listener(item);
// }
