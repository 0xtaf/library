let myLibrary;

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
//parses array into json format and back when called.
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

if (storageAvailable('localStorage')) {
    if(localStorage.length != 0){
   		myLibrary = localStorage.getObj("library");
	}
}else {
    alert("Local Storage is not available on this browser.");
}

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
render();


function Book(title, author, pages, isRead){
	this.title = title;
	this.author = author;
	this.pages = pages;

	if(isRead){
        this.isRead = "Read";
    }else{
        this.isRead = "Unread";
    }
}


Book.prototype.info = function() {
	return (this.title+", by "+this.author+". "+this.pages+", is read");
}



// let myLibrary = [];


newBookButton.addEventListener('click', newBook);



function render(){
		let length = myLibrary.length - 1;

		contentTable.innerHTML="";
		for (let i = length; i >= 0; i--){
			let row = contentTable.insertRow(0);
			row.setAttribute("data-index", `${i}`);
			let cell1 = row.insertCell(0);
			let cell2 = row.insertCell(1);
			let cell3 = row.insertCell(2);
			let cell4 = row.insertCell(3);
			let cell5 = row.insertCell(4);

			cell1.innerHTML = myLibrary[i].title;
			cell2.innerHTML = myLibrary[i].author;
			cell3.innerHTML = myLibrary[i].pages;
			cell4.innerHTML = `<button class="button">${myLibrary[i].isRead}</button>`;
			cell4.className = "toggle";
			cell5.className = "remove";
			cell5.innerHTML = `<button class="button">Remove</button>`;
		}

		let removeButtons  = [...document.querySelectorAll(".remove")];
		removeButtons.forEach(button => {
			button.addEventListener('click', remove);
		});

		let toggleButtons = [...document.querySelectorAll(".toggle")];
		toggleButtons.forEach(item => {
			item.addEventListener('click', toggle);
		});

		if (storageAvailable('localStorage')) {
			localStorage.setObj("library", myLibrary);
		}


}
		
function remove(){
	console.log(this.parentNode.dataset.index);
    myLibrary.splice(Number(this.parentNode.dataset.index),1);
    render();
}		


function toggle(){
    
    if(myLibrary[this.parentNode.dataset.index].isRead == "Read"){
        myLibrary[this.parentNode.dataset.index].isRead = "Unread"; 
    }else if(myLibrary[this.parentNode.dataset.index].isRead == "Unread"){
        myLibrary[this.parentNode.dataset.index].isRead = "Read";
    }
    render();
}
		
		
		
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
	let status = document.querySelector('[name="isRead"]').checked;
	status.className = "statusList";

	myLibrary.push(new Book(title,author,pages,status));	
	table.style.display = "";
	contentTable.style.display = "";
	newBookViewForm.style.display = "none";
	render();	
}
