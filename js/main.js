// login via javascript
function credentials()
{
    var email=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    if(email=='admin@gmail.com' && pass=='admin123')
    {
        Swal.fire({
            title: "Wow?",
            text: "You are Logged in successfully",
            icon: "success"
          });
          
          window.location='dashboard.html';
    }

    else 
    {
        Swal.fire({
            title: "Oh?",
            text: "Your email & Password are Incorrec t try again",
            icon: "error"
          });

        //   window.location='index.html';

    }
}