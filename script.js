const items = document.querySelector('list');


let myLibrary = [];
title = "anan";
author = "baban";
pages = 299;
isRead = false;


function Book(title, author, pages, isRead){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.isRead = isRead;
}

Book.prototype.info = function() {
	return (this.title+", by "+this.author+". "+this.pages+", is read");
}



function addBookToLibrary(title,author,pages,isRead) {
	myLibrary.push(new Book(this.title, this.author, this.pages, this.isRead));	
	myLibrary.push(new Book("puslu kıtalar atlası", "ihsan oktay anar", 305, true));
	myLibrary.push(new Book("amat kitabı", "ihsan oktay gene", 258, false));
	myLibrary.push(new Book("montaigne denemeler", "montaigne adı üstünde", 452, true));
}


addBookToLibrary();
render();




function render(){
	//list the array into html
	for (let i = 0; i<myLibrary.length;i++){
		const items = document.createElement('p');
		items.innerHTML = myLibrary[i].info();
		document.body.appendChild(items);
	}
}

