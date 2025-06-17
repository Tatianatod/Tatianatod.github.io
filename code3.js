function showProgress(points) {
    let maxPoints = 400;
    let percent = Math.min((points / maxPoints) * 100, 100);

    document.getElementById("progress_bar").style.width = percent + "%";
    document.getElementById("slider").style.left = percent + "%";

    let youAreHere = document.getElementById("you_are_here");
    if (points >= 200 && points < 300) {
        youAreHere.style.display = "inline";
    } else {
        youAreHere.style.display = "none";
    }   
}
