const loadNews = async (searchText = 'comedy') => {
    const res = await fetch(` https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`)
    const data = await res.json();
    const news = data.posts;
    //console.log(news);
    displayNews(news);
}

const displayNews = (news) => {
    //console.log(news);
    const newsContainer = document.getElementById('news-Container');
    const indicatorChange = document.getElementById('indicator-change');

    //newsContainer.textContent= "";
    


    news.forEach(New => {
        console.log(New);
        



        const newsCard = document.createElement('div');
        newsCard.classList = `flex gap-4 w-full bg-zinc-100 rounded-3xl p-5 mb-3 hover:bg-indigo-400 hover:bg-opacity-10 hover:border-indigo-400 hover:border`;
        newsCard.innerHTML = `
        <div>
                        <div class="indicator">
                            <span id="indicator-change" class="indicator-item indicator-start md:indicator-bottom border-none indicator-top indicator-end xl:indicator-end badge badge-secondary"></span> 
                            <div class="grid w-16 h-16 bg-base-300 place-items-center rounded-xl"><img class= "rounded-xl" src="${New.image}" alt=""></div>
                          </div>
                    </div>
                    <div class ="w-full">
                        <div class="flex gap-3 items-center">
                            <p class="text-slate-900 text-opacity-80 text-sm font-medium"># ${New.category
                            }</p>
                            <p class="text-slate-900 text-opacity-80 text-sm font-medium">Author : ${New?.author?.name}</p>
                        </div>
                        <div>
                            <h5 class="text-slate-900 text-xl font-bold py-3">${New?.title}</h5>
                            <p class="text-slate-900 text-opacity-60 text-base font-normal leading-relaxed pb-3">${New?.description
                            }</p>
                        </div>
                        <hr class="border-dashed">
                        <div class="flex justify-between pt-3">
                            <div class="flex gap-4 items-center">
                                <p class="flex items-center text-slate-900 text-opacity-60 text-base font-normal"><img src="images/tabler-icon-message-2.png" alt=""> ${New?.comment_count}</p>
                                <p class="flex items-center text-slate-900 text-opacity-60 text-base font-normal"><img src="images/tabler-icon-eye.png" alt=""> ${New?.view_count
                                }</p>
                                <p class="flex items-center text-slate-900 text-opacity-60 text-base font-normal"><img src="images/tabler-icon-clock-hour-9.png" alt=""> ${New?.posted_time} min</p>
                            </div>
                            <button><img src="images/email.png" alt=""></button>
                        </div>


                    </div>
        `
        

        newsContainer.appendChild(newsCard);
        //activeStatus(New.isActive);
        const indicatorChange = newsCard.querySelector('.indicator-item'); // Select indicator within the scope of the news card
        if (New.isActive) {
            indicatorChange.classList.add('bg-green-500');
        }else{
            indicatorChange.classList.add('bg-red-500');
        }
    })
    
}

//handle search
const handleSearch = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText)
    loadNews(searchText);
}


// const activeStatus = (isActiving) => {
//     const indicatorChange = document.getElementById('indicator-change')
//     if (isActiving) {
//         indicatorChange.classList.add('bg-green-500');
//         indicatorChange.classList.remove('bg-red-500');

//     }
//     else {
//         indicatorChange.classList.add('bg-red-500');
//         indicatorChange.classList.remove('bg-green-500');
//     }
// }

loadNews();