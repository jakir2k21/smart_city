const handleLoginUser = (e) => {
    e.preventDefault();
    // console.log({name: e.target?.email.value, password: e.target?.password.value});
    fetch("http://localhost:8000/login", {
        method: "post",
        body: JSON.stringify({email: e.target.email.value, password: e.target.password.value}),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(result => {
        if(result?.status){
            console.log({result});
            window.open('/login_after.html', "_self");

        }
        else{
            setError(result);
        }

    })
}

document.getElementById('loginForm').addEventListener('submit', handleLoginUser);

const error = document.getElementById("errorMessage");

const setError = (err) => {
    error.innerText = `${err?.message || "Something Wrong"}`;
    setTimeout(() => {
        error.innerText = ``;
    }, 10000)
}