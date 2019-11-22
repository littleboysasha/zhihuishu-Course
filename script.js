function autoPlay() {
    if ($('.line1gq').hasClass('active')) {
        $('.line1bq').click();
    }
    if (!$('.volumeBox').hasClass('volumeNone')) {
        $('.volumeIcon').click();
    }
    var play = document.getElementById("playButton");
    var speed = document.getElementsByClassName("speedTab15")[0];
    var passTime = document.getElementsByClassName("passTime")[0].style.width;
    console.log("Process now:" + passTime);
    speed.click();
    play.click();
}
autoPlay()
setInterval(function () {
    var isNest = document.getElementsByClassName("passTime")[0].style.width;
    var cancle = document.getElementsByClassName("popbtn_cancel");
    if (cancle.length > 0) {
        console.log("Close window");
        document.getElementById('tmDialog_iframe').contentWindow.document.getElementsByTagName("label")[0].click();
        cancle[0].click();
}
    console.log("Now£º" + isNest);
    if (isNest === '100%') {
    var nextBtn = document.getElementById("nextBtn");
    nextBtn.click();
    setTimeout(function () {
    var speed = document.getElementsByClassName("speedTab15")[0];
    speed.click();
    }, 2000)
}

    if ($('.line1gq').hasClass('active')) {
        $('.line1bq').click();
    }
    if (!$('.volumeBox').hasClass('volumeNone')) {
        $('.volumeIcon').click();
    }
    var speed = document.getElementsByClassName("speedTab15")[0];
    speed.click();
}, 5000);