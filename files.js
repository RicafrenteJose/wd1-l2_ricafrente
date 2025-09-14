document.getElementById("loginForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    const username = e.target.querySelector('input[type="text"]').value;
    const password = e.target.querySelector('input[type="password"]').value;

    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if(username === savedUsername && password === savedPassword){
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Wrong username or password!");
    }
});


document.getElementById("signupForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if(users.find(user => user.username === username)){
        alert("Username already exists. Please login.");
        window.location.href = "login.html";
        return;
    }

    users.push({ username, password });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Redirecting to login...");
    window.location.href = "login.html";
});

