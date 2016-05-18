var main = function () {
    "use strict";
    var addComment = function () {
        var $new_comment;
        if ($(".comment-input input").val() !== "") {
        var $new_comment = $("<p>").text($(".comment-input input").val());
        $new_comment.hide();
        $(".comments").append($new_comment);
        $new_comment.fadeIn();
        $(".comment-input input").val("");
        }
        else {
            window.alert("Введите данные!")
        }
    }
    $(".comment-input button").on("click", function(event) {
        addComment();
        
    });  
    $(".comment-input input").on("keypress", function(event) {
        
        if(event.keyCode === 13) {
         addComment();
        }
    }); 
    
};

var viewInfo = function () { 
    "use strict";
    var $info = $("<p class=\"info\">Hello. You can write a comment!</p>").hide();
    var $info2 = $("<p class=\"info\">If you want to do..</p>").hide();
    $(".comment-input").append($info);
    $info.fadeIn(1000, function () {
	$(".comment-input").append($info2);
    $info2.slideDown(2000);
	$(".info").fadeOut(4000, function () {
	$(".info").remove();	
	});
	});
	
    
};

var tabs = function () {
    "use strict";
    var tab;
    $(".tabs a span").toArray().forEach(function (element) {
        $(element).on("click", function () {
            $(".tabs a span").removeClass("active");
            $(element).addClass("active");
            $("main .content").empty();
            return false;
        });
    });
};
$(document).ready(tabs);
$(document).ready(main);
$(document).ready(viewInfo);