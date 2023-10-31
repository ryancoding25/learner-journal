const blogPosts = [
    {
        imgSrc :  "images/blog-post-1.jpg",
        alt : "computer with code",
        date :"31/10/18-present" ,
        header : "Blog one",
        paragraph :"I remember when i first started my journey on earth, well specifically the time i took my vaction time in LA, and got tech savey with my first computer for obvious legitimate reasons #Even the devil can code. ",
    },
    {
        imgSrc : "images/blog-post-3.jpg",
        alt : "studying",
        date : "02/05/19",
        header : "Blog two",
        paragraph : "wow what a first year it was causing havoc on earth and studying the humans all whilst giving my dad the biggest bird i could 🖕.",
    },
    {
        imgSrc : "images/blog-post-4.jpg",
        alt : "freinds ha who needs them ",
        date :"10/10/22",
        header : "Blog three",
        paragraph :"meeting the detective was great fun and i enjoy her company, and ive loved punishing all those lovely criminals but the only person i reall trust is me or well maybe mazakin." ,
    },
    {
        imgSrc : "images/blog-post-6.jpg",
        alt : "skyview",
        date : "0/0/0",
        header : "Blog four",
        paragraph :"Too think a simple ball of rock could keep me so entertained. never change humans i love LA.",
    },
    {
        imgSrc : "images/blog-post-2.jpg",
        alt : "boring",
        date :"31/10/23" ,
        header : "Blog five",
        paragraph :"really you are still here reading, go out and get a life clearly you are all shoes when this website is only for tophats, haha monopoly so creative." ,
    },
    {
        imgSrc : "images/blog-post-8.jpg",
        alt : "detective",
        date :"present-onwards" ,
        header : "Blog six",
        paragraph : "Me and the detective will always do well at catching those lovely criminal scum for punishment #Good cop-Bad cop.",
    }
]

const blogPostGrid = document.getElementById("blog-post-grid")
let numberDisplayedPosts = 3;
let viewMoreSize = 3;
let currentPostsSize = 0;

renderBlogPosts(blogPostGrid)

function renderBlogPosts(grid){
    grid.innerHTML += getPostsToDisplay("", 0, numberDisplayedPosts);

    currentPostsSize = numberDisplayedPosts
}

function getPostsToDisplay(postsHTML, startIndex, numberPostsToDisplay) {
    let displayedPostsHTML = postsHTML;
    let endIndex = Math.min(startIndex + numberPostsToDisplay, blogPosts.length);
    
    for (const post of blogPosts.slice(startIndex, endIndex)) {
        displayedPostsHTML += getPostHTML(post);
    }
    
    return displayedPostsHTML;
}


function getPostHTML(post){
       const postHtml = `<article id="article-blog-post" class="article-blog-post">
                <img src="${post.imgSrc}" alt="${post.alt}" class="blog-post-image blog-post-item">
                <p class="article-date blog-post-item">${post.date}</p>
                <h2 class="article-header blog-post-item">${post.header}</h2>
                <p class="article-p blog-post-item">${post.paragraph}</p>
        </article>`
        return postHtml
}

document.getElementById("hero-h").addEventListener("click", goToHeroPost)

function goToHeroPost(){ 
    window.open("hero.html", "_self");
}