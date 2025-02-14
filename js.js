$(document).ready(function(){
    // เลื่อนการ์ดขึ้นเมื่อเมาส์เข้า
    $(".valentines").mouseenter(function(){
        $(".card").stop().animate({ top: "-60px" }, "slow");
    }).mouseleave(function(){
        $(".card").stop().animate({ top: "0px" }, "slow");
    });
// การเปลี่ยนคลาสเมื่อโฮเวอร์ที่รูปภาพ
$(".img").on("mouseover", function(){
    let index = $(this).index();
    $(".img").each(function(i){
        if (i < index) {
            $(this).removeClass("hov next").addClass("prev");
        } else if (i === index) {
            $(this).removeClass("prev next").addClass("hov");
        } else {
            $(this).removeClass("hov prev").addClass("next");
        }
    });
});


    // เมื่อคลิกที่การ์ด
$(".card").click(function(event) {
    event.stopPropagation();  // ป้องกันการบับบเบิ้ลของอีเวนต์
    $(".item-3, .item-2").fadeTo("slow", 0.3);  // ลดความทึบของ .item-3 และ .item-2
    $(".popup-message").fadeIn();  // แสดง .popup-message
    $(".item-5, .item-1").fadeOut();  // ซ่อน .item-5 และ .item-1
    $(".gradient-bg").css("background", "url(src/images/b.jpg)");
    $(".gradient-bg").css("background-position", "1px 1600px");
});

// คลิกที่ body เพื่อปิด popup-message
$("body").click(function(event) {
    // เช็คว่าไม่ได้คลิกที่ .popup-message หรือ .card
    if (!$(event.target).closest('.popup-message, .card').length) {
        $(".popup-message").fadeOut();  // ซ่อน .popup-message
        $(".item-5, .item-1").fadeIn();  // แสดง .item-5 และ .item-1
        $(".item-3,.item-2").fadeTo("slow", 1);  // ฟื้นฟูความทึบของ .item-3 และ .item-2
        
        // รีเซ็ตพื้นหลังกลับเป็น gradient
        $(".gradient-bg").css("background", "linear-gradient(to bottom, #fff9ec, #f8c1ee)");
    }
});

// ป้องกันการคลิกที่ .popup-message จากการปิดตัวเอง
$(".popup-message").click(function(event) {
    event.stopPropagation();
});

    // เมื่อคลิกภาพให้เปิด lightbox
    $(".img").click(function() {
        let src = $(this).attr("src");
        let desc = $(this).attr("data-desc");
    
        $("#lightbox-img").attr("src", src);
        $("#lightbox-desc").text(desc);
    
        // ขยับ .item-5 ให้ชิดด้านล่างโดยเพิ่ม margin-top
        $(".item-5").css("margin-top", "120px");
        $(".item-5").fadeTo("slow", 0.3);

    $(".lightbox").fadeIn();
    });
    
    // ปิด lightbox
    $(".lightbox, .close").click(function() {
        $(".lightbox").fadeOut();
    
        // นำ margin-top กลับเป็นค่าเดิม
        $(".item-5").css("margin-top", "0px");
        $(".item-5").fadeTo("slow", 1);
    });
    
   
});
