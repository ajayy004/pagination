$(document).ready(function(){
 
 //Pagination update on scroll function
  $(window).scroll(function() {
  var windscroll = $(window).scrollTop();
      if (windscroll >= 500) {
          $('.main section').each(function(i) {
          if ($(this).position().top <= windscroll) {
              $('.main section.active').removeClass('active');
              $('.main section').eq(i).addClass('active');
              $('.custom li.active').removeClass('active');
              $('.custom li').eq(i).addClass('active');
          }
          });
      }
  }).scroll();


  var j = 1;
  var windowFoldHeight = $(window).height() ;
  $('section').css("height",windowFoldHeight+"px");

  // adding data index to each div
  $("section").each(function(){
    $(this).attr("data-index", j);
    ++j;
  })

  // creating basic structure for pagination
  $("body").append( "<ul class=\"custom\"></ul>" );
  for (var i = 0; i < $('section').length; i++) {
    $("ul.custom").append("<li><a data-index='"+(i+1)+"' href='#" + (i+1) + "'></a></li>");
  };
  $("ul.custom li:nth-child(1)").addClass("active");
  

  // onclick event to scroll at particular div
  $("ul li a").click(function(){
        var dataIndex = $(this).attr('data-index');
         var $index = $('section[data-index="' + dataIndex + '"]');
    $('body').animate({
      scrollTop: $index.offset().top
    })
  });

});
