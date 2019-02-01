$('input[type="button"]').click(function() {
    $('input.screen').val(
      $('input.screen').val() + this.value
    );
});
