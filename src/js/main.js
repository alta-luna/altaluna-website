const $ = require('jquery')

window.onscroll = () => {
  if (window.pageYOffset > 100) {
    $('.header_content').addClass('scrolled')
  } else {
    $('.header_content').removeClass('scrolled')
  }
}

$(window).on('load', () => {
  $('a[href^="#"].scrollable').on('click', function handleClick(event) {
    event.preventDefault()

    $('.header_content li a').removeClass('active')
    $(this).addClass('active')
    $('.hamburger').trigger('click')

    const href = $.attr(this, 'href')
    $('html, body').animate({ scrollTop: $(href).offset().top - 40 }, 800)
  })
})

$('.carousel').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        arrows: false,
      },
    },
  ],
})
