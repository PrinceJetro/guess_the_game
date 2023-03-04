/**
 * honey moon
 * hot dog
 * black mail
 * friend ship
 * blue tooth
 * cow boy
 * full moon
 * ear ring
 * key board
 * lip stick
 * water fall
 * hand bag
 * tea chair
 * ant man
 * air port
 * book keeper
 * brain wash
 * butter fly
 * day break
 * back ground
 * hook up
 * lap top
 * sweet heart]
 * war cry
 * eye land
 */

//create a list or array, whateevr to store the images link and be able to know which one is storred
q = 0
let score = 0
let answer;
let images = [
     ["hot", "dog"],
     ["https://c.ndtvimg.com/2021-07/7s38qeug_honey_625x300_05_July_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886", "https://images.unsplash.com/photo-1527842891421-42eec6e703ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"],
     ["https://www.teaforturmeric.com/wp-content/uploads/2021/11/Masala-Chai-Tea-Recipe-Card.jpg", "https://cdn.shopify.com/s/files/1/1180/5614/products/cherry-wood-dining-chair-ladder-back_1200x.jpg?v=1643843712"],
     ["https://www.rookieroad.com/img/nascar/nascar-laps.png", "https://www.cibonline.lk/cib_media/2022/04/06.jpg"],
     ["https://domf5oio6qrcr.cloudfront.net/medialibrary/8862/back-pain-lower-black-man.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwoviGpRpm0WEk7CBSn6Wu4lwVbEFWoIEWng&usqp=CAU"],
     ["https://www.eagleclaw.com/pub/media/catalog/product/cache/8b827f92d40f53910595a661ebde8346/t/k/tk21-1-0.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Up_arrow_green.svg/1024px-Up_arrow_green.svg.png"],
     ["https://images.indianexpress.com/2021/09/GettyImages-sun-star-science-teacher-explains-1200.jpg", "https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/broken%20plate%20on%20pink%20background-8199-a3c264bacc361184fd19bb5d2712c101@1x.jpg"],
     ["https://i.guim.co.uk/img/media/086d0567f1936bcc8e63f92f5b817514776ebab9/0_193_2576_1546/master/2576.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=5689b00e036b0c7829bf059110073f44", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Fannia_canicularis%2C_Trawscoed%2C_North_Wales%2C_Sept_2011_%2816737966188%29.jpg/800px-Fannia_canicularis%2C_Trawscoed%2C_North_Wales%2C_Sept_2011_%2816737966188%29.jpg"],
     ["https://static.dw.com/image/64132525_605.jpg", "https://lovevery.com/community/blog/wp-content/uploads/2020/05/Weekly_Week-82-Hero-e1592838526503.jpg"],
]

document.getElementById("total").innerHTML = images.length -1;
random = (quantity, max)=>{
    const arr = []
    while(arr.length < quantity){
      var candidateInt = Math.floor(Math.random() * max) + 1
      if(arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
    }
  return(arr)
  
}

let asa = random(8,8)


function dis(){

  if (q >= images.length -1){
    document.getElementById("main").style.display="none"
    document.getElementById("final").style.display="block"
    document.getElementById("score1").innerHTML = score;
    document.getElementById("total1").innerHTML = images.length -1;

}
    unique = asa[q]
    console.log(images[unique][0] + " unique value is " + unique + " ns q is  " + q);
    document.getElementById("image1").src = images[unique][0] 
    document.getElementById("image2").src = images[unique][1] 
    document.getElementById("guess").value = ""
    document.getElementById("output").innerHTML = " "
    
    q++;

    

}



function check_answer(){
  if (unique == 1){
    answer = "HONEYMOON";
    if(document.getElementById("guess").value.toUpperCase() == answer){
      document.getElementById("output").style.color = "green";
      document.getElementById("output").innerHTML = "CORRECT";
      score++;
      document.getElementById("score").innerHTML = score
      
    }
    else{
      document.getElementById("output").style.color = "red"
      document.getElementById("output").innerHTML = "OOPS, WRONG GUESS, TRY AGAIN, AND ALSO COMFIRM THERE ARE NO SPACES\
      BOTH IN THE MIDDLE OR AFTER THE WORDS";
    }

  } 

  else if(unique == 5){
    answer = "HOOKUP";
    if(document.getElementById("guess").value.toUpperCase() == answer){
      document.getElementById("output").style.color = "green"
      document.getElementById("output").innerHTML = "CORRECT";
      score++;
      document.getElementById("score").innerHTML = score
      
    }
    else{
      document.getElementById("output").style.color = "red"
      document.getElementById("output").innerHTML = "OOPS, WRONG GUESS, TRY AGAIN, AND ALSO COMFIRM THERE ARE NO SPACES\
      BOTH IN THE MIDDLE OR AFTER THE WORDS";
    }

  } 

  else if(unique == 7){
    answer = "BUTTERFLY";
    if(document.getElementById("guess").value.toUpperCase() == answer){
      document.getElementById("output").style.color = "green"
      document.getElementById("output").innerHTML = "CORRECT";
      score++;
      document.getElementById("score").innerHTML = score
      
    }
    else{
      document.getElementById("output").style.color = "red"
      document.getElementById("output").innerHTML = "OOPS, WRONG GUESS, TRY AGAIN, AND ALSO COMFIRM THERE ARE NO SPACES\
      BOTH IN THE MIDDLE OR AFTER THE WORDS";
    }

  } 
    
  if (unique == 2){
    answer = "TEACHER"
    if(document.getElementById("guess").value.toUpperCase() == answer){
      document.getElementById("output").style.color = "green"
      document.getElementById("output").innerHTML = "CORRECT";
      score++;
      document.getElementById("score").innerHTML = score
      
    }
    else{
      document.getElementById("output").style.color = "red"
      document.getElementById("output").innerHTML = "OOPS, WRONG GUESS, TRY AGAIN, AND ALSO COMFIRM THERE ARE NO SPACES\
      BOTH IN THE MIDDLE OR AFTER THE WORDS";
    }

  } 

  if (unique == 6){
    answer = "DAYBREAK"
    if(document.getElementById("guess").value.toUpperCase() == answer){
      document.getElementById("output").style.color = "green"
      document.getElementById("output").innerHTML = "CORRECT";
      score++;
      document.getElementById("score").innerHTML = score
      
    }
    else{
      document.getElementById("output").style.color = "red"
      document.getElementById("output").innerHTML = "OOPS, WRONG GUESS, TRY AGAIN, AND ALSO COMFIRM THERE ARE NO SPACES\
      BOTH IN THE MIDDLE OR AFTER THE WORDS";
    }

  } 

  if (unique == 4){
    answer = "BACKGROUND"
    if(document.getElementById("guess").value.toUpperCase() == answer){
      document.getElementById("output").style.color = "green"
      document.getElementById("output").innerHTML = "CORRECT";
      score++;
      document.getElementById("score").innerHTML = score
      
    }
    else{
      document.getElementById("output").style.color = "red"
      document.getElementById("output").innerHTML = "OOPS, WRONG GUESS, TRY AGAIN, AND ALSO COMFIRM THERE ARE NO SPACES\
      BOTH IN THE MIDDLE OR AFTER THE WORDS";
    }
  } 

  if (unique == 3){
    answer = "LAPTOP"
    if(document.getElementById("guess").value.toUpperCase() == answer){
      document.getElementById("output").style.color = "green"
      document.getElementById("output").innerHTML = "CORRECT";
      score++;
      document.getElementById("score").innerHTML = score
      
    }
    else{
      document.getElementById("output").style.color = "red"
      document.getElementById("output").innerHTML = "OOPS, WRONG GUESS, TRY AGAIN, AND ALSO COMFIRM THERE ARE NO SPACES\
      BOTH IN THE MIDDLE OR AFTER THE WORDS";
    }

  } 
  if (unique == 8){
    answer = "WARCRY"
    if(document.getElementById("guess").value.toUpperCase() == answer){
      document.getElementById("output").style.color = "green"
      document.getElementById("output").innerHTML = "CORRECT";
      score++;
      document.getElementById("score").innerHTML = score
      
    }
    else{
      document.getElementById("output").style.color = "red"
      document.getElementById("output").innerHTML = "OOPS, WRONG GUESS, TRY AGAIN, AND ALSO COMFIRM THERE ARE NO SPACES\
      BOTH IN THE MIDDLE OR AFTER THE WORDS";
    }

  } 
}



/**
 * for (var i = 0; i++; i < random(9,9).length){
    console.log(random(9,9)[1])
}
 */

function dis2(){
  document.getElementById("interactions").style.display = "block";
  document.getElementById("start").style.display = "none";

  dis()
}