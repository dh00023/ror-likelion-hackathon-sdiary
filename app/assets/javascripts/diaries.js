function reset(){
    $(".head, .arm, .arm2, .leg, .leg2, .foot, .foot2, .wrist, .hip, .back, .core, .belt, .shoulder, .shoulder2, .core").css("background-color", "#FFE4C4")
    $(".hair").css("background-color", "black");
    $(".body2, .body3").css("border-color", "transparent transparent #FFE4C4 transparent");
    $(".hand, .hand2").css("border", "13px solid #FFE4C4");
}

$("#diary_category_head").click(function(){
    reset();
    $(".head").css("background-color", "#fa1634");
});

$("#diary_category_arm_left").click(function(){
    reset();
    $(".arm.right").css("background-color", "#fa1634");
    $(".arm2.left").css("background-color", "#fa1634");
});

$("#diary_category_arm_right").click(function(){
    reset();
    $(".arm.left").css("background-color", "#fa1634");
    $(".arm2.right").css("background-color", "#fa1634");
});

$("#diary_category_hand_left").click(function(){
    reset();
    $(".hand.right").css("border", "13px solid #fa1634");
    $(".hand2.left").css("border", "13px solid #fa1634");
});

$("#diary_category_hand_right").click(function(){
    reset();
    $(".hand.left").css("border", "13px solid #fa1634");
    $(".hand2.right").css("border", "13px solid #fa1634");
});

$("#diary_category_leg_left").click(function(){
    reset();
    $(".leg.right").css("background-color", "#fa1634");
    $(".leg2.left").css("background-color", "#fa1634");
});

$("#diary_category_leg_right").click(function(){
    reset();
    $(".leg.left").css("background-color", "#fa1634");
    $(".leg2.right").css("background-color", "#fa1634");
});

$("#diary_category_foot_left").click(function(){
    reset();
    $(".foot.right").css("background-color", "#fa1634");
    $(".foot2.left").css("background-color", "#fa1634");
});

$("#diary_category_foot_right").click(function(){
    reset();
    $(".foot.left").css("background-color", "#fa1634");
    $(".foot2.right").css("background-color", "#fa1634");
});


$("#diary_category_core").click(function(){
    reset();
    $(".core").css("background-color", "#fa1634");
});

$("#diary_category_hip").click(function(){
    reset();
    $(".hip").css("background-color", "#fa1634");
});

    // var suit_color = $('.suit_color');

$("#diary_category_body").click(function(){
	reset();
    $(".body2").css("border-color", "transparent transparent #fa1634 transparent");
});

$("#diary_category_back").click(function(){
	reset();
    $(".body3").css("border-color", "transparent transparent #fa1634 transparent");
	// $('div.hair').append('<style type="text/css"> .emmet .body{border-color:transparent transparent #fa1634 transparent;} </style>');
});

$("#diary_category_core").click(function(){
	reset();
    $(".core").css("background-color", "#fa1634");
});

$("#diary_category_waist").click(function(){
	reset();
    $(".belt").css("background-color", "#fa1634");
});

$("#diary_category_shoulder_left").click(function(){
	reset();
    $(".shoulder.right").css("background-color", "#fa1634");
    $(".shoulder2.left").css("background-color", "#fa1634");
});

$("#diary_category_shoulder_right").click(function(){
	reset();
    $(".shoulder.left").css("background-color", "#fa1634");
    $(".shoulder2.right").css("background-color", "#fa1634");
});


$("#diary_category_hair").click(function(){
	reset();
    $(".hair").css("background-color", "#fa1634");
});