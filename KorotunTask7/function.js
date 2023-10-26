$(function(){
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 2000,
    touchMove: true,
    dots: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          draggable: false,
        }
      }
    ]
  });
});

$('.multiple-items').slick('slickAdd','<div><img src="images/image-1.jpg" alt="picture 1"></div>');
$('.multiple-items').slick('slickAdd','<div><img src="images/image-2.jpg" alt="picture 2"></div>');
$('.multiple-items').slick('slickAdd','<div><img src="images/image-3.jpg" alt="picture 3"></div>');
$('.multiple-items').slick('slickAdd','<div><img src="images/image-4.jpg" alt="picture 4"></div>');
$('.multiple-items').slick('slickAdd','<div><img src="images/image-5.jpg" alt="picture 5"></div>');
$('.multiple-items').slick('slickAdd','<div><img src="images/image-6.jpg" alt="picture 6"></div>');
$('.multiple-items').slick('slickAdd','<div><img src="images/image-7.jpg" alt="picture 7"></div>');
$('.multiple-items').slick('slickAdd','<div><img src="images/image-8.jpg" alt="picture 8"></div>');
