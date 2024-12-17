document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // 检查本地存储中是否有主题设置
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    // 点击按钮时切换主题
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});
