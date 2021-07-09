//! Apple Api (not functional yet)

// fetch("https://api.music.apple.com/v1/catalog/us/charts?types=songs,albums,playlists&genre=20&limit=1", {
    //     headers: {
        
        //         'Content-Type': 'application/json'
        //     }
        // })
        //         .then(response => {
            //             return response.json();
            //         }).then(data => {
                //             console.log(data)
                //         })
                //         .catch(err => {
                    //             console.error(err);
                    //         });


//! Shazam Charts Api (functional)

fetch("https://shazam-core.p.rapidapi.com/v1/charts/world?limit=10", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "768ec53e87msh5c7325f02e043cbp19ea52jsnba76d5ab383a",
		"x-rapidapi-host": "shazam-core.p.rapidapi.com"
	}
})
.then(res => {
	return res.json();
}).then(data => {
    console.log(data)
    // const HTMLInsert = data.map(info=>{
    //     info.images
    // })
    // document.body.innerHTML = HTMLInsert.join('')
})
.catch(err => {
	console.error(err);
})

//! Bands In Town API 
const submitButton = document.getElementById('main-search')
document.getElementById('search-form').addEventListener('submit', (event) =>{
    event.preventDefault()
    const HTMLSearch = encodeURIComponent(document.getElementById('input-search').value)
    fetch(`https://rest.bandsintown.com/artists/${HTMLSearch}/events?app_id=0c3d7989425512a2b6dea2004f6cdd51&date=upcoming`).then(res => {
        return res.json()
    }).then(data =>{
        console.log(data)
    }).catch(err => {
        console.error(err);
    })
})