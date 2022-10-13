document.addEventListener('contextmenu', event => event.preventDefault());

$(".card-img-top").click(function() {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    $(".modal-img").attr("src", $(this).attr("src"));
    myModal.show();

})