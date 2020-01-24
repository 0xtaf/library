const titleList = document.querySelector('.titleList');
const authorList = document.querySelector('.authorList');
const pagesList = document.querySelector('.pagesList');
const statusList = document.querySelector('.statusList');
const newBookViewForm = document.querySelector('.newBookViewForm');
const newBookButton = document.querySelector('.newBookButton');
const headers = document.querySelector('.headers');
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



let myLibrary = [{title: "yüzük", author: "ben", pages: "342", isRead: "on"},{title: "the lord of the rings the return of the king", author: "jk rowlingle ben yazdim", pages: "1098", isRead: "on"},{title: "bu da ucuncu kitap", author: "montaigne yazmış", pages: "200", isRead: "on"}];



newBookButton.addEventListener('click', newBook);








renderfirst();




function renderfirst(){
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
		if (statusItem.innerHTML == "on"){
			statusItem.textContent = "read";
		} else if (statusItem.innerHTML == "off"){
			statusItem.textContent = "unread";
		}
	}
}
function renderlast(){
	//list the array into html
		let length = myLibrary.length - 1;

		const titleItem = document.createElement('li');		
		titleItem.innerHTML = myLibrary[length]["title"];
		titleList.appendChild(titleItem);

		const authorItem = document.createElement('li');	
		authorItem.innerHTML = myLibrary[length]["author"];
		authorList.appendChild(authorItem);

		const pagesItem = document.createElement('li');	
		pagesItem.innerHTML = myLibrary[length]["pages"];
		pagesList.appendChild(pagesItem);

		const statusItem = document.createElement('li');	
		statusItem.innerHTML = myLibrary[length]["isRead"];
		console.log(statusItem);
		statusList.appendChild(statusItem);
		if (statusItem.innerHTML == "on"){
			statusItem.textContent = "read";
		} else if (statusItem.innerHTML == "off"){
			statusItem.textContent = "unread";
		}
	
}

function newBook (){
	headers.style.display = "none";
	newBookViewForm.style.display = "block";
}
function closeForm() {
	event.preventDefault();
	newBookViewForm.style.display = "none";
	headers.style.display = "";
}


function submitForm() {
	event.preventDefault();
	a = document.querySelector('[name="title"]').value;
	a.className = "titleList";
	b = document.querySelector('[name="author"]').value;
	b.className = "authorList";
	c = document.querySelector('[name="pages"]').value;
	c.className = "pagesList";
	if (document.querySelector('[name="isRead"]').checked == true){
		d = "on";
	} else {
		d = "off";
	}
	d.className = "statusList";
	myLibrary.push(new Book(a,b,c,d));	
	headers.style.display = "";
	newBookViewForm.style.display = "none";
	renderlast();	
}