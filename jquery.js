


$(function() {
  
    var $list, $newItemForm;
    $list = $('ul');
    $newItemForm = $('#newItemForm');
  
    $newItemForm.on('submit', function(e) {
      e.preventDefault();
      var text = $('input:text').val();
      $list.append('<li class="list-group-item list-group-item-success">' + text + '</li>');
      $('input:text').val('');
    });

    $list.on('click', 'li', function(){
        var $this = $(this);
        $this.addClass('list-group-item-danger');
        $this.css('text-decoration','line-through')
    });

});