function escolherPagina() {
	var page;
	page = prompt('Para qual página você quer ir? Digite (h) para home, ou (s) para sobre mim')
	if (page == 'h')
		window.location.assign("index.html");
	if (page == 's')
		window.location.assign("about.html");
}