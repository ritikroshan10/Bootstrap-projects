$(document).ready(function () {
    button = $("#btn");


    button.on("click", function (e) {
        e.preventDefault();
        formvalidate();
    });


    function formvalidate() {
        first = $('#first').val();
        last = $('#Last').val();
        email = $('#email').val();
        Subject = $('#Subject').val();

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

        // last
        if (last == "") {
            $('#Last').attr('placeholder', 'Please enter last name');
            $('#Last').addClass('placeholder-error');
            $('#Last').focus();
            return false;
        }

        if (last !== "") {
            const regEx = /^[a-zA-Z]*$/;
            if (!regEx.test(last)) {
                $('#Last').val('').attr('placeholder', 'Please enter alphabet only');
                $('#Last').addClass('placeholder-error');
                $('#Last').focus();
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

        // subject
        if (Subject == "") {
            $('#Subject').attr('placeholder', 'Please enter subject');
            $('#Subject').addClass('placeholder-error');
            $('#Subject').focus();
            return false;
        }

        if (Subject !== "") {
            const regEx = /^[a-zA-Z]*$/;
            if (!regEx.test(Subject)) {
                $('#Subject').val('').attr('placeholder', 'Please enter alphabet only');
                $('#Subject').addClass('placeholder-error');
                $('#Subject').focus();
                return false;
            }
        }      
    }
});
