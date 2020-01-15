var delay = 500;
$(document).ready(function(){
    function animateProgress () {
        if($('.progress').scroll(400)){
            $(".progress-bar").each(function(i) {
                $(this).delay(delay * i).animate({
                  width: $(this).attr('aria-valuenow') + '%'
                }, delay);
              });
        } else {
            $(".progress-bar").each(function(i) {
                $(this).delay(delay * i).animate({
                  width: $(this).attr('aria-valuemin') + '%'
                }, 1000);
              });
        }   
    }
    animateProgress()
})
