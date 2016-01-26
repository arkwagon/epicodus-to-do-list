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
        $("ol#toDoCol").append("<li><span class='item'>" + "<strong>" + newItemToDo.title + "</strong> " + newItemToDo.description+ " " + "</span></li>");

        $(".item").last().click(function() {
          $("ol#completed").append("<li><span class='complete'>" + "<strong>" + newItemToDo.title + "</strong></span></li>");
        });




        $("input#new-title").val("");
        $("input#new-description").val("");
      }
  });
});
