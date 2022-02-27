var listPlaylist = [{
        name: "Thế Giới V-Pop",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist1.WEBP"
    },
    {

        name: "Nghe Nhạc Việt Tại Đây",
        creator: "Vietnamese",
        image: "./assets/img/playlists/playlist2.WEBP"
    },
    {
        name: "Nhạc Tuyển Quốc Tế",
        creator: "US-UK",
        image: "./assets/img/playlists/playlist3.WEBP"
    },
    {
        name: "Rap Việt Hay Nhất",
        creator: "Rap Việt",
        image: "./assets/img/playlists/playlist4.WEBP"
    },
    {
        name: "Cà Phê Thưởng Thức",
        creator: "H Music",
        image: "./assets/img/playlists/playlist5.WEBP"
    },
    {
        name: "Những bản nhạc Cover hay nhất",
        creator: "H Music",
        image: "./assets/img/playlists/playlist6.WEBP"
    },
    {
        name: "Những Ca Khúc Hay Nhất Của ERIK",
        creator: "ERIK",
        image: "./assets/img/playlists/playlist7.WEBP"
    },
    {
        name: "US-UK Tháng này",
        creator: "H Music",
        image: "./assets/img/playlists/playlist8.WEBP"
    },
    {
        name: "Sơn Tùng MTP và những kiệt tác",
        creator: "H Music",
        image: "./assets/img/playlists/playlist9.jpg"
    },
    {
        name: "Thế Giới V-Pop Tuyển Chọn",
        creator: "H Music",
        image: "./assets/img/playlists/playlist10.jpg"
    },
    {
        name: "FOXES",
        creator: "H Music",
        image: "./assets/img/playlists/playlist11.jpg"
    },
    {
        name: "Nhạc Này Rất Là Chill",
        creator: "H Music",
        image: "./assets/img/playlists/playlist12.jpg"
    },
    {
        name: "BINZ và SOOBIN",
        creator: "Rap Việt",
        image: "./assets/img/playlists/playlist13.jpg"
    },
    {
        name: "Thứ bảy cùng H-Music",
        creator: "H Music",
        image: "./assets/img/playlists/playlist14.JPG"
    },
    {
        name: "Những MV Hay Nhất Của Rap Việt",
        creator: "H Music",
        image: "./assets/img/playlists/playlist15.WEBP"
    },
    {
        name: "Top 100 NEW AGE",
        creator: "H Music",
        image: "./assets/img/playlists/playlist16.WEBP"
    },
    {
        name: "Chill cùng Binz",
        creator: "H Music",
        image: "./assets/img/playlists/playlist17.WEBP"
    },
    {
        name: "Những Bài Hát Hay Nhất Của Jack",
        creator: "H Music",
        image: "./assets/img/playlists/playlist18.WEBP"
    },
    {
        name: "Nhạc Bất Hủ",
        creator: "H Music",
        image: "./assets/img/playlists/playlist19.WEBP"
    },
];

const PLAYLIST_STORAGE_KEY = 'VIK_PLAYLIST';

localStorage.setItem(PLAYLIST_STORAGE_KEY, JSON.stringify(listPlaylist));