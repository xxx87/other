var leftOffset = 0,
    topOffset = 0,
    interval = 100,
    clickCount = 1;

var moveHeading = function () {
    $("#heading").offset({ left: leftOffset, top: topOffset });
    leftOffset < 200 && topOffset === 0 ? leftOffset++ : '';
    leftOffset === 200 && topOffset < 200 ? topOffset++ : '';
    topOffset === 200 && leftOffset !== 0 ? leftOffset-- : '';
    topOffset !== 0 && leftOffset === 0 ? topOffset-- : '';
};
    var timeId = setInterval(moveHeading, interval);

$("#heading").click(function(event){
    clearInterval(timeId);
    interval -= 15;
    timeId = setInterval(moveHeading, interval);

    $("#heading").text(clickCount);
    clickCount++;

    if(clickCount > 6) {
        $("#heading").text('Вы победили! :)');
        clearInterval(timeId);
    }
});
