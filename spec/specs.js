describe("ItemToDo", function() {
  it("creates a new Item to do", function() {
    var testItemToDo = new ItemToDo("Title", "Description");
    expect(testItemToDo.title).to.equal("Title");
    expect(testItemToDo.description).to.equal("Description");
  });
});
