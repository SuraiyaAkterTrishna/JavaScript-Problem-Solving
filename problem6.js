var myWork = ["unlock module at 8pm", "quickly watch the videos and practice", "take notes", "practice yourself", "if any confusion then join the support session"];

// display with for loop
for(var i = 0; i < myWork.length; i++) {
    // console.log(myWork[i]);
} 

// while 
var i = 0; 
while(i < myWork.length) {
    // console.log(myWork[i]);
    i++;
}

// reverse for
for(var i = myWork.length-1; i >= 0; i--){
    // console.log(myWork[i]);
}

// reverse while 
var i = myWork.length-1;
while(i >= 0) {
    // console.log(myWork[i]);
    i--;
}

var message = "Ajke amar mon valo nei";
for(var i=1; i<=40; i++) {
    // console.log(message);
}


for(i = 36; i <= 86; i++){
    // console.log(i);
    if(i >= 44) {
        break;
    }
}

var myMobiles = ['nokia', 'tinmo', 'samsung', 'lava'];
var i = 0;
while( i < myMobiles.length){
    // console.log(myMobiles[i]);
    i++;
}

for(var i = 58; i <= 98; i++) {
    // console.log(i);
}

for(var i = 412; i <= 456; i = i+2) {
    // console.log(i);
}

for(var i = 581; i <= 623; i = i + 2) {
    // console.log(i);
}

var books = [100, 120, 220, 125, 80, 210, 69];
for(var i=0; i<books.length; i++){
    var book = books[i];
    
    if(book > 200){
        continue;
    }
    console.log(book);
}


