function openWork(event, title) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i=0; i < tabcontent.length; i++) {
        tabcontent[i].style.display="none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i=0; i<tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(title).style.display = "block";
    event.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

function mailFormHandler() {
    subject = document.getElementById('subject').value;
    message = document.getElementById('msg').value;

    window.open(`mailto:drewjspeed@gmail.com?subject=${subject}&body=${message}`);
}

