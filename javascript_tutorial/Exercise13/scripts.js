function createcard(title,cname,views,monthsOld,duration,thumbnail){
    views = numcompacter(views)
    let div = document.createElement('div');
    div.className='box';
    document.body.childNodes[1].appendChild(div);
    div.innerHTML=`<div class="img-box">
                <img src=${thumbnail} alt="image">
                <div class="text-on-img">${duration}</div>
            </div>
            <div class="sidebar">
                <h1>${title}</h1>
                <div class="footer">
                    <div class="cname">${cname}</div>
                    <div class="dot">•</div>
                    <div class="views">${views}</div><span>views</span>
                    <div class="dot">•</div>
                    <div class="timeline">${monthsOld} months ago</div>
                </div>
            </div>`
}

function numcompacter(number){
    if (number>1000){
        (number/1000).toFixed(0.0) +"k";
    }
    return number
}

createcard("John snow","codewithharry",430000,3,"45:08","https://i.ytimg.com/vi/XZwBNDGuWGU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAwdmqv1oQIuqnR25cCLlCBC7UTpQ")
createcard("John snow","codewithharry",430000,3,"45:08","https://i.ytimg.com/vi/XZwBNDGuWGU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAwdmqv1oQIuqnR25cCLlCBC7UTpQ")