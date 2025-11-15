/*
  KOMENTARZ (POPRAWKA): Poniższa lista została zmieniona.
  Usunięto wszystkie ukośniki (/) z początku ścieżek,
  aby działały poprawnie (jako ścieżki względne) na GitHub Pages.
*/
const PLIKI_DO_CACHE = [
  'index.html',        // Ścieżka względna (POPRAWNIE)
  'imieniny.js',       // Ścieżka względna (POPRAWNIE)
  'swieta.js',         // Ścieżka względna (POPRAWNIE)
  'suncalc.min.js',   // Ścieżka względna (POPRAWNIE)
  'icon-192x192.png',  // Ścieżka względna (POPRAWNIE)
  'icon-512x512.png',  // Ścieżka względna (POPRAWNIE)
  'manifest.json'      // Dodany manifest (POPRAWNIE)
];

/* Cała reszta Twojego pliku sw.js 
  (addEventListener 'install', 'activate', 'fetch'...)
  jest już poprawna i może pozostać bez zmian.
*/

// --- ETAP 1: INSTALACJA ---
// To się dzieje tylko raz, gdy Service Worker jest instalowany.
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Instalacja...');
  
  // 'waitUntil' każe przeglądarce poczekać, aż obietnica (promise) się zakończy.
  event.waitUntil(
    // Otwieramy naszą pamięć podręczną (cache) o zdefiniowanej nazwie.
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Otwieranie pamięci podręcznej i cachowanie plików szkieletu');
        // Dodajemy wszystkie pliki z naszej listy do cache.
        // Jeśli którykolwiek plik się nie pobierze, cała instalacja się nie uda.
        return cache.addAll(PLIKI_DO_CACHE);
      })
  );
});

// --- ETAP 2: AKTYWACJA ---
// To się dzieje po instalacji. Służy głównie do czyszczenia starych cache.
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Aktywacja...');
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        // Jeśli nazwa cache nie pasuje do naszej aktualnej nazwy (CACHE_NAME),
        // usuwamy ją. To zapewnia, że stare wersje plików są czyszczone.
        if (key !== CACHE_NAME) {
          console.log('[Service Worker] Usuwanie starej pamięci podręcznej:', key);
          return caches.delete(key);
        }
      }));
    })
  );
  // 'clients.claim()' pozwala nowemu Service Workerowi przejąć kontrolę
  // nad stroną natychmiast, bez czekania na przeładowanie.
  return self.clients.claim();
});


// --- ETAP 3: PRZECHWYTYWANIE (FETCH) ---
// To jest główna logika. Uruchamia się ZA KAŻDYM razem, gdy strona
// próbuje pobrać jakikolwiek zasób (HTML, JS, CSS, obrazek).
self.addEventListener('fetch', (event) => {
  console.log('[Service Worker] Przechwytywanie żądania:', event.request.url);
  
  // 'respondWith' przechwytuje żądanie i pozwala nam zdecydować, co zwrócić.
  event.respondWith(
    // Najpierw sprawdzamy, czy żądany plik jest już w naszej pamięci podręcznej.
    caches.match(event.request)
      .then((response) => {
        // Jeśli JEST w cache (response istnieje):
        if (response) {
          console.log('[Service Worker] Zwracanie z cache:', event.request.url);
          // Zwracamy plik z cache. To jest super szybkie i działa offline.
          return response;
        }

        // Jeśli NIE MA w cache (np. jakieś inne żądanie, którego nie przewidzieliśmy):
        console.log('[Service Worker] Zwracanie z sieci (nie ma w cache):', event.request.url);
        // Próbujemy pobrać go normalnie z sieci.
        return fetch(event.request);
      }
    )
  );
});


