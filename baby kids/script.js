$(document).ready(function () {
    formbtn_2 = $(".formbtn_2");

    nameInput2 = $.trim($('#surname').val());
    email = $.trim($('#email').val());
    nameInput3 = $.trim($('#subject').val());


    formbtn_2.on("click", function (e) {
        e.preventDefault();
        formvalidate();
    });


    function formvalidate() {
        nameInput1 = $('#name').val();
        nameInput2 = $('#surname').val();
        subject = $('#subject').val();
        email = $('#email').val();

        $('#name').on("input", () => {
            $('#eone').html("")
        });
        $('#surname').on("input", () => {
            $('#etwo').html("")
        });
        $('#email').on("input", () => {
            $('#ethree').html("")
        });
        $('#subject').on("input", () => {
            $('#efour').html("")
        });

        // name
        if (nameInput1 == "") {
            $('#eone').html("Please enter the name").css("color", "orange");
            $('#name').focus();
            return false;
        }

        if (nameInput1 !== "") {
            const regEx = /^[a-zA-Z]*$/;
            if (!regEx.test(nameInput1)) {
                $('#eone').html("Please enter alphabet only").css("color", "red");
                $('#name').focus();
                return false;
            }
        }

        // lastname
        if (nameInput2 == "") {
            $('#etwo').html("Please enter the surname").css("color", "orange");
            $('#surname').focus();
            return false;
        }

        if (nameInput2 !== "") {
            const regEx = /^[a-zA-Z]*$/;
            if (!regEx.test(nameInput2)) {
                $('#etwo').html("Please enter alphabet only").css("color", "red");
                $('#surname').focus();
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
        // subject
        if (subject == "") {
            $('#efour').html("Please enter the subject").css("color", "orange");
            $('#subject').focus();
            return false;
        }

        if (subject !== "") {
            const regEx = /^[a-zA-Z]*$/;
            if (!regEx.test(subject)) {
                $('#efour').html("Please enter alphabet only").css("color", "red");
                $('#subject').focus();
                return false;
            }
        }
    }
});
