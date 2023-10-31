document.getElementById("view-more-btn").addEventListener("click", showMoreArticles)

function showMoreArticles() {
    if (blogPosts.length != currentPostsSize){
        blogPostGrid.innerHTML = getPostsToDisplay(blogPostGrid.innerHTML, currentPostsSize, viewMoreSize)
        currentPostsSize += viewMoreSize 
    }
}