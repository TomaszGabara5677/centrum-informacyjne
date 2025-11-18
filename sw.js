// Nazwa naszej pamięci podręcznej (cache).
// WAŻNE: Zmiana tej nazwy (np. na 'v2', 'v3') przy aktualizacji plików
// automatycznie uruchomi proces 'activate' i wyczyści stare cache.
const CACHE_NAME = 'v1';

// Lista plików stanowiących "szkielet" aplikacji (App Shell).
// Są to kluczowe zasoby potrzebne do uruchomienia aplikacji offline.
// Wszystkie ścieżki muszą być względne (bez '/') aby działały
// poprawnie na różnych platformach hostingowych (np. GitHub Pages).
const PLIKI_DO_CACHE = [
  'index.html',
  'imieniny.js',
  'swieta.js',
  'suncalc.min.js',
  'icon-192x192.png',
  'icon-512x512.png',
  'manifest.json'
];

// --- ETAP 1: INSTALACJA (install) ---

// Ten nasłuchiwacz (listener) jest wywoływany tylko raz,
// gdy nowy Service Worker jest rejestrowany i instalowany przez przeglądarkę.
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Rozpoczęcie procesu instalacji...');

  // event.waitUntil() jest kluczowe. Nakazuje przeglądarce, aby "poczekała"
  // z zakończeniem fazy instalacji, aż zadanie wewnątrz (obietnica) się powiedzie.
  // Jeśli obietnica (promise) się nie powiedzie (zostanie odrzucona),
  // instalacja Service Workera zostanie anulowana.
  event.waitUntil(
    // caches.open() otwiera (lub tworzy, jeśli nie istnieje) pamięć podręczną
    // o nazwie zdefiniowanej w stałej CACHE_NAME. Zwraca obietnicę (promise).
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Ten blok .then() wykonuje się, gdy cache jest już pomyślnie otwarty.
        // Obiekt 'cache' jest teraz dostępny.
        console.log('[Service Worker] Pamięć podręczna otwarta. Dodawanie plików szkieletu (App Shell)...');
        
        // cache.addAll() to metoda atomowa. Pobiera listę adresów URL (naszą stałą PLIKI_DO_CACHE),
        // pobiera każdy plik z sieci, a następnie dodaje go do pamięci podręcznej.
        // "Atomowa" oznacza, że jeśli choćby JEDEN plik z listy się nie pobierze
        // (np. błąd 404, błąd sieci), cała operacja .addAll() kończy się niepowodzeniem,
        // obietnica (promise) jest odrzucana, a instalacja Service Workera się nie udaje.
        // To gwarantuje, że cache jest kompletny albo nie ma go wcale.
        return cache.addAll(PLIKI_DO_CACHE);
      })
  );
});

// --- ETAP 2: AKTYWACJA (activate) ---

// Ten nasłuchiwacz jest wywoływany, gdy nowy Service Worker (SW) został pomyślnie
// zainstalowany i jest gotowy do przejęcia kontroli (ale stary SW może jeszcze działać).
// Główne zadanie tego etapu to zarządzanie starymi pamięciami podręcznymi.
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Aktywacja i przejmowanie kontroli...');
  
  // Ponownie używamy event.waitUntil(), aby przeglądarka poczekała
  // na zakończenie procesu czyszczenia starych danych.
  event.waitUntil(
    // caches.keys() zwraca listę (tablicę) wszystkich nazw pamięci podręcznych,
    // jakie ten Service Worker zna.
    caches.keys().then((keyList) => {
      // Musimy poczekać na usunięcie WSZYSTKICH starych cache,
      // dlatego używamy Promise.all(), która czeka, aż wszystkie obietnice
      // wewnątrz tablicy (stworzonej przez .map()) zostaną rozwiązane.
      return Promise.all(keyList.map((key) => {
        
        // 'key' to nazwa pojedynczej pamięci podręcznej (np. 'v1', 'v2').
        // Sprawdzamy, czy nazwa tego cache ('key') jest INNA niż nazwa
        // naszego aktualnego, pożądanego cache (CACHE_NAME).
        if (key !== CACHE_NAME) {
          // Jeśli nazwa jest inna, oznacza to, że jest to stary cache
          // (np. z poprzedniej wersji aplikacji, która używała 'v1', a my teraz mamy 'v2').
          console.log('[Service Worker] Usuwanie starej pamięci podręcznej:', key);
          // Zwracamy obietnicę (promise) z caches.delete(key),
          // która usuwa ten konkretny stary cache.
          return caches.delete(key);
        }
        // Jeśli nazwy są takie same, nie robimy nic (zwracamy 'undefined',
        // co Promise.all interpretuje jako pomyślnie zakończone zadanie).
      }));
    })
  );

  // self.clients.claim() to "magiczna" linijka, która jest bardzo ważna.
  // Domyślnie, nowy Service Worker czeka, aż wszystkie otwarte karty (clients)
  // zostaną zamknięte, zanim przejmie kontrolę.
  // .claim() nakazuje mu: "Przejmij kontrolę nad wszystkimi otwartymi
  // kartami NATYCHMIAST, nie czekaj na przeładowanie strony".
  // Dzięki temu strona działa z nowym SW od razu po aktywacji.
  return self.clients.claim();
});

// --- ETAP 3: PRZECHWYTYWANIE ŻĄDAŃ (fetch) ---

// To jest serce Service Workera. Ten nasłuchiwacz uruchamia się
// ZA KAŻDYM razem, gdy strona (kontrolowana przez tego SW)
// próbuje wysłać jakiekolwiek żądanie sieciowe (pobrać plik HTML, JS, CSS, obrazek, dane z API itp.).
self.addEventListener('fetch', (event) => {
  console.log('[Service Worker] Przechwycono żądanie (fetch) dla:', event.request.url);
  
  // event.respondWith() to metoda, która pozwala nam "przejąć" to żądanie
  // i zdecydować, co zwrócić zamiast domyślnego zachowania sieciowego.
  // Musimy jej dostarczyć obietnicę (promise), która rozwiąże się
  // do obiektu odpowiedzi (Response).
  event.respondWith(
    // Implementujemy tutaj strategię "Cache First" (Najpierw Cache).
    // Najpierw szukamy zasobu w naszej pamięci podręcznej.
    // caches.match(event.request) sprawdza wszystkie pamięci podręczne
    // zarządzane przez tego SW i szuka dopasowania do wysłanego żądania.
    caches.match(event.request)
      .then((response) => {
        // Ten blok .then() wykonuje się, gdy .match() zakończy wyszukiwanie.
        // 'response' będzie albo znalezionym zasobem z cache,
        // albo 'undefined', jeśli nic nie znaleziono.

        // PRZYPADEK 1: Zasób JEST w pamięci podręcznej.
        if (response) {
          console.log('[Service Worker] Znaleziono w cache. Zwracam z cache:', event.request.url);
          // Jeśli 'response' istnieje (nie jest 'undefined'), to znaczy, że mamy
          // ten zasób w cache. Zwracamy go natychmiast.
          // To jest super szybkie i działa w trybie offline.
          return response;
        }

        // PRZYPADEK 2: Zasobu NIE MA w pamięci podręcznej.
        // Dzieje się tak np. dla zasobów, których nie dodaliśmy do PLIKI_DO_CACHE
        // (np. żądania do zewnętrznego API, inne obrazki).
        console.log('[Service Worker] Nie znaleziono w cache. Próbuję pobrać z sieci:', event.request.url);
        
        // Skoro nie mamy go w cache, próbujemy go pobrać normalnie z sieci
        // za pomocą standardowej funkcji fetch().
        // Zwracamy wynik tego żądania sieciowego.
        // Jeśli sieć jest offline, to żądanie fetch() się nie uda
        // (odrzuci obietnicę), a strona zobaczy błąd sieciowy
  g     // (co jest oczekiwanym zachowaniem dla zasobów, których nie cachowaliśmy).
        return fetch(event.request);
      }
    )
  );
});


