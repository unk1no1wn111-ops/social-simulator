const ADMIN_CODE = "12345";

function openAdmin() {
    const code = prompt("أدخل كود Admin:");

    if (code === ADMIN_CODE) {
        window.location.href = "admin.html";
    } else {
        alert("كود Admin غير صحيح");
    }
}

function updateHome() {
    const balance = Number(localStorage.getItem("balance")) || 0;
    const followers = Number(localStorage.getItem("followers")) || 0;

    const balanceElement = document.querySelector(".balance");
    const followersElement = document.getElementById("followers");

    if (balanceElement) {
        balanceElement.textContent =
            "الرصيد: $" + balance.toLocaleString();
    }

    if (followersElement) {
        followersElement.textContent =
            followers.toLocaleString();
    }
}

updateHome();
