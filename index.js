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
 * sweet heart
 * war cry
 * eye land
 */

//create a list or array, whateevr to store the images link and be able to know which one is storred
q = 0
let score = 0
let answer;
let name = window.prompt("Please enter your name for documentation: ").toUpperCase()
document.getElementById("player").innerHTML = name
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
     ["https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/hot-take-2974-38ae3523b46f4055f2455dcdd5a1c92f@1x.jpg", "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"],
     ["https://howtodrawforkids.com/wp-content/uploads/2017/03/how-to-draw-a-face-step-by-step.jpg", "https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg"],
     ["https://www.ucdavis.edu/sites/default/files/styles/sf_landscape_16x9/public/home-site/blogs/one-health/blog-posts/2018/cow-field-one-health-uc-davis.jpg?h=c74750f6&itok=hQ2gfqOw", "https://assets.teenvogue.com/photos/62c87cd0650ca07dc89535cb/3:2/w_2999,h_1999,c_limit/Burna%20Boy%20-%202022%20Press%20Image%20-%20Elliot%20Hensford.jpg"],
     ["https://www.essilor.ng/sites/default/files/2018-07/how-the-eye-works-desktop.jpg", "https://nationaltoday.com/wp-content/uploads/2022/08/4568061-min.jpg"],
     ["https://image.cnbcfm.com/api/v1/image/102129219-544fe3109623b.jpg?v=1497046818&w=1920&h=1080", "https://akm-img-a-in.tosshub.com/businesstoday/images/story/201904/gmail-660_040119014433.jpg?size=948:533"],
     ["https://domf5oio6qrcr.cloudfront.net/medialibrary/7909/conversions/b8a1309a-ba53-48c7-bca3-9c36aab2338a-thumb.jpg","https://cdn.pixabay.com/photo/2016/11/19/09/45/man-1838330__480.jpg"],
     ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Standard-lock-key.jpg/640px-Standard-lock-key.jpg","https://www.ikea.com/ma/en/images/products/proppmaett-chopping-board-beech__0711763_pe728455_s5.jpg?f=s"],
     ["https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2020/07/10/ad89450a-c1d5-11ea-8c85-9f30eae6654e_image_hires_194031.JPG?itok=x_7am4rw&v=1594381242", "https://img.jakpost.net/c/2019/06/03/2019_06_03_73783_1559498805._large.jpg"],
     ["https://media.istockphoto.com/id/674582668/photo/colorful-candies-background.jpg?s=612x612&w=0&k=20&c=O9ECu69ng8FJxQ9DRGFQrgwjxezFNK7kHUfCm-kjjQM=", "https://i.natgeofe.com/k/7bfcf2d2-542e-44f0-962a-c36f2efa98a5/heart.jpg"],
     ["https://www.aclu-in.org/sites/default/files/styles/featured_image_mobile_480x319/public/field_image/dark_jail_cell.jpeg?itok=alOAVM6A", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nKHKrSZMje_p_Nj2z4N3tB2xT3l_z_-SYg&usqp=CAU"],




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

let asa = random(18,18)


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
  
  if (unique == 9){
    answer = "HOTDOG"
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

  if (unique == 10){
    answer = "FACEBOOK"
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
  
  if (unique == 11){
    answer = "COWBOY"
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

  if (unique == 12){
    answer = "ICECREAM"
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
  
  if (unique == 13){
    answer = "BLACKMAIL"
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


  if (unique == 14){
    answer = "WATERFALL"
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
  if (unique == 15){
    answer = "KEYBOARD"
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

  if (unique == 16){
    answer = "BRAINWASH"
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
  if (unique == 17){
    answer = "SWEETHEART"
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
  
  if (unique == 18){
    answer = "CELLPHONE"
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