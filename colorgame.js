var numofsquares = 6;
var squares = document.getElementsByClassName("square");
var message = document.getElementById("message");
var colordisplay = document.getElementById("colordisplay")
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

// colors become the array of different colors
var colors = diffcolor(numofsquares);

// pickedcolor is the color that user will guess
var pickedcolor = pickcolor();


for(var i=0; i<squares.length; i++){
    // cloring each sq.
    squares[i].style.backgroundColor = colors[i];

     squares[i].addEventListener("click", function(){
         var clickedcolor = this.style.backgroundColor;
        if( clickedcolor == pickedcolor){
            //changing the text displayed
        message.textContent = ("Correct");
         reset.textContent = ("Play Again");
         // change the background of every sq. after a win
         changecolor(clickedcolor);
        }
        else{
            // if wrong guess
        message.textContent = ("Try Again") ;
        this.style.backgroundColor = ("#232323");
        }    
     });
}


    easy.addEventListener("click", function(){
        numofsquares = 3;
         easy.classList.add("selected");
         hard.classList.remove("selected");
         colors = diffcolor(numofsquares);
         pickedcolor = pickcolor();
         reset.textContent = "New Colors";
         h1.style.backgroundColor = "steelblue";
         message.textContent = " ";
         for(var i=0; i<squares.length; i++){
             if(colors[i]){
                squares[i].style.backgroundColor = colors[i];
             }
             else{
                squares[i].style.display = "none"; 
             }
         };
    });

    hard.addEventListener("click", function(){
        numofsquares = 6;
        hard.classList.add("selected");
        easy.classList.remove("selected");
        reset.textContent = "New Colors";
        message.textContent = " ";
        colors = diffcolor(numofsquares);
        pickedcolor = pickcolor();
        h1.style.backgroundColor = "steelblue";
        reset.textContent = "New Colors";
        message.textContent = " ";
        for(var i=0; i<squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block"; 
        }
   });

    

colordisplay.textContent = (pickedcolor);

// change the background color of every sq.
function changecolor(color){
      for(var i=0; i<squares.length; i++){
          squares[i].style.backgroundColor = color;
      }
    h1.style.backgroundColor = color;
};

reset.addEventListener("click", function(){
    colors = diffcolor(numofsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = (pickedcolor);
    h1.style.backgroundColor = "steelblue";
    reset.textContent = "New colors";
    message.textContent = (" ");
    for(var i=0; i<colors.length; i++){
        squares[i].style.backgroundColor = colors[i];
    };
})

// make an array with random colors
function diffcolor(num){
      var arr = [];
      for(i=0; i<num; i++){
          arr[i]=newcolor();
      }
      return arr;
};

// a random color from the array that user has to look for
function pickcolor(){
      var a = Math.floor(Math.random() * colors.length);
      return colors[a];
}


// make new random rgb color code and return it
function newcolor(){
   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);
   var c = ("rgb(" + r + ", " + g + ", " + b + ")");
   return c;

}