function showProgress(points) {
    let progressBar = document.getElementById("progress_bar");
    let percent = 0;
    
    if (points <= 200) {
        percent = (points / 200) * 50;
    } else if (points <= 300) {
        percent = 50 + ((points - 200) / 100) * 25;
    } else if (points <= 400) {
        percent = 75 + ((points - 300) / 100) * 25;
    } else {
        percent = 100;
    }
    progressBar.style.width = percent + "%";


    let youAreHere = document.getElementById("you_are_here");
    if (points >= 200 && points < 300) {
        youAreHere.style.display = "inline";
    } else {
        youAreHere.style.display = "none";
    }   
}
