// sign-up validation form
function validateSignOut(e) {
    e.preventDefault();

    let name = document.getElementById("name2").value.trim();
    let email = document.getElementById("email2").value.trim();
    let password = document.getElementById("password2").value;
    let confirmPassword = document.getElementById("confirmPassword2").value;

    if (!name || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^_-])[A-Za-z\d@$!%*#?&^_-]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long and include at least one letter, one number, and one special character.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users-details")) || [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            alert("This email is already registered. Please use another one.");
            return;
        }
    }

    let object = { name, email, password };
    users.push(object);
    localStorage.setItem("users-details", JSON.stringify(users));
    alert("User registered successfully!");
    localStorage.setItem("isLogin", "true");;
    location.href="login.html";
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
document.querySelector("#signUp-footer").innerHTML = displayLoginFooter;

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
document.querySelector(".condition2").innerHTML = displayConditions;

const help = {
    link: "https://www.amazon.com/gp/help/customer/account-issues/ref=unified_claim_collection?ie=UTF8",
    text: "Need help?"
}
let displayhelp = `
<a href="${help.link}">${help.text}</a>
`;
document.querySelector(".help2").innerHTML = displayhelp;