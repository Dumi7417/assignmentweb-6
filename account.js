document.addEventListener("DOMContentLoaded", () => {
    const profileImage = document.getElementById("profileImage");
    const profileImageInput = document.getElementById("profileImageInput");
    const uploadForm = document.getElementById("uploadForm");
    const changeImageBtn = document.getElementById("changeImageBtn");
    const removeImageBtn = document.getElementById("removeImageBtn");
    const uploadImageBtn = document.getElementById("uploadImageBtn");
    const userName = document.getElementById("userName");
    const userEmail = document.getElementById("userEmail"); // Поменяем это на пароль

    // Показать форму загрузки
    changeImageBtn.addEventListener("click", () => {
        uploadForm.classList.remove("hidden");
    });

    // Загрузка изображения
    uploadImageBtn.addEventListener("click", () => {
        const file = profileImageInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                profileImage.src = reader.result;
                localStorage.setItem("profileImage", reader.result); // Сохранить изображение в localStorage
            };
            reader.readAsDataURL(file);
        }
        uploadForm.classList.add("hidden"); // Скрыть форму после загрузки
    });

    // Удаление изображения
    removeImageBtn.addEventListener("click", () => {
        profileImage.src = "default-profile.png";
        localStorage.removeItem("profileImage");
    });

    // Проверить, есть ли сохраненное изображение
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
        profileImage.src = savedImage;
    }

    // Получить и отобразить имя пользователя и пароль
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem(storedUsername);
    if (storedUsername && storedPassword) {
        userName.textContent = storedUsername;
        userEmail.textContent = `Password: ${storedPassword}`;
    } else {
        // Перенаправление на страницу входа, если имя пользователя или пароль не найден
        window.location.href = "login.html";
    }
});
