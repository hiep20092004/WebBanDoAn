$(document).ready(function() {
    // Load Header & Footer
    $("#top-section-placeholder").load("components/top-section.html", function() {
        // Active menu "Thực đơn" trên header
        $(".nav-link:contains('Thực đơn')").addClass('text-success');
    });
    $("#footer-placeholder").load("components/footer.html");

    // Xử lý nút Filter Tab (Tất cả / Gợi ý / Yêu thích)
    $('.btn-custom-tab').click(function() {
        // Xóa active ở các nút khác
        $('.btn-custom-tab').removeClass('active');
        // Thêm active vào nút vừa click
        $(this).addClass('active');
        
        // Demo đổi màu số lượng kết quả cho sinh động
        $('.result-count span').fadeOut(200, function() {
            $(this).text(Math.floor(Math.random() * 3000) + " Món ăn").fadeIn(200);
        });
    });
    
    // Xử lý nút tim (Heart)
    $('.btn-heart').click(function(e) {
        e.stopPropagation(); // Ngăn sự kiện click lan ra card
        $(this).toggleClass('active');
        if($(this).hasClass('active')) {
            $(this).css('color', '#e31e24'); // Đổi màu đỏ
            $(this).find('i').removeClass('far').addClass('fas'); // Icon đặc
        } else {
            $(this).css('color', '#888');
            $(this).find('i').removeClass('fas').addClass('fas'); // Icon rỗng
        }
    });
});