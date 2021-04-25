// List of videos in the system
const videosList = [
    {
      "title": "The Hand Ripped Noodles Everyone Should Know How to Make",
      "author": "Ethan Chlebowski",
      "description": "This dish is known as Hot oil-seared Biang Biang noodles. The noodles are stretched than bounced on the work surface.",
      "views": "123K views",
      "date_posted": "1 day ago",
      "profile_photo": "assets/profiles/ethan.jpg",
      "video_thumbnail": "assets/hand-pulled-noodles.jpg",
      "link": "https://www.youtube.com/watch?v=UBxNd-E2sP0"
    },
    {
      "title": "Making Potato Chips At Home",
      "author": "My Name is Andong",
      "description": "Classic potato chips or Kettle Style potato chips - no matter what your favorite is, with this home made potato chips recipe your success is guaranteed. But did you know the story and science behind potato chips?",
      "views": "693K views",
      "date_posted": "4 months ago",
      "profile_photo": "assets/profiles/andong.jpg",
      "video_thumbnail": "assets/potato-chips.jpg",
      "link": "https://www.youtube.com/watch?v=UiJmmVd3kWI"
    },
    {
      "title": "Uncle Roger HATE Jamie Oliver Egg Fried Rice",
      "author": "mrnigelng",
      "description": "Jamie Oliver came up with an egg fried rice recipe. Uncle Roger don't like. Niece and nephew, if you want to see Uncle Roger collab with Jamie, please tweet at him and DM him on instagram. Tell him to be in Uncle Roger video!",
      "views": "14M views",
      "date_posted": "7 months ago",
      "profile_photo": "assets/profiles/nigel.jpg",
      "video_thumbnail": "assets/fried-rice.jpg",
      "link": "https://www.youtube.com/watch?v=t_KdbASIkB8"
    },
    {
      "title": "Easy laksa at home... in just 15 minutes! 🙌💯🙌💯 Marion's Kitchen",
      "author": "Marion's Kitchen",
      "description": "My easy laksa curry recipe is perfect for when that noodle soup craving hits hard. Ready in 15 minutes!",
      "views": "651K views",
      "date_posted": "3 months ago",
      "profile_photo": "assets/profiles/marion.jpg",
      "video_thumbnail": "assets/laksa.jpg",
      "link": "https://www.youtube.com/watch?v=ssOi5GudOX0"
    },
    {
        "title": "3 Dollar Homemade Ramen | But Cheaper",
        "author": "Joshua Weismann",
        "description": "No, this isn't instant noodles so don’t ask. I'm talking about the gourmet noodles that costs $15 or more for a single bowl! That's just unacceptable so I'll show you how to make homemade gourmet miso ramen for just 3 dollars that'll make all categories of ramen from fancy to instant look bad. ",
        "views": "575K views",
        "date_posted": "1 week ago",
        "profile_photo": "assets/profiles/joshua.jpg",
        "video_thumbnail": "assets/ramen.jpg",
        "link": "https://www.youtube.com/watch?v=vHvwUEHcyvA"
    },
    {
        "title": "6 New Ways To Enjoy Potato Recipes",
        "author": "Aaron and Claire",
        "description": "6 New Ways To Enjoy Potatoes Recipes! 1. Braised Potatoes 2. Stir-Fried Potatoes 3. Korean Potato Pancake (Gamja Jeon) 4. Accordion Potato 5. Potato Cheese Ball 6. Potato Croquette",
        "views": "1.6M views",
        "date_posted": "8 months ago",
        "profile_photo": "assets/profiles/aaron.jpg",
        "video_thumbnail": "assets/aaron-potatoes.jpg",
        "link": "https://www.youtube.com/watch?v=8IG3mDveIsQ"
      },
      {
        "title": "😋 Char Siu (叉燒) - My dad's recipe for Chinese BBQ Pork!",
        "author": "Made with Lau",
        "description": "Watch Daddy Lau teach us how to make char siu! Also known as Chinese BBQ Pork, this is a classic Cantonese dish that's extremely popular. If you’re new to char siu, it’s an extremely juicy, sweet, and savory pork dish, and it’s a popular entree on its own - and a pleasant addition to many different types of noodles, rice dishes, and pastries like cha siu bao.",
        "views": "499K views",
        "date_posted": "2 months ago",
        "profile_photo": "assets/profiles/lau.jpg",
        "video_thumbnail": "assets/pork.jpg",
        "link": "https://www.youtube.com/watch?v=zkCoAKTbHpQ"
      },
      {
        "title": "👶 Ginger Egg Fried Rice (姜炒饭) | The Secret Fried Rice Recipe, Without Soy Sauce!",
        "author": "Made with Lau",
        "description": "Watch Daddy Lau teach us how to make this healthy, easy Ginger Egg Fried Rice recipe! You can do without soy sauce for this recipe :) ",
        "views": "87K views",
        "date_posted": "9 months ago",
        "profile_photo": "assets/profiles/lau.jpg",
        "video_thumbnail": "assets/lau-fried-rice.jpg",
        "link": "https://www.youtube.com/watch?v=FBScXlydaa8"
      },
      {
        "title": "Oven Fries — CRISPIER Than Deep-Fried",
        "author": "Adam Ragusea",
        "description": "I suppose this is more of a techniques than a recipe. Take whatever potatoes you want. Peel them, or don't. Cut them into fry-like shapes, being sure to get roughly equal thickness, and cut them maybe twice as thick as you want them — they'll shrink a lot during cooking.",
        "views": "9M views",
        "date_posted": "1 year ago",
        "profile_photo": "assets/profiles/adam.jpg",
        "video_thumbnail": "assets/adam-potatoes.jpg",
        "link": "https://www.youtube.com/watch?v=m6kcANnAJSo"
      },
      {
        "title": "5 wholesome breakfast smoothies",
        "author": "Pick Up Limes",
        "description": "If you're feeling like you've got a hectic morning and you would otherwise be skipping breakfast then we've got smoothie recipe ideas for you.",
        "views": "1.9M views",
        "date_posted": "10 months ago",
        "profile_photo": "assets/profiles/pul.jpg",
        "video_thumbnail": "assets/smoothies.jpg",
        "link": "https://www.youtube.com/watch?v=7xw7HGS7PIw"
      }
  ]


// This function will automatically generate the HTML for a single video search result.
// The function accepts a Javascript dictionary that contains the properties of a video
function generateRowHTML(video) {
    return `<div class="video">
                <img class="thumbnail" src="${video.video_thumbnail}">
                <div class="info">
                    <p class="name"><a href="${video.link}">${video.title}</a></p>
                    <p class="stats">${video.views} *  ${video.date_posted}</p>
                    <p class="creator">
                        <img src="${video.profile_photo}"/>
                        <span> ${video.author}</span>
                    </p>                    
                    <p class="desc">${video.description}</p>                        
                </div>                
            </div>` 
}

// @TODO: Put your code here
var target = Object.assign({}, videosList)
var movie=""
let l = videosList.length
console.log(l)

  for(let i =0;i<l;i++){
    title = videosList[i].title
    author = videosList[i].author
    description = videosList[i].description
    views = videosList[i].views
    date_posted = videosList[i].date_posted
    profile_photo = videosList[i].profile_photo
    video_thumbnail = videosList[i].video_thumbnail
    link = videosList[i].link

}
function A(){

    videosList.forEach(e =>{
      movie += '<div class="video" >'
      movie += '<div width=20%>'
      movie += '<a href="' + e.link + '">'
      movie += '<img src="' + e.video_thumbnail + '" width=400px auto alt="">'
      movie += '</a>'
      movie += '</div>'
      movie += '<div width=80%>'
      movie += '<a href="' + e.link + '">'
      movie += '<h1>' + e.title + '</h1>'
      movie += '</a>'
      movie += '<p>' + e.date_posted + '</p>'
      movie += '<img src="' + e.profile_photo + '" width=40px;height=40px alt="">'
      movie += '<p>' + e.author + '</p>'
      movie += '<p>' + e.views + '</p>'
      movie += '<p>' + e.description + '</p>'
      movie += '</div>'
      movie += '</div>'
      
    })
    document.getElementById("results").innerHTML = movie;

}
document.querySelector("#btn-show-all").addEventListener("click", A)

document.getElementById("btn-search").onclick = function(){
  var v = document.getElementById("txt-search").value

  let TESTF = videosList.map(o => Object.assign({}, o))
  console.log(TESTF)

  if(!v){
    alert("Please enter a key word")
  }
  else{ 
  document.getElementById("results").innerText = ""
  var MM = videosList
  let j
  var test=""

  for(i = 0;i<TESTF.length;i++){
    if(TESTF[i].title.includes(v) || TESTF[i].author.includes(v) || TESTF[i].description.includes(v) || TESTF[i].views.includes(v) || TESTF[i].date_posted.includes(v))
    {
}
    
    else{

      TESTF[i].title = "\0"
      TESTF[i].author ="\0"
      TESTF[i].description="\0"
      TESTF[i].views="\0"
      TESTF[i].date_posted="\0"
      TESTF[i].profile_photo="\0"
      TESTF[i].video_thumbnail="\0"
      TESTF[i].link="\0"
    if(TESTF[i].title == "\0"){
 
      TESTF.splice(i, 1)

      i= i-1;
      if(TESTF.length == 0){
        alert("NO MORE VIDEOSSSSSS")
      }
    }    
    }   
    }
    
    MMV()
    document.getElementById("results").innerHTML = test;
     
    function MMV(){
      TESTF.forEach(mm =>{
        test += '<div class="video" >'
        test += '<div width=20%>'
        test += '<a href="' + mm.link + '">'
        test += '<img src="' + mm.video_thumbnail + '" width=400px auto alt="">'
        test += '</a>'
        test += '</div>'
        test += '<div width=80%>'
        test += '<a href="' + mm.link + '">'
        test += '<h1>' + mm.title + '</h1>'
        test += '</a>'
        test += '<p>' + mm.date_posted + '</p>'
        test += '<img src="' + mm.profile_photo + '" width=40px;height=40px alt="">'
        test += '<p>' + mm.author + '</p>'
        test += '<p>' + mm.views + '</p>'
        test += '<p>' + mm.description + '</p>'
        test += '</div>'
        test += '</div>'
      })
      console.log("llllllllllllllllllllllll")
      
  }

  }
}
