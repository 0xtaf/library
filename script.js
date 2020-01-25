const titleList = document.querySelector('.titleList');
const authorList = document.querySelector('.authorList');
const pagesList = document.querySelector('.pagesList');
const statusList = document.querySelector('.statusList');
const removeList = document.querySelector('.removeList');
const newBookViewForm = document.querySelector('.newBookViewForm');
const newBookButton = document.querySelector('.newBookButton');
const table = document.getElementById("table");
const contentTable = document.getElementById("libContent");

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



let indexNo = -1;
function render(){
		indexNo += 1;
		let length = myLibrary.length - 1;

		contentTable.innerHTML="";
		for (let i = length; i >= 0; i--){
			let row = contentTable.insertRow(0);
			let cell1 = row.insertCell(0);
			let cell2 = row.insertCell(1);
			let cell3 = row.insertCell(2);
			let cell4 = row.insertCell(3);
			let cell5 = row.insertCell(4);
			let cell6 = row.insertCell(5);

			cell1.innerHTML = myLibrary[i].title;
			cell2.innerHTML = myLibrary[i].author;
			cell3.innerHTML = myLibrary[i].pages;
			cell4.innerHTML = `<button class="button">${myLibrary[i].read}</button>`;
			cell4.id = "toggle"; //to toggle read and unread.
			cell5.innerHTML = i + 1;
			cell6.id = "remove";//add remove id to select it if you want to remove the book.
			//table.appendChild( row );
			cell6.innerHTML = `<button class="button">Delete</button>`;
		}


}
		
		
		
		
		
		
		// if (statusItem.innerHTML == "on"){
		// 	statusItem.textContent = "read";
		// } else if (statusItem.innerHTML == "off"){
		// 	statusItem.textContent = "unread";
		// }

		// const removeItems = document.createElement('button');
		// removeItems.textContent = "Remove";
		// removeItems.dataset.indexNumber = indexNo;
		// removeItems.classList.add('removeButton');
		// removeList.appendChild(removeItems);
		// removeItems.addEventListener('click', popItem);
	




function popItem() {
	console.log(this.dataset.indexNumber);
}


function newBook (){
	table.style.display = "none";
	contentTable.style.display = "none";
	newBookViewForm.style.display = "block";
}
function closeForm() {
	event.preventDefault();
	newBookViewForm.style.display = "none";
	table.style.display = "";
	contentTable.style.display = "";
}


function submitForm() {
	event.preventDefault();
	let title = document.querySelector('[name="title"]').value;
	title.className = "titleList";
	let author = document.querySelector('[name="author"]').value;
	author.className = "authorList";
	let pages = document.querySelector('[name="pages"]').value;
	pages.className = "pagesList";
	if (document.querySelector('[name="isRead"]').checked == true){
		let status = "on";
	} else {
		let status = "off";
	}
	status.className = "statusList";
	myLibrary.push(new Book(title,author,pages,status));	
	table.style.display = "";
	contentTable.style.display = "";
	newBookViewForm.style.display = "none";
	render();	
}
