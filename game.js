// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<initializing the variables>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var newscore = 0;
var rand;
var index = 0;

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< creating the mouse element and showing it randomly>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


function show() {
    if (index <= 37) {
        var old = getCookie("oldscore");
        document.getElementById('showscore').innerHTML = "high score : " + old;
        rand = Math.floor(Math.random() * 9);
        var box = document.getElementById(rand);
        var div = document.createElement("img");
        div.src = "dance.gif";
        // div.style.backgroundSize = "cover";
        // div.style.width = "230px";
        // div.style.height = "200px";
        div.className="rat";
        div.addEventListener('click', function () {
            newscore = newscore + 1;
            document.getElementById('score').innerHTML = "score :" + newscore;
        });
        document.getElementById(rand).appendChild(div);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<timeout function to relocate mouse position>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

        var timeout = setTimeout(() => {
            document.getElementById(rand).removeChild(div);
            show();
        }, 600);
        ++index;
    }
    else if (index > 7) {
        document.getElementById('msg').innerHTML = " your score is : " + newscore;
    }
    console.log("old " + old);

 // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< adding score to cookies>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    var oldscore = "high =" + oldscore;
    console.log("new " + newscore);
    if (newscore >= old) {
        check(newscore);
        document.cookie = "oldscore=" + newscore;
    }
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<dipalying the current score>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function check(newscore) {
    document.getElementById('showscore').innerHTML = "high score : " + newscore;
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<getting the high score from cookies>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<display msg on quit  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function quit() {
    document.querySelector('.container').style.backgroundImage = "url(' 1.webp' )";
    document.querySelector('.container').style.backgroundSize = "100% 100%";
    document.querySelector('.container').style.backgroundRepeat = "no-repeat";

    document.querySelector('.back').style.display = "none";
    document.querySelector('.quitmsg').innerHTML = "you quit <br> press the icon to start again!";
}