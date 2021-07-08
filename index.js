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

// fetch("https://shazam-core.p.rapidapi.com/v1/charts/world?limit=10", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "768ec53e87msh5c7325f02e043cbp19ea52jsnba76d5ab383a",
// 		"x-rapidapi-host": "shazam-core.p.rapidapi.com"
// 	}
// })
// .then(res => {
// 	return res.json();
// }).then(data => {
//     const HTMLInsert = data.map(info=>{
//
//     })
//     document.body.innerHTML = HTMLInsert.join('')
// })
// .catch(err => {
// 	console.error(err);
// })