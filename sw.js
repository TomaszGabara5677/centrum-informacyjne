// KOMENTARZ (Dlaczego?):
// Definiujemy unikalną nazwę dla naszej "skrzynki" (pamięci podręcznej).
// Jeśli kiedykolwiek zaktualizujesz aplikację, zmienisz 'v1' na 'v2',
// a telefon automatycznie pobierze nowe pliki.
const CACHE_NAME = 'zegar-centrum-cache-v1';

// KOMENTARZ (Dlaczego?):
// To jest lista zakupów. Wymieniamy tu WSZYSTKIE pliki,
// które są absolutnie niezbędne do działania aplikacji.
// Musimy tu dodać wszystko, co będziemy wgrywać na GitHub.
const PLIKI_DO_ZAPISANIA = [
    './', // Reprezentuje stronę główną
    './index.html',
    './imieniny.js',
    './swieta.js',
    './suncalc.min.js',
    './manifest.json',
    './icon-192x192.png', // Ikona
    './icon-512x512.png'  // Większa ikona
];

// === ETAP 1: INSTALACJA (Uruchamiany tylko raz) ===

// KOMENTARZ (Dlaczego?):
// To zdarzenie (event) jest wywoływane, gdy Service Worker jest instalowany
// po raz pierwszy (przy pierwszej wizycie na stronie).
self.addEventListener('install', (event) => {
    // KOMENTARZ (Dlaczego?):
    // 'event.waitUntil' każe przeglądarce poczekać, aż obietnica (promise) się zakończy.
    // Nie zakończymy instalacji, dopóki wszystkie pliki nie znajdą się w cache'u.
    event.waitUntil(
        // Otwieramy naszą "skrzynkę" (Cache) o zdefiniowanej nazwie.
        caches.open(CACHE_NAME)
            .then((cache) => {
                // Gdy skrzynka jest otwarta, mówimy jej:
                // "Pobierz wszystkie pliki z naszej listy zakupów (PLIKI_DO_ZAPISANIA)
                // i zapisz je tutaj na stałe."
                console.log('Service Worker: Zapisywanie plików aplikacji do cache...');
                return cache.addAll(PLIKI_DO_ZAPISANIA);
            })
    );
});

// === ETAP 2: PRZECHWYTYWANIE ŻĄDAŃ (Działa za każdym razem) ===

// KOMENTARZ (Dlaczego?):
// To jest główna "magia" trybu offline. To zdarzenie jest wywoływane
// ZA KAŻDYM RAZEM, gdy Twoja strona (HTML) próbuje pobrać jakikolwiek zasób
// (inny plik JS, obrazek, cokolwiek).
self.addEventListener('fetch', (event) => {
    // KOMENTARZ (Dlaczego?):
    // 'event.respondWith' pozwala nam przechwycić żądanie sieciowe
    // i zdecydować, co zwrócić aplikacji.
    event.respondWith(
        // Najpierw sprawdzamy, czy mamy już ten plik w naszej "skrzynce" (Cache).
        caches.match(event.request)
            .then((response) => {
                // KOMENTARZ (Dlaczego?):
                // Jeśli 'response' istnieje, to znaczy, że znaleźliśmy plik w cache'u.
                // Zwracamy go natychmiast, całkowicie pomijając internet.
                // To sprawia, że aplikacja ładuje się błyskawicznie, nawet offline.
                if (response) {
                    // console.log('Service Worker: Zwracam plik z cache: ', event.request.url);
                    return response;
                }

                // KOMENTARZ (Dlaczego?):
                // Jeśli pliku nie było w cache'u (np. to było jakieś dziwne
                // żądanie, którego nie przewidzieliśmy), po prostu próbujemy
                // pobrać go normalnie z internetu, tak jakby Service Worker nie istniał.
                // console.log('Service Worker: Nie ma w cache, pobieram z sieci: ', event.request.url);
                return fetch(event.request);
            }
        )
    );
});