// Validation Login form
const users = JSON.parse(localStorage.getItem("users-details")) || [];

function validateSignIn(e) {
    e.preventDefault(); 

    const email = document.getElementById("email1").value.trim();
    const password = document.getElementById("password1").value;

    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^_-])[A-Za-z\d@$!%*#?&^_-]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long and include one letter, one number, and one special character.");
        return;
    }

    let matchedUser = users.find(user => user.email === email && user.password === password);

    if (matchedUser) {
        alert("Sign in successful! Welcome, " + matchedUser.name + "!");
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("userName", matchedUser.name);
        

        setTimeout(() => {
            window.location.href = "index.html";
        }, 500);
    } else {
        alert("Incorrect email or password. Please try again.");
    }
}

// footer
const loginfooter = {
    link1: 'https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=508088',
    text1: 'Conditions of Use',
    link2: 'https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=468496',
    text2: 'Privacy Notice',
    link3: 'https://www.amazon.com/gp/help/customer/display.html',
    text3: 'Help',
    text4: '© 1996-2025, Amazon.com, Inc. or its affiliates'
}
let displayLoginFooter = `
<ul>
    <li><a href="${loginfooter.link1}">${loginfooter.text1}</a></li>
    <li><a href="${loginfooter.link2}">${loginfooter.text2}</a></li>
    <li><a href="${loginfooter.link3}">${loginfooter.text3}</a></li>
</ul>
<div class="text">${loginfooter.text4}</div>
`;
document.querySelector("#login-footer").innerHTML = displayLoginFooter;

const conditions = {
    text1: "By continuing, you agree to Amazon's",
    link1: "https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088",
    text2: "Conditions <br>of Use",
    link2: "https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496",
    text3: "Privacy Notice",
}
let displayConditions = `
${conditions.text1}<a href="${conditions.link1}">${conditions.text2}</a> 
    and <a href="${conditions.link2}">${conditions.text3}</a>
`;
document.querySelector(".condition1").innerHTML = displayConditions;

const help = {
    link: "https://www.amazon.com/gp/help/customer/account-issues/ref=unified_claim_collection?ie=UTF8",
    text: "Need help?"
}
let displayhelp = `
<a href="${help.link}">${help.text}</a>
`;
document.querySelector(".help1").innerHTML = displayhelp;