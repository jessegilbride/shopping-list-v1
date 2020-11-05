/* 
app requirements:
- ADD
- REMOVE
- CHECK/UNCHECK (class toggle)
*/

// ----------------------------------------
// "add item" functionality
// ----------------------------------------
$('#js-shopping-list-form').submit(function(event){
  event.preventDefault();

  ////////// get the item to add to the list
  let newItem = $(this).find('input[id="shopping-list-entry"]').val();

  ////////// build the HTML component with newItem
  let newItemComponent = `
  <li>
    <span class="shopping-item">${newItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>
  `;

  ////////// put the built HTML component into the DOM
  $('ul.shopping-list').append(newItemComponent);

  ////////// reset the form input
  document.getElementById("js-shopping-list-form").reset();

});

// ----------------------------------------
// "remove item" functionality
// ----------------------------------------
$('.shopping-list').on("click", 'li', function(event){
  $(this).closest('li').remove();
});


// ----------------------------------------
// "check/uncheck item" functionality
// ----------------------------------------



/* 
Future Enhancements: 
- undo item removal (possibly using the detach() jQuery method)
- CSS animations like fade, slide-in
- change "add item" button to a plus symbol in a circle button (+)
- move checked items to the bottom of the list
*/