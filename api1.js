document.addEventListener("DOMContentLoaded", () => {
    // API'nin URL'sini belirtin
    const api_url = "https://jsonplaceholder.typicode.com/users";

    // Kullanıcı listesi için bir yer seçin
    const userList = document.getElementById("user-list");

    // API isteğini gönderin
    fetch(api_url)
        .then((response) => {
            // Yanıtın durum kodunu kontrol edin (200, başarılı istek anlamına gelir)
            if (response.status === 200) {
                // JSON verilerini çözümleyin
                return response.json();
            } else {
                throw new Error("API isteği başarısız. Durum Kodu: " + response.status);
            }
        })
        .then((data) => {
            // Kullanıcı verilerini işleyin ve listeleyin
            data.forEach((user) => {
                const listItem = document.createElement("li");
                listItem.textContent = `${user.name} (${user.email})`;
                userList.appendChild(listItem);
            });
        })
        .catch((error) => {
            console.error("API'ye ulaşırken hata oluştu:", error);
        });
});
