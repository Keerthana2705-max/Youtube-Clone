function goTo(page){

    window.location.href = page;

}

function playVideo(videoURL, title){

    localStorage.setItem("videoURL", videoURL);
    localStorage.setItem("videoTitle", title);

    window.location.href = "video.html";

}