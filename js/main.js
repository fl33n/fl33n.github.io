window.addEventListener("load", (event) => {
  const header = document.querySelector('.navbar')
  header.classList.add('hidden')
});

document.addEventListener('DOMContentLoaded', () => { // DOM готов к взаимодейтсвию

  const onScrollHeader = () => { // объявляем основную функцию onScrollHeader

    const header = document.querySelector('.navbar') // находим header и записываем в константу

    let currentScroll // на сколько прокручена страница сейчас (пока нет значения)

    window.addEventListener('scroll', () => { // при прокрутке страницы

      currentScroll = window.pageYOffset // узнаем на сколько прокрутили страницу
	  
      if (currentScroll > 250) { // если прокручиваем страницу вниз и header не скрыт
        header.classList.remove('hidden') // то скрываем header
      }
      if (currentScroll < 250) { // если прокручиваем страницу вверх и header скрыт
        header.classList.add('hidden') // то отображаем header
      }

      prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент

    })

  }

  onScrollHeader() // вызываем основную функцию onScrollHeader

});
