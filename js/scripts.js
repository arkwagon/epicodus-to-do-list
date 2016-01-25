function ItemToDo(title, description) {
  this.title = title;
  this.description = description;
}

$(document).ready(function() {
  $("form#new-item").submit(function(event){
      event.preventDefault();
        var inputtedTitle = $("input#new-title").val();
        var inputtedDescription = $("input#new-description").val();
        var newItemToDo = new ItemToDo(inputtedTitle, inputtedDescription);
      if (inputtedTitle === "") {
        alert("Please fill out the form correctly!");
      } else {
        $("ol#toDoCol").append("<li><span class='item'>" + newItemToDo.title + " " + newItemToDo.description+ "</span></li>");


        $("input#new-title").val("");
        $("input#new-description").val("");
      }
  });
});
