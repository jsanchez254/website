var acordion = document.getElementsByClassName("content");
var contentContainer = document.getElementsByClassName("content-container");
var i;
var textL = "Less Info " + "&#x25BD";
var textM  = "More Info " + "&#x25FF";
           
for(i = 0; i < acordion.length; i++){
    acordion[i].addEventListener("click", function(){
    var panel = this.nextElementSibling;
                    
    if(panel.style.display === "block"){
        panel.style.display = "none";
        this.innerHTML = textM;
    }

    else{
        panel.style.display = "block";
        this.innerHTML = textL;
    }

    });
}

