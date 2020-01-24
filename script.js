const titleList = document.querySelector('.titleList');
const authorList = document.querySelector('.authorList');
const pagesList = document.querySelector('.pagesList');
const statusList = document.querySelector('.statusList');
const newBookViewForm = document.querySelector('.newBookViewForm');
const newBookButton = document.querySelector('.newBookButton');
newBookViewForm.style.display = "none";



function Book(title, author, pages, isRead){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.isRead = isRead;
}


Book.prototype.info = function() {
	return (this.title+", by "+this.author+". "+this.pages+", is read");
}



let myLibrary = [];



newBookButton.addEventListener('click', newBook);








render();




function render(){
	//list the array into html
	for (let i = 0; i<myLibrary.length;i++){
		const titleItem = document.createElement('li');		
		titleItem.innerHTML = myLibrary[i]["title"];
		titleList.appendChild(titleItem);

		const authorItem = document.createElement('li');	
		authorItem.innerHTML = myLibrary[i]["author"];
		authorList.appendChild(authorItem);

		const pagesItem = document.createElement('li');	
		pagesItem.innerHTML = myLibrary[i]["pages"];
		pagesList.appendChild(pagesItem);

		const statusItem = document.createElement('li');	
		statusItem.innerHTML = myLibrary[i]["isRead"];
		statusList.appendChild(statusItem);
	}
}


function newBook (){
	newBookViewForm.style.display = "block";
}
function closeForm() {
	newBookViewForm.style.display = "none";
}


function submitForm() {
	myLibrary.push(new Book(this.title, this.author, this.pages, this.isRead));	
	render();
}