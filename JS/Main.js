function techstackbuttonfunction() {
    document.querySelector(".toolsbutton").style.background="rgba(0,70,71,0.0)";
    document.querySelector(".techstackbutton").style.background="rgba(0,70,71,0.6)";
    document.getElementById("title1").innerHTML=("Java");
    document.getElementById("img1").innerHTML=(" <img src=\"../IMAGES/javaimage.png\" width=\"40px\" height=\"40px\">");
    document.getElementById("level1").innerHTML=("Advanced");
    document.getElementById("title2").innerHTML=("Python");
    document.getElementById("img2").innerHTML=(" <img src=\"../IMAGES/pythonimage.png\" width=\"40px\" height=\"40px\">");
    document.getElementById("level2").innerHTML=("Intermediate");
    document.getElementById("title3").innerHTML=("HTML");
    document.getElementById("img3").innerHTML=(" <img src=\"../IMAGES/htmlimage.png\" width=\"40px\" height=\"40px\">");
    document.getElementById("level3").innerHTML=("Intermediate");
    document.getElementById("title4").innerHTML=("CSS");
    document.getElementById("img4").innerHTML=(" <img src=\"../IMAGES/cssimage.png\" width=\"40px\" height=\"40px\">");
    document.getElementById("level4").innerHTML=("Intermediate");
    document.getElementById("title5").innerHTML=("JavaScript");
    document.getElementById("img5").innerHTML=(" <img src=\"../IMAGES/javascriptimage.png\" width=\"40px\" height=\"40px\">");
    document.getElementById("level5").innerHTML=("Intermediate");
    document.getElementById("title6").innerHTML=("React");
    document.getElementById("img6").innerHTML=(" <img src=\"../IMAGES/reactimage.png\" width=\"40px\" height=\"40px\">");
    document.getElementById("level6").innerHTML=("Intermediate");
    document.getElementById("title7").innerHTML=("React Native");
    document.getElementById("img7").innerHTML=(" <img src=\"../IMAGES/reactimage.png\" width=\"40px\" height=\"40px\">");
    document.getElementById("level7").innerHTML=("Beginner");
    document.getElementById("title8").innerHTML=("Tailwind");
    document.getElementById("img8").innerHTML=(" <img src=\"../IMAGES/tailwindimage.png\" width=\"40px\" height=\"40px\">");
    document.getElementById("level8").innerHTML=("Beginner");
    document.getElementById("title9").innerHTML=("C");
    document.getElementById("img9").innerHTML=(" <img src=\"../IMAGES/cimage.png\" width=\"40px\" height=\"40px\">");
    document.getElementById("level9").innerHTML=("Beginner");
    document.getElementById("title10").innerHTML=("Swift");
    document.getElementById("img10").innerHTML=(" <img src=\"../IMAGES/swiftimage.png\" width=\"40px\" height=\"40px\">");
    document.getElementById("level10").innerHTML=("Beginner");
    document.getElementById("box11").style.visibility="hidden";
    document.getElementById("box12").style.visibility="hidden";
}

function toolsbuttonfunction(){
    document.querySelector(".techstackbutton").style.background="rgba(0,70,71,0)"
    document.querySelector(".toolsbutton").style.background="rgba(0,70,71,0.6)";
    document.getElementById("box7").style.visibility="visible";
    document.getElementById("box8").style.visibility="visible";
    document.getElementById("box9").style.visibility="visible";
    document.getElementById("box10").style.visibility="visible";
    document.getElementById("box11").style.visibility="visible";
    document.getElementById("box12").style.visibility="visible";
    document.getElementById("title1").innerHTML=("Git");
    document.getElementById("img1").innerHTML=(" <img src=\"../IMAGES/gitimage.png\" width=\"40px\" height=\"40px\">");
    document.getElementById("level1").innerHTML=("Version Control");
    document.getElementById("title2").innerHTML=("Github");
    document.getElementById("img2").innerHTML=(" <img src=\"../IMAGES/Github%20Logo.PNG\" width=\"40px\" height=\"40px\">");
    document.getElementById("level2").innerHTML=("Git Hosting");
    document.getElementById("title3").innerHTML=("Webstorm")
    document.getElementById("img3").innerHTML=(" <img src=\"../IMAGES/webstormimage.png\" width=\"40px\" height=\"40px\">")
    document.getElementById("level3").innerHTML=("Developer IDE");
    document.getElementById("title4").innerHTML=("PyCharm")
    document.getElementById("img4").innerHTML=(" <img src=\"../IMAGES/pycharmimage.png\" width=\"40px\" height=\"40px\">")
    document.getElementById("level4").innerHTML=("Developer IDE");
    document.getElementById("title5").innerHTML=("IntelliJ")
    document.getElementById("img5").innerHTML=(" <img src=\"../IMAGES/intellijimage.png\" width=\"40px\" height=\"40px\">")
    document.getElementById("level5").innerHTML=("Developer IDE");
    document.getElementById("title6").innerHTML=("Android Studio")
    document.getElementById("img6").innerHTML=(" <img src=\"../IMAGES/androidstudioimage.png\" width=\"40px\" height=\"40px\">")
    document.getElementById("level6").innerHTML=("Developer IDE");
    document.getElementById("title7").innerHTML=("Slack")
    document.getElementById("img7").innerHTML=(" <img src=\"../IMAGES/slackimage.png\" width=\"40px\" height=\"40px\">")
    document.getElementById("level7").innerHTML=("Communications");
    document.getElementById("title8").innerHTML=("Photoshop")
    document.getElementById("img8").innerHTML=(" <img src=\"../IMAGES/photoshopimage.png\" width=\"40px\" height=\"40px\">")
    document.getElementById("level8").innerHTML=("Digital Media Editing");
    document.getElementById("title9").innerHTML=("Drop Box")
    document.getElementById("img9").innerHTML=(" <img src=\"../IMAGES/dropboximage.png\" width=\"40px\" height=\"40px\">")
    document.getElementById("level9").innerHTML=("File Sharing");
    document.getElementById("title10").innerHTML=("LinkedIn")
    document.getElementById("img10").innerHTML=(" <img src=\"../IMAGES/linkedinimage.png\" width=\"40px\" height=\"40px\">")
    document.getElementById("level10").innerHTML=("Networking");
    document.getElementById("title11").innerHTML=("Teams")
    document.getElementById("img11").innerHTML=(" <img src=\"../IMAGES/teamsimage.png\" width=\"40px\" height=\"40px\">")
    document.getElementById("level11").innerHTML=("Communications");
    document.getElementById("title12").innerHTML=("Notion")
    document.getElementById("img12").innerHTML=(" <img src=\"../IMAGES/notionimage.png\" width=\"40px\" height=\"40px\">")
    document.getElementById("level12").innerHTML=("Note Taking");


}
// function jobtitleanimation(){
//     var text = ["Software Engineer", "Web Developer", "Mobile Developer", "Game Developer", "Software Engineer", "Web Developer", "Mobile Developer", "Game Developer"];
//     var counter = 0;
//     var elem = document.getElementById("jobtitle");
//     if (!elem) {
//         console.error('Element with id "jobtitle" not found');
//         return;
//     }
//     var inst = setInterval(change, 2000);
//     function change(){
//         elem.innerHTML = text[counter];
//         counter++;
//         if(counter >= text.length){
//             counter = 0;
//         }
//     }
// }

function jobtitleanimation(){
    var text = ["Software Engineer", "Web Developer", "Mobile Developer", "Game Developer"];
    var counter = 0;
    var elem1 = document.getElementById("jobtitle");
    var elem2 = document.getElementById("jobtitle2");
    if (!elem1 && !elem2) {
        console.error('Elements with id "jobtitle" and "jobtitle2" not found');
        return;
    }
    var isDeleting = false;
    var currentText = '';
    var speed = 100; // Adjust typing speed
    var delay = 2000; // Adjust delay between texts

    function change(){
        var fullText = text[counter];
        if (isDeleting) {
            currentText = fullText.substring(0, currentText.length - 1); // Delete one character
        } else {
            currentText = fullText.substring(0, currentText.length + 1); // Add one character
        }

        if (elem1) {
            elem1.innerHTML = currentText;
        }
        if (elem2) {
            elem2.innerHTML = currentText;
        }

        // Adjust speed for typing and deleting
        if (!isDeleting && currentText === fullText) {
            isDeleting = true;
            setTimeout(change, delay); // Pause after finishing typing
        } else if (isDeleting && currentText === '') {
            isDeleting = false;
            counter = (counter + 1) % text.length; // Move to the next word
            setTimeout(change, 500); // Short pause before typing next word
        } else {
            setTimeout(change, speed); // Continue typing or deleting
        }
    }

    change(); // Start the animation
}



