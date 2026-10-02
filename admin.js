let balance = Number(localStorage.getItem("balance")) || 0;
let followers = Number(localStorage.getItem("followers")) || 0;

function updateDisplay() {
    document.getElementById("adminBalance").textContent =
        balance.toLocaleString();

    document.getElementById("adminFollowers").textContent =
        followers.toLocaleString();
}

function addMoney() {
    const amount = Number(prompt("كم تريد إضافة من الرصيد الافتراضي؟"));

    if (amount > 0) {
        balance += amount;
        localStorage.setItem("balance", balance);
        updateDisplay();
    }
}

function addFollowers() {
    const amount = Number(prompt("كم متابعًا تجريبيًا تريد إضافته؟"));

    if (amount > 0) {
        followers += amount;
        localStorage.setItem("followers", followers);
        updateDisplay();
    }
}

function addMillion() {
    balance += 1000000;
    localStorage.setItem("balance", balance);
    updateDisplay();

    alert("تمت إضافة 1,000,000$ إلى الرصيد.");
}

updateDisplay();
