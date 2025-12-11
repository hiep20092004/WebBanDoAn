$(document).ready(function() {
    // 1. Load Header & Footer
    $("#top-section-placeholder").load("components/top-section.html", function() {
        // Active breadcrumb hoặc menu nếu cần
    });
    $("#footer-placeholder").load("components/footer.html");

    // 2. Tương tác Checkbox Nguyên liệu (Optional: Thêm hiệu ứng âm thanh hoặc highlight)
    $('.ingredient-item .form-check-input').change(function() {
        if(this.checked) {
            $(this).parent().css('background-color', '#f9f9f9');
        } else {
            $(this).parent().css('background-color', 'transparent');
        }
    });

    // 3. Nút Lưu công thức
    $('.btn-brand').click(function() {
        // Demo hiệu ứng đổi text
        let icon = $(this).find('i');
        if($(this).text().includes('Lưu')) {
            $(this).html('<i class="fas fa-check me-2"></i>Đã lưu');
            $(this).removeClass('btn-brand').addClass('btn-outline-success');
        } else {
            $(this).html('<i class="fas fa-heart me-2"></i>Lưu công thức');
            $(this).addClass('btn-brand').removeClass('btn-outline-success');
        }
    });

    $(document).ready(function() {
        // ... (Code cũ giữ nguyên) ...
    
        // 4. LOGIC CHỌN SAO ĐÁNH GIÁ (Interactive Star Rating)
        $('.rating-input i').click(function() {
            let value = $(this).data('value'); // Lấy giá trị sao (1-5)
            $('#ratingValue').val(value); // Lưu vào input ẩn
    
            // Reset: Chuyển tất cả về sao rỗng (far)
            $('.rating-input i').removeClass('fas').addClass('far');
    
            // Highlight: Chuyển các sao từ 1 đến vị trí chọn thành sao đặc (fas)
            $('.rating-input i').each(function(index) {
                if (index < value) {
                    $(this).removeClass('far').addClass('fas');
                }
            });
        });
        
        // Hover effect (Optional): Làm sao sáng khi di chuột qua (nếu muốn xịn hơn)
        $('.rating-input i').hover(
            function() {
                var hoverVal = $(this).data('value');
                $('.rating-input i').each(function(index) {
                    if (index < hoverVal) $(this).addClass('fas').removeClass('far');
                });
            },
            function() {
                // Khi chuột rời đi, trả lại trạng thái đã click
                var selectedVal = $('#ratingValue').val();
                $('.rating-input i').removeClass('fas').addClass('far'); // Reset hết
                $('.rating-input i').each(function(index) {
                    if (index < selectedVal) $(this).addClass('fas').removeClass('far');
                });
            }
        );
    });
});