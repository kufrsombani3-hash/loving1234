document.addEventListener("DOMContentLoaded", function () {

    // اظهار السنة تلقائياً في الفوتر
    var y = document.getElementById("year");
    if (y) {
        y.textContent = new Date().getFullYear();
    }


    // شاشة الترحيب في الصفحة الرئيسية
    var welcomeAnimation = document.getElementById("welcomeAnimation");
    if (welcomeAnimation) {
        setTimeout(function () {
            welcomeAnimation.style.display = "none";
        }, 4000);
    }
// تنسيق روابط التنقل بين الصفحات
var navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link){

    link.style.padding = "10px 18px";
    link.style.margin = "5px";
    link.style.textDecoration = "none";
    link.style.backgroundColor = "#ff914d";
    link.style.color = "white";
    link.style.borderRadius = "8px";
    link.style.fontWeight = "bold";
    link.style.transition = "0.3s";

    // تأثير عند مرور الماوس
    link.addEventListener("mouseover", function(){
        link.style.backgroundColor = "#ff6b00";
        link.style.transform = "scale(1.05)";
    });

    link.addEventListener("mouseout", function(){
        link.style.backgroundColor = "#ff914d";
        link.style.transform = "scale(1)";
    });

});

    // حركة آثار الأقدام في صفحة المعرض
    var paws = document.getElementById("paw-container");
    if (paws) {
        setTimeout(function () {
            paws.style.display = "none";
        }, 2500);
    }


    // تغيير الصورة الرئيسية عند الضغط على الصور الصغيرة
    var mainImg = document.getElementById("mainDogImage");
    var thumbs = document.querySelectorAll(".thumb");

    if (mainImg && thumbs.length > 0) {

        thumbs.forEach(function (thumb) {

            thumb.addEventListener("click", function () {

                var newImage = this.getAttribute("data-image");

                if (newImage) {
                    mainImg.src = newImage;

                    thumbs.forEach(function (t) {
                        t.classList.remove("active-thumb");
                    });

                    this.classList.add("active-thumb");
                }

            });

        });

    }


    // نموذج الحجز
    var form = document.getElementById("bookingForm");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            var name = document.getElementById("customerName").value.trim();
            var phone = document.getElementById("customerPhone").value.trim();
            var dog = document.getElementById("dogName").value.trim();
            var pack = document.getElementById("packageType").value;
            var date = document.getElementById("checkinDate").value;
            var msg = document.getElementById("msg");

            if (!name || !phone || !dog || !pack || !date) {

                if (msg) {
                    msg.textContent = "الرجاء تعبئة جميع الحقول المطلوبة.";
                    msg.style.color = "red";
                }

                return;
            }

            if (msg) {
                msg.textContent = "تم إرسال طلب الحجز بنجاح! سنتواصل معك قريباً.";
                msg.style.color = "green";
            }

            form.reset();

        });

    }


    // معرض الصور (Lightbox)
    var images = document.querySelectorAll(".gallery-img");
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");

    if (images.length > 0 && lightbox && lightboxImg) {

        images.forEach(function (img) {

            img.addEventListener("click", function () {

                lightbox.style.display = "flex";
                lightboxImg.src = this.src;

            });

        });

        lightbox.addEventListener("click", function () {

            lightbox.style.display = "none";

        });

    }


    // تكبير وتصغير الخط
    var zoomInBtn = document.getElementById("zoomInBtn");
    var zoomOutBtn = document.getElementById("zoomOutBtn");

    var fontSize = 100;

    if (zoomInBtn) {

        zoomInBtn.addEventListener("click", function () {

            fontSize += 10;
            document.documentElement.style.fontSize = fontSize + "%";

        });

    }

    if (zoomOutBtn) {

        zoomOutBtn.addEventListener("click", function () {

            if (fontSize > 70) {

                fontSize -= 10;
                document.documentElement.style.fontSize = fontSize + "%";

            }

        });

    }

});