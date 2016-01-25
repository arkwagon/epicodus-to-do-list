function ItemToDo(title,description) {
  this.title = title;
  this.description = description;
}

$(document).ready(function() {

  $("form").submit(function(event){

    event.preventDefault();
  });

});
