$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });

    
    //toast 
    $('#submit').on('click', function (e) {
        e.preventDefault();
        if ($('.form-check-input').is(':checked') == false) { 
            $('#toast').toast({ autohide: false }).toast('show'); 
        }
    });

    //select all
    const colors = ["black", "green", "blue"];
    $('#selectAll').on('click', function (e) {
        colors.forEach(color => {
            $('#' + color).prop( "checked", true )
            $('#' + color + 'Img').css('visibility', 'visible')
            $('#' + color + 'Img').removeClass().addClass('animate__animated animate__bounceInDown')
            
        })
    })

    //deselect all
    $('#deselectAll').on('click', function (e) {
        colors.forEach(color => {
            $('#' + color).prop( "checked", false )
            $('#' + color + 'Img').css('visibility', 'visable')
            $('#' + color + 'Img').removeClass().addClass('animate__animated animate__bounceOutUp')
            
        })
    })
    //mouseOver
    colors.forEach(color => {
        $("#" + color).on("mouseover", function () {
            $("h1").css("color", color);
        });
        $("#" + color).on("mouseout", function () {
            $("h1").css("color", "grey");
        });
       
    })

    //random h1 animation
    var animations = ['bounce','flash','pulse','rubberBand','shakeX','shakeY','headShake','swing','tada','wobble','jello','hearBeat'];
    $('#hp').addClass('animate__animated animate__'+ animations[Math.floor(Math.random() * animations.length)]);



    // uncheck all checkboxes (FireFox) 
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

      // event listener for check/uncheck
      $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
      
    });
});