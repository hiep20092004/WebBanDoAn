$(document).ready(function () {

    // Load toàn bộ khối đầu trang (Top Section)
    $("#top-section-placeholder3").load("components/top-section3.html", function () {
        console.log("Top Section (Header + Banner) loaded!");

        // Kích hoạt logic Sticky Header sau khi load xong
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.main-header').addClass('shadow-lg');
            } else {
                $('.main-header').removeClass('shadow-lg');
            }
        });
    });
    $("#footer-placeholder").load("components/footer.html", function () {
        console.log("Footer loaded!");
    });

    // 3. LOGIC KHÁC (Ví dụ: sự kiện click)
    // Lưu ý: Dùng Event Delegation cho các phần tử được load động
    $(document).on('click', '.search-btn', function (e) {
        // ... code tìm kiếm cũ ...
    });
    
});