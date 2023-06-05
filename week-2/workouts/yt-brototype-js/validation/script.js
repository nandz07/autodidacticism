$(document).ready(function(){
    jQuery.validator.addMethod("passwordCheck",
        function(value, element, param) {
            if (this.optional(element)) {
                return true;
            } else if (!/[A-Z]/.test(value)) {
                return false;
            } else if (!/[a-z]/.test(value)) {
                return false;
            } else if (!/[0-9]/.test(value)) {
                return false;
            }

            return true;
        },
        "error msg here");
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:6
            },
            sname:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true
            },
            password:{
                required:true,
                passwordCheck:true
            },
            day:{
                required:true
            },
            gender:{
                required:true
            },
            
        },
        messages:{
            fname:{
                required:"enter first name",
                minlength:"atleast 4 char"
            },
            sname:{
                required:"enter surname",
                minlength:"atleast 4 char"
            },
            emailAddress:{
                required:"need an email",
                email:"valid email please"
            },
            password:{
                required:"please enter a new password",
                minlength:"atleast 4 char"
            },
            day:{
                required:"select a day"
            },
            gender:{
                required:" select your gender please"
            }
        }
    })
})