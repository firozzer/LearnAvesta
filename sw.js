// just a placeholder comment to ensure cache gets refresh. vvv8djfk

self.addEventListener("install", e => {
e.waitUntil(
    caches.open("static").then(cache => { //items for the PWA need to be mentioned here individually. The Prefetch & Preload in HTML header is just for the webpage.
        return cache.addAll(["./", "./css/styles.css", "./js/app.js", "./img/logo512.png", "index.html", "./res/Jamshed.ttf",
            "https://fonts.googleapis.com/icon?family=Material+Icons", "./js/game.js", "./js/game2.js", "./js/stolen.js",
            "./css/game.css", "./pages/game.html", "https://rawgit.com/web-animations/web-animations-js/master/web-animations.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css", "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js",
            "./img/avestaLetters/1.png", "./img/avestaLetters/2.png", "./img/avestaLetters/3.png", "./img/avestaLetters/4.png", "./img/avestaLetters/5.png", "./img/avestaLetters/6.png", "./img/avestaLetters/7.png",
            "./img/avestaLetters/8.png", "./img/avestaLetters/9.png", "./img/avestaLetters/10.png", "./img/avestaLetters/11.png", "./img/avestaLetters/12.png", "./img/avestaLetters/13.png", "./img/avestaLetters/14.png", "./img/avestaLetters/15.png", "./img/avestaLetters/16.png",
            "./img/avestaLetters/17.png", "./img/avestaLetters/18.png", "./img/avestaLetters/19.png", "./img/avestaLetters/20.png", "./img/avestaLetters/21.png", "./img/avestaLetters/22.png", "./img/avestaLetters/23.png", "./img/avestaLetters/24.png", "./img/avestaLetters/25.png",
            "./img/avestaLetters/26.png", "./img/avestaLetters/27.png", "./img/avestaLetters/28.png", "./img/avestaLetters/29.png", "./img/avestaLetters/30.png", "./img/avestaLetters/31.png", "./img/avestaLetters/32.png", "./img/avestaLetters/33.png", "./img/avestaLetters/34.png",
            "./img/avestaLetters/35.png", "./img/avestaLetters/36.png", "./img/avestaLetters/37.png", "./img/avestaLetters/38.png", "./img/avestaLetters/39.png", "./img/avestaLetters/41.png", "./img/avestaLetters/42.png", "./img/avestaLetters/43.png", "./img/avestaLetters/44.png",
            "./img/avestaLetters/45.png", "./img/avestaLetters/46.png", "./img/avestaLetters/47.png", "./img/avestaLetters/48.png", "./img/avestaLetters/49.png", "./img/avestaLetters/50.png",
            "./img/transcpAnswers/1.png", "./img/transcpAnswers/2.png", "./img/transcpAnswers/3.png", "./img/transcpAnswers/4.png", "./img/transcpAnswers/5.png", "./img/transcpAnswers/6.png", "./img/transcpAnswers/7.png",
            "./img/transcpAnswers/8.png", "./img/transcpAnswers/9.png", "./img/transcpAnswers/10.png", "./img/transcpAnswers/11.png", "./img/transcpAnswers/12.png", "./img/transcpAnswers/13.png", "./img/transcpAnswers/14.png", "./img/transcpAnswers/15.png", "./img/transcpAnswers/16.png",
            "./img/transcpAnswers/17.png", "./img/transcpAnswers/18.png", "./img/transcpAnswers/19.png", "./img/transcpAnswers/20.png", "./img/transcpAnswers/21.png", "./img/transcpAnswers/22.png", "./img/transcpAnswers/23.png", "./img/transcpAnswers/24.png", "./img/transcpAnswers/25.png",
            "./img/transcpAnswers/26.png", "./img/transcpAnswers/27.png", "./img/transcpAnswers/28.png", "./img/transcpAnswers/29.png", "./img/transcpAnswers/30.png", "./img/transcpAnswers/31.png", "./img/transcpAnswers/32.png", "./img/transcpAnswers/33.png", "./img/transcpAnswers/34.png",
            "./img/transcpAnswers/35.png", "./img/transcpAnswers/36.png", "./img/transcpAnswers/37.png", "./img/transcpAnswers/38.png", "./img/transcpAnswers/39.png", "./img/transcpAnswers/41.png", "./img/transcpAnswers/42.png", "./img/transcpAnswers/43.png", "./img/transcpAnswers/44.png",
            "./img/transcpAnswers/45.png", "./img/transcpAnswers/46.png", "./img/transcpAnswers/47.png", "./img/transcpAnswers/48.png", "./img/transcpAnswers/49.png", "./img/transcpAnswers/50.png", "./img/transcpAnswers/bgcolor.jpg"
            ])
        })
    )
});

self.addEventListener("fetch", e=> {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request)
        })
    )
});
