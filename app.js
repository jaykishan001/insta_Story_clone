var arr =  [
    {
        dp:"https://images.unsplash.com/photo-1694269476304-5c49949797b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
    ,story:"https://images.unsplash.com/photo-1656137124571-2feb75aa4ff5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
    dp:"https://images.unsplash.com/photo-1694439368032-230a1bad9617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1902&q=80" 
    ,story:"https://plus.unsplash.com/premium_photo-1692340973191-1ebe5b787c58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
    dp:"https://images.unsplash.com/photo-1694487591888-39655b6fabd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80" 
    ,story:"https://images.unsplash.com/photo-1691731052308-71d9505a0e7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
    dp:"https://images.unsplash.com/photo-1694631031738-0e857f3e872a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80" 
    ,story:"https://images.unsplash.com/photo-1693070739008-c3b048f1f976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"    
    },
    {
    dp:"https://plus.unsplash.com/premium_photo-1690366917352-3bd8bc0a0761?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
    ,story:"https://images.unsplash.com/photo-1626123956326-61ca0ae764a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"   
    }
    
]

var stories = document.querySelector("#storyies")

var clutter = ""

arr.forEach(function(ele,idx){
    
    clutter += `<div class="story">
    <img  id ="${idx}" src=" ${ele.dp} " alt="">
    </div>`
    
})

stories.addEventListener("click",function(dets){
    
    document.querySelector(".full-screen").style.display = "block"
    document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    
})

setInterval(function(){
    document.querySelector(".full-screen").style.display = "none"
},3000)

stories.innerHTML = clutter;
