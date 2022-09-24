const createUser = (e) => {
    e.preventDefault();
    console.log({name: e.target.username.value, email: e.target.email.value, password: e.target.password.value});
    fetch("http://localhost:8000/register", {
        method: "post",
        body: JSON.stringify({username: e.target.username.value, email: e.target.email.value, password: e.target.password.value}),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log({data});
        if(data?.status){
            showMessage("The account is created successfully!!!", true);
        }else{
            showMessage("The account is not created!!! Please try again", false)
        }
    })
}

document.getElementById('CreateAccountForm').addEventListener('submit', createUser);


const message = document.getElementById("message");

const showMessage = (res_msg, flag) => {
    console.log({res_msg, flag});
    // flag
    // ? (message.innerHTML = <span style="color: green;">{res_msg}</span>)
    // : (message.innerHTML = <span style="color: red;">{res_msg}</span>)

    message.innerHTML = res_msg;
    if(flag){
        message.style.color = "green";
    }else{
        message.style.color = "red";
    }

    setTimeout(() => {
        message.innerHTML = "";
        message.style.color = "black";
    }, 10000)
}