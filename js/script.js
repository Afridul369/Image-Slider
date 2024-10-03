let photos = ['images/img1.jpg','images/img2.jpg','images/img3.jpg']
let imgtag = document.querySelector('img')


let count = 0

function next (){
 count++;
 if (count>= photos.length) {
    count=0
     imgtag.src = photos[count]
 }  else{
    imgtag.src = photos[count]
 }
}

function prev(){
    count--;
    if (count<0) {
        count=photos.length-1
        imgtag.src=photos[count]
    }else{
        imgtag.src=photos[count]
    }
}