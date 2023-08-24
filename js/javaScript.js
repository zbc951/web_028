$(function () {
    var swiper = new Swiper('.swiper-banner', {
        loop: true, //循環
        autoHeight: true, //自動高
        autoplay: {  //自動播放
            delay: 7500, //延遲
            disableOnInteraction: false, //互動後停止
            pauseOnMouseEnter: true, //滑鼠滑入時停止
        },
        slidesPerView: 1, //顯示個數
        spaceBetween: 0, //間距

        pagination: { //dot
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: { //arrow
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});


const header_fun = Vue.createApp({
    data() {
        return {
            lis: [
                { text: "首頁", active: true, url: "https://www.google.com.tw/?hl=zh-TW" },
                { text: "體育賽事", active: false, url: "https://www.google.com.tw/?hl=zh-TW" },
                { text: "真人娛樂", active: false, url: "https://www.google.com.tw/?hl=zh-TW" },
                { text: "老虎機", active: false, url: "https://www.google.com.tw/?hl=zh-TW" },
                { text: "彩票", active: false, url: "https://www.google.com.tw/?hl=zh-TW" },
                { text: "捕魚機", active: false, url: "https://www.google.com.tw/?hl=zh-TW" },
                { text: "棋牌遊戲", active: false, url: "https://www.google.com.tw/?hl=zh-TW" },
                { text: "優惠", active: false, url: "https://www.google.com.tw/?hl=zh-TW" },
                { text: "VIP會員", active: false, url: "https://www.google.com.tw/?hl=zh-TW" },
            ],
        };
    },
    methods: {
        active(index) {
            this.lis.forEach((item, i) => {
                item.active = i === index;
            });
        },
    },
}); header_fun.mount("header");


const main_fun = Vue.createApp({
    data() {
        return {
            games: [
                { class: "live_1", imgSrc: "./img/live_1.png", name: "AA真人娛樂" },
                { class: "live_2", imgSrc: "./img/live_2.png", name: "SS真人娛樂" },
                { class: "slot_1", imgSrc: "./img/slot_1.png", name: "BBB老虎機" },
                { class: "slot_2", imgSrc: "./img/slot_2.png", name: "CCC老虎機" },
                { class: "board_1", imgSrc: "./img/board_1.png", name: "ABC棋牌遊戲" },
                { class: "lottery_1", imgSrc: "./img/lottery_1.png", name: "ABC彩票" },
                { class: "sport_1", imgSrc: "./img/sport_1.png", name: "DEF體育" },
                { class: "fish_1", imgSrc: "./img/fish_1.png", name: "TT捕魚機" },
            ],
        }
    },
    methods: {

    },
}); main_fun.mount("main");


const footer_fun = Vue.createApp({
    data() {
        return {
            lis: [
                { text: "最新公告", active: true, url: "https://www.google.com.tw/?hl=zh-TW" },
                { text: "優惠", active: false, url: "https://www.google.com.tw/?hl=zh-TW" },
                { text: "VIP會員", active: false, url: "https://www.google.com.tw/?hl=zh-TW" },
                { text: "幫助中心", active: false, url: "https://www.google.com.tw/?hl=zh-TW" },
                { text: "關於我們", active: false, url: "https://www.google.com.tw/?hl=zh-TW" },
                { text: "加入我們", active: false, url: "https://www.google.com.tw/?hl=zh-TW" },
            ],
        }
    },
    methods: {
        active(index) {
            this.lis.forEach((item, i) => {
                item.active = i === index;
            });
        },
    },
}); footer_fun.mount("footer");


const aside_fun = Vue.createApp({
    data() {
        return {
            showToTop: false,
            as: [
                { class: "service", name: "24hr客服", url: "https://www.google.com.tw/?hl=zh-TW" },
                { class: "line", name: "LINE", url: "https://www.google.com.tw/?hl=zh-TW" },
                { class: "weCha", name: "WAW", url: "https://www.google.com.tw/?hl=zh-TW" },
            ],
        };
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        },
    },
    mounted() {
        window.addEventListener("scroll", () => {
            this.showToTop = window.scrollY > 500;
        });
    }
}); aside_fun.mount("aside")

$(function () {
    $("main .gameType ul li .gameName").hover(function () {
        $(this).siblings(".box").toggleClass("active");
    });
    $("main .gameType ul li .box").hover(function () {
        $(this).siblings(".gameName").toggleClass("active");
    });
});
