
let record = $('.nav .active').get(0);
$(record).css("background-color","black")
let navCell = $('.nav .mya');
$(navCell).click(function () {    
    if(this!=record)
    {
    $(record).css("background-color","skyblue") ; 
    $(this).css("background-color","black");
    record = this;  
    }
    })

    $(navCell).mouseenter(function () { 
        
        $(this).css({"background-color":"black" , "color":"white"});
        
 
    });

    $(navCell).mouseleave(function () { 
        if(this!=record)
        {
            $(this).css({"background-color":"skyblue" , "color":"white"});
        }
    });
