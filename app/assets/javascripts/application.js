//= require jquery
//= require bootstrap-sprockets
//= require select2

function invoker() {
  $(".price").text($("select option").first().val())
  $("select option").each(function(){
    $(this).bind("click", function(){
     $("select option").removeClass("active")
     $(this).addClass("active")
     $(".price").text($(this).addClass("active").val())
    })
  })

  initCalAmountField = function () {
    $(".amount").keyup(function() {
      price = parseFloat($(".price").text())
      amount = $(this).val()
      total = $(".total").text(price * amount)
    });
  }

  initCalAmountField()
}

  





