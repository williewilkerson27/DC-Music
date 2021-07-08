fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "30caeee35amsh028fb26bb6a6d1fp10bee7jsne480b16660b8",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
})
    .then(response => {
        console.log(response);
        return response.json()
    })
    .then((data) => {
        console.log(data)
        return data.data
    })
    .then((songs) => {
        let songsHtmlArray = songs.map((song) => {
            return `${song.title}`
        })
        console.log(songsHtmlArray)

    })
    .catch(err => {
        console.error(err);
    });