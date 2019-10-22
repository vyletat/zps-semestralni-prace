//eventhandler
$(function () {
    $('.pop').on("click", function () {
        // here asign the image to the modal when the user click the enlarge link
        $('#imagepreview').attr('src', $(this).find('img').attr('src'));
        // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
        $('#imagemodal').modal('show');
    });
});

//eventhandler
$(function () {
    $('.pop-button').on("click", function () {
        //we must find img what we want in our DOC
        var img = $(this).parent().parent().parent().find('a.pop').children();
        // here asign the image to the modal when the user click the enlarge link
        $('#imagepreview').attr('src', img.attr('src'));
        // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
        $('#imagemodal').modal('show');
    });
});

