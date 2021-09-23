fetch("https://newscatcher.p.rapidapi.com/v1/search?q=Elon%20Musk&lang=en&sort_by=relevancy&page=1&media=True", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "newscatcher.p.rapidapi.com",
		"x-rapidapi-key": "3f6e15de6bmsh28315dc5a7d64d3p1e91a9jsn2df05bf932fa"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
