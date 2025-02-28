// تعريف الدالة لإظهار المفاجأة عند الضغط على الزر
function showSurprise() {
    // إظهار المحتوى المخفي بعد الضغط
    document.getElementById("surprise").style.display = "block";

    // تغيير الخلفية إلى اللون الرمادي الغامق عند الضغط
    document.body.classList.add("dark-mode");
}
