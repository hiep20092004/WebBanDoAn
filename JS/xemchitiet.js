$(document).ready(function () {
    // 1. Load Header & Footer
    $("#top-section-placeholder").load("components/top-section.html", function () {
        // Active breadcrumb hoặc menu nếu cần
    });
    $("#footer-placeholder").load("components/footer.html");

    // 2. Tương tác Checkbox Nguyên liệu (Optional: Thêm hiệu ứng âm thanh hoặc highlight)
    $('.ingredient-item .form-check-input').change(function () {
        if (this.checked) {
            $(this).parent().css('background-color', '#f9f9f9');
        } else {
            $(this).parent().css('background-color', 'transparent');
        }
    });

    $(document).ready(function () {
        // ... (Code cũ giữ nguyên) ...

        // 4. LOGIC CHỌN SAO ĐÁNH GIÁ (Interactive Star Rating)
        $('.rating-input i').click(function () {
            let value = $(this).data('value'); // Lấy giá trị sao (1-5)
            $('#ratingValue').val(value); // Lưu vào input ẩn

            // Reset: Chuyển tất cả về sao rỗng (far)
            $('.rating-input i').removeClass('fas').addClass('far');

            // Highlight: Chuyển các sao từ 1 đến vị trí chọn thành sao đặc (fas)
            $('.rating-input i').each(function (index) {
                if (index < value) {
                    $(this).removeClass('far').addClass('fas');
                }
            });
        });

        // Hover effect (Optional): Làm sao sáng khi di chuột qua (nếu muốn xịn hơn)
        $('.rating-input i').hover(
            function () {
                var hoverVal = $(this).data('value');
                $('.rating-input i').each(function (index) {
                    if (index < hoverVal) $(this).addClass('fas').removeClass('far');
                });
            },
            function () {
                // Khi chuột rời đi, trả lại trạng thái đã click
                var selectedVal = $('#ratingValue').val();
                $('.rating-input i').removeClass('fas').addClass('far'); // Reset hết
                $('.rating-input i').each(function (index) {
                    if (index < selectedVal) $(this).addClass('fas').removeClass('far');
                });
            }
        );
    });

    // --- LOGIC VIDEO PLAYER ---
    $(document).ready(function() {
        // ... (Các code load header/footer cũ giữ nguyên) ...
    
        // --- LOGIC VIDEO PLAYER (ĐÃ SỬA LỖI) ---
        
        // Lấy các phần tử cần thiết
        var videoElement = document.getElementById("recipeVideo");
        var $videoContainer = $(".main-video-box");
        var $playButtonOverlay = $(".custom-play-overlay");
    
        // 1. Xử lý khi bấm vào nút Play to ở giữa
        $playButtonOverlay.click(function() {
            if (videoElement.paused) {
                videoElement.play();
            } else {
                videoElement.pause();
            }
        });
    
        // 2. Lắng nghe sự kiện từ video (Play/Pause)
        // Logic này giúp đồng bộ cả khi người dùng bấm vào thanh điều khiển mặc định của video
        $(videoElement).on('play', function() {
            console.log("Video đang chạy...");
            $videoContainer.addClass("video-playing");
        });
    
        $(videoElement).on('pause', function() {
            console.log("Video đã dừng.");
            $videoContainer.removeClass("video-playing");
        });
    
        $(videoElement).on('ended', function() {
            console.log("Video kết thúc.");
            $videoContainer.removeClass("video-playing");
            // Có thể thêm logic hiện lại poster nếu muốn: videoElement.load();
        });
    });
});