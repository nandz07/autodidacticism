

// form submition---------------

        $("#submit-form").submit((e)=>{
            e.preventDefault()
            $("#submit-form").validate({
                rules:{
                    name:{
                        required:true,
                        minlength:4
                    },
                    email:{
                        required:true,
                        email:true
                    },
                    subject:{
                        required:true,
                        minlength:5
                    },
                    message:{
                        required:true,
                        minlength:15
                    }
                    
                },
                messages:{
                    name:{
                        required:"enter first name",
                        minlength:"atleast 4 characters"
                    },
                    email:{
                        required:"need an email",
                        email:"valid email please"
                    },
                    subject:{
                        minlength:"atlest 5 characters",
                        required:"subject please"
                    },
                    message:{
                        required:"write your message please",
                        minlength:"atleast 15 charecters"
                    }
                },
                submitHandler: function(form) {
                    $.ajax({
                        url:"https://script.google.com/macros/s/AKfycbzkstZ2uLfAspYe_MiWpGChHuzyss-T1xYL0EjrjymqVBQeE4l3Io4HhznElNnK61JXOA/exec",
                        data:$("#submit-form").serialize(),
                        method:"post",
                        success:function (response){
                            alert("Form submitted successfully")
                            window.location.reload()
                            //window.location.href="https://google.com"
                        },
                        error:function (err){
                            alert("Something Error")
            
                        }
                    })
                    $form.submit();
                }
            })

            
        })
//   form submition ends--------------------

// -------------contact------------

        function goForContact(service){
           
            sub=document.getElementById('subject')
            sub.value=service;
        }

// -------------contact ends------------