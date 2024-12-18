document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".clickable-image");
    const modal = document.createElement("div");
    modal.className = "modal";
    const modalImage = document.createElement("img");
    modal.appendChild(modalImage);
    document.body.appendChild(modal);

    // 点击图片时放大
    images.forEach((image) => {
        image.addEventListener("click", () => {
            modalImage.src = image.src; // 将图片传入模态框
            modal.style.display = "flex";
        });
    });

    // 点击模态框时关闭
    modal.addEventListener("click", () => {
        modal.style.display = "none";
    });
});
