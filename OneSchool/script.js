$(document).ready(function () {
    button = $("#btn");
    button_2 = $("#messagebtn");


    button.on("click", function (e) {
        e.preventDefault();
        formvalidate();
    });

    button_2.on("click", function (e) {
        e.preventDefault();
        formvalidate_2();
    });


    function formvalidate() {
        email = $('#email').val();
        password = $('#password').val();
        re_password = $('#re-password').val();

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

        // password
        if (password == "") {
            $('#password').attr('placeholder', 'Please enter password');
            $('#password').addClass('placeholder-error');
            $('#password').focus();
            return false;
        }

        if (password !== "") {
            const regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/;
            if (!regEx.test(password)) {
                $('#password').val('').attr('placeholder', 'Password minimum 8 length');
                $('#password').addClass('placeholder-error');
                $('#password').focus();
                return false;
            }
        } 
            //  re-password
        if (re_password == "") {
            $('#re-password').attr('placeholder', 'Please conform password');
            $('#re-password').addClass('placeholder-error');
            $('#re-password').focus();
            return false;
        }

        if (password != re_password) {
                $('#re-password').val('').attr('placeholder', 'password does not match');
                $('#re-password').addClass('placeholder-error');
                $('#re-password').focus();
                return false;   
        }      
    }

    function formvalidate_2() {
        first = $('#first').val();
        last = $('#Last').val();
        Email = $('#Email').val();
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

        // email
        if (Email == "") {
            $('#Email').attr('placeholder', 'Please enter email');
            $('#Email').addClass('placeholder-error');
            $('#Email').focus();
            return false;
        }

        if (Email !== "") {
            const regEx =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!regEx.test(email)) {
                $('#Email').val('').attr('placeholder', 'Please enter proper email id');
                $('#Email').addClass('placeholder-error');
                $('#Email').focus();
                return false;
            }
        }

    }
});

