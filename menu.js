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

  const anchors = document.querySelectorAll('a[href*="#"]');
   
  anchors.forEach(function (item) {
    // каждому якорю присваиваем обработчик события
    item.addEventListener("click", function (e) {
      // убираем стандартное поведение
      e.preventDefault();

      // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
      let coordY = document
        .querySelector(item.getAttribute("href"))
        .getBoundingClientRect().top + window.pageYOffset -80;

        window.scrollTo({
          top: coordY,
          behavior: "smooth"
      });


    });
  });
};


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

console.log(' исправлена прокрутка по якорям \n\r',
  '[ x] вёрстка валидная +10\n\r',
  '[ x] вёрстка семантическая +20\n\r',
  '[ x] для оформления СV используются css-стили +10\n\r',
  '[ x] контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10\n\r',
  '[ x] вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10\n\r',
  '[ x] есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. Внешний вид адаптивного меню можно скопировать с макета музея +10\n\r',
  '[ x] на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10\n\r',
  '[ x] контакты для связи и перечень навыков оформлены в виде списка ul > li +10\n\r',
  '[ x] CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10\n\r',
  '[ x] CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js +10\n\r',
  ' CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10\n\r',
  '[ x] CV выполнено на английском языке +10\n\r',
  '[ x] выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10\n\r',
  '[ x] есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке (например, в документе Google Docs). +10\n\r',
  '[ x] дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10)')
