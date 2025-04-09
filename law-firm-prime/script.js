$(document).ready(function () {
    button = $("#btn");


    button.on("click", function (e) {
        e.preventDefault();
        formvalidate();
    });


    function formvalidate() {
        first = $('#first').val();
        email = $('#email').val();

        // name
        if (first == "") {
            $('#first').attr('placeholder', 'Please enter name');
            $('#first').addClass('placeholder-error');
            $('#first').focus();
            return false;
        }

        if (first !== "") {
            const regEx = /^[a-zA-Z]*$/;
            if (!regEx.test(first)) {
                $('#first').val('').attr('placeholder', 'Please enter alphabet only');
                $('#first').addClass('placeholder-error');
                $('#first').focus();
                return false;
            }
        }

        // email
        if (email == "") {
            $('#email').attr('placeholder', 'Please enter email');
            $('#email').addClass('placeholder-error');
            $('#email').focus();
            return false;
        }

        if (email !== "") {
            const regEx =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!regEx.test(email)) {
                $('#email').val('').attr('placeholder', 'Please enter proper email id');
                $('#email').addClass('placeholder-error');
                $('#email').focus();
                return false;
            }
        }

    }
});
