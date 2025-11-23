# 📖 Legenda i Opis Funkcji Centrum Informacyjnego

Ten dokument wyjaśnia, jak odczytywać dane prezentowane na ekranie **Centrum Informacyjnego**. Interfejs został zaprojektowany w stylu "dashboardu", gdzie każda sekcja dostarcza kluczowych informacji w czasie rzeczywistym.

---

## 1. Górny pasek (Nagłówek)

Ta sekcja zawiera najważniejsze informacje o "tu i teraz".

* **Dzień Tygodnia:** Duży, wyraźny napis po lewej stronie informujący o aktualnym dniu.
* **Lokalizacja (📍):**
    * Nazwa miejscowości jest pobierana automatycznie na podstawie GPS lub adresu IP.
    * Poniżej (na niebiesko) widoczne są dokładne współrzędne geograficzne.
* **Wiatr (↓):**
    * Obok współrzędnych znajduje się strzałka oraz prędkość wiatru w `km/h`.
    * **Zachowanie strzałki:** Strzałka obraca się dynamicznie, wskazując kierunek, w którym wieje wiatr (zgodnie z rzeczywistym ruchem powietrza).
* **Pogoda (☀️/☁️):**
    * Ikona obrazuje aktualny stan nieba (np. słońce, chmury, deszcz).
    * Obok widoczna jest temperatura w stopniach Celsjusza oraz słowny opis pogody.
* **Ciśnienie (⏲️):**
    * Wyświetla aktualne ciśnienie atmosferyczne w hektopaskalach (`hPa`).
    * **Trend:** Obok wartości pojawia się strzałka trendu:
        * `↗️` - Ciśnienie rośnie (wzrost > 0.5 hPa w ciągu ostatniej godziny).
        * `↘️` - Ciśnienie spada.
        * `➡️` - Ciśnienie stabilne.

---

## 2. Kalendarz i Rok (Tabela Górna)

Sekcja ta pozwala zorientować się w upływie czasu w skali roku.

* **Dzień roku:** Numer bieżącego dnia / Całkowita liczba dni w roku (uwzględnia lata przestępne).
* **Tydzień:** Numer bieżącego tygodnia roku.
* **Do końca roku:** Licznik dni pozostałych do Sylwestra.
* **Kwartał:** Aktualny kwartał (1-4).
* **Święto:** Informacja o świętach stałych (np. Nowy Rok), ruchomych (np. Wielkanoc) oraz nietypowych.
* **Imieniny:** Lista imion obchodzących imieniny w danym dniu.

---

## 3. Zegar Segmentowy

Centralny element wyświetlacza stylizowany na cyfrowy zegar retro.
* **Górna linia:** Data w formacie `DD-MM-RRRR`.
* **Dolna linia:** Godzina w formacie `GG:MM:SS`. Dwukropek mruga co sekundę, sygnalizując pracę systemu.

---

## 4. Dane Słoneczne (Tabela Lewa Dolna)

Sekcja dedykowana wędrówce Słońca po niebie.

* **Wschód i Zachód:** Godziny wschodu i zachodu Słońca.
    * System inteligentnie przełącza się między "dziś" a "jutro".
    * **Kolor jasny (neonowy):** Oznacza nadchodzące zdarzenie (np. jeśli jest rano, aktywny jest zachód słońca "dziś").
    * **Kolor ciemny:** Oznacza zdarzenie, które już minęło lub jest odległe.
* **Długość dnia:** Czas trwania jasnej części doby dla Twojej lokalizacji.
* **Żółty licznik (⌛):** Odlicza czas co do sekundy do najbliższego zdarzenia astronomicznego (do wschodu lub do zachodu słońca).

---

## 5. Astronomia (Tabela Prawa Dolna)

Informacje astrologiczne i lunarne.

* **Znak Zodiaku:** Aktualny znak zodiaku dla bieżącego dnia.
    * Poniżej znajduje się odliczanie (w dniach) do momentu, kiedy Słońce wejdzie w kolejny znak zodiaku.
* **Faza Księżyca:**
    * Ikona wizualizuje przybliżony wygląd Księżyca.
    * Opis słowny (np. "Pełnia", "Sierp przybywający").
    * Licznik (x/8) wskazujący etap cyklu księżycowego.
* **Liczniki astronomiczne:**
    * **Pełnia za:** Liczba dni do najbliższej pełni.
    * **Zmiana fazy za:** Liczba dni do zmiany wizualnej fazy Księżyca (np. z pełni na garbary ubywający).

---

## ℹ️ Uwagi techniczne

* Jeśli widzisz komunikat "b/d" (brak danych), upewnij się, że masz połączenie z internetem i wyraziłeś zgodę na udostępnienie lokalizacji.
* Aplikacja odświeża dane pogodowe automatycznie co 15 minut.
* Zegar i odliczania aktualizowane są co sekundę.
