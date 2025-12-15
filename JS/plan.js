document.addEventListener("DOMContentLoaded", function() {
    // Khởi tạo Swiper
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.5, // Mobile: Xem 1 cột rưỡi
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // Khi màn hình >= 640px
            640: {
                slidesPerView: 2.5,
                spaceBetween: 15,
            },
            // Khi màn hình >= 768px
            768: {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
            // Khi màn hình >= 1024px (Desktop)
            1024: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
    });

    // Code xử lý thêm (nếu cần):
    // Ví dụ: Bắt sự kiện click vào nút filter
    const filterBtns = document.querySelectorAll('.btn-filter');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Xóa class active ở nút cũ
            document.querySelector('.btn-filter.active').classList.remove('active');
            // Thêm class active vào nút vừa click
            this.classList.add('active');
            
            // TODO: Logic lọc thực đơn có thể thêm ở đây
            console.log('Đã chọn bộ lọc: ' + this.innerText);
        });
    });
});