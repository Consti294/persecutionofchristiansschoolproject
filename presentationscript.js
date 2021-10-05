var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready( function(e){

    console.log('test')

    $(document).keypress( function(e){


        console.log(e.keyCode);

        if( e.keyCode === 39 || e.keyCode === 32 || e.keyCode === 38){

            NextSite();

        }

        if( e.keyCode === 37 || e.keyCode === 8 || e.keyCode === 40){

            LastSite();

        }

    } )


    $(document).mousedown(function (e) {

        console.log(e.which);

        switch(e.which) {

            case 1:
                NextSite();
                break;
            case 3:
                LastSite();
                break;
        }

    })

    $('.Section').each(function(i, obj) {
        if(i===0) return;
        
        console.log($(obj))

        $(obj).hide();

    });



})


var currentPage = 0;


function NextSite(){

    console.log("NextSite");

    var x = document.getElementsByClassName("Section");

    $(x[currentPage]).hide();

    
    if(x[currentPage+1] == null){

        window.location.href = "index.html";

    }

    currentPage++;

    $(x[currentPage]).show();

}

function LastSite(){

    console.log("LastSite");

    var x = document.getElementsByClassName("Section");

    $(x[currentPage]).hide();

    
    if(x[currentPage-1] == null){
        
        window.location.href = "index.html";

    }

    currentPage--;

    $(x[currentPage]).show();


}