function Book(title, author, pages, isRead){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.isRead = isRead;
	if (isRead == true){
		title.info = function(){
		return (title+" by "+author+", "+pages+" pages, "+ "is read");
		}
		console.log(title.info());
	} else {
		title.info = function(){
		return (title+" by "+author+", "+pages+" pages, "+ "not read yet");
		}
		console.log(title.info());
	}
}