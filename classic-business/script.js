$(document).ready(function () {
    button = $("#btn");


    button.on("click", function (e) {
        e.preventDefault();
        formvalidate();
    });


    function formvalidate() {
        fullName = $('#name').val();
        phoneNumber = $('#phone-number').val();
        email = $('#email').val();

        $('#name').on("input", () => {
            $('#eone').html("")
        });
        $('#phone-number').on("input", () => {
            $('#etwo').html("")
        });
        $('#email').on("input", () => {
            $('#ethree').html("")
        });

        // name
        if (fullName == "") {
            $('#eone').html("Please enter the name").css("color", "orange");
            $('#name').focus();
            return false;
        }

        if (fullName !== "") {
            const regEx = /^[a-zA-Z]*$/;
            if (!regEx.test(fullName)) {
                $('#eone').html("Please enter alphabet only").css("color", "red");
                $('#name').focus();
                return false;
            }
        }

        // phone number
        if (phoneNumber == "") {
            $('#etwo').html("Please enter the phone No.").css("color", "orange");
            $('#phone-number').focus();
            return false;
        }

        if (phoneNumber !== "") {
            const regEx =/^[0-9]{10}$/;
            if (!regEx.test(phoneNumber)) {
                $('#etwo').html("Please enter number only").css("color", "red");
                $('#phone-number').focus();
                return false;
            }
        }

        // email
        if (email == "") {
            $('#ethree').html("Please enter the email").css("color", "orange");
            $('#email').focus();
            return false;
        }

        if (email !== "") {
            const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!regEx.test(email)) {
                $('#ethree').html("Please enter valid email").css("color", "red");
                $('#email').focus();
                return false;
            }
        }
    }
});
