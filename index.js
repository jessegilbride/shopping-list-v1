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

  ////////// basic form validation
  if (newItem.trim() === "") {
    alert("Please enter an item.");
    resetTheForm();
    return; // stop the "add item" functionality
  }

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
  resetTheForm();

});

// ----------------------------------------
// "remove item" functionality
// ----------------------------------------
$('.shopping-list').on('click', '.shopping-item-delete', function(event){
  $(this).closest('li').remove();
});

// ----------------------------------------
// "check/uncheck item" functionality
// ----------------------------------------
$('.shopping-list').on('click', '.shopping-item-toggle', function(event){
  $(this).parents('li').children('.shopping-item').toggleClass('shopping-item__checked');
});

function resetTheForm(){
  document.getElementById("js-shopping-list-form").reset();
}

/* 
Future Enhancements: 
- undo item removal (possibly using the detach() jQuery method)
- CSS animations like fade, slide-in
- change "add item" button to a plus symbol in a circle button (+)
- move checked items to the bottom of the list
*/