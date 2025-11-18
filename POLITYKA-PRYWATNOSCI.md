# Polityka Prywatności aplikacji "Centrum Informacyjne"

**Ostatnia aktualizacja:** 19.11.2025

Niniejsza Polityka Prywatności określa zasady przetwarzania informacji o użytkowniku w aplikacji "Centrum Informacyjne" (zwanej dalej "Aplikacją").

Twórcą i administratorem Aplikacji jest Tomasz Gabara. Szanujemy Twoją prywatność i dbamy o to, aby Twoje dane były bezpieczne. Aplikacja została zaprojektowana w taki sposób, aby przetwarzać minimalną ilość danych niezbędną do jej funkcjonowania.

## 1. Jakie dane zbieramy i w jakim celu?

Aplikacja pobiera i przetwarza następujące dane wyłącznie w określonych celach:

### A. Dane lokalizacyjne (Pozycja GPS)
Aplikacja prosi o dostęp do lokalizacji urządzenia (współrzędne geograficzne: szerokość i długość).

* **Cel:** Dane te są niezbędne do:
    1.  Wyświetlenia aktualnej prognozy pogody dla Twojego miejsca pobytu.
    2.  Obliczenia precyzyjnych czasów wschodu i zachodu Słońca oraz faz Księżyca (dane astronomiczne).
    3.  Wyświetlenia nazwy miejscowości, w której się znajdujesz.
* **Sposób przetwarzania:** Współrzędne są pobierane w czasie rzeczywistym tylko wtedy, gdy Aplikacja jest uruchomiona. Nie śledzimy Twojej lokalizacji w tle, gdy nie korzystasz z Aplikacji.

### B. Dane techniczne (Pamięć podręczna)
Aplikacja korzysta z mechanizmów "Service Worker" oraz pamięci podręcznej przeglądarki (Cache API).

* **Cel:** Umożliwienie działania Aplikacji w trybie offline (bez dostępu do Internetu) oraz szybsze ładowanie zasobów.

## 2. Udostępnianie danych podmiotom trzecim

Nie gromadzimy Twoich danych lokalizacyjnych na własnych serwerach, nie tworzymy profili użytkowników ani nie sprzedajemy danych.

Jednakże, aby Aplikacja mogła wyświetlić pogodę i nazwę miasta, Twoje współrzędne geograficzne muszą zostać przesłane do wyspecjalizowanych, zewnętrznych interfejsów programistycznych (API). Korzystamy z następujących zaufanych dostawców:

1.  **Open-Meteo** (https://open-meteo.com/)
    * Przesyłamy współrzędne w celu pobrania danych pogodowych (temperatura, kod pogodowy).
    * Polityka prywatności dostawcy: https://open-meteo.com/en/features#terms

2.  **BigDataCloud** (https://www.bigdatacloud.com/)
    * Przesyłamy współrzędne w celu uzyskania nazwy miejscowości (tzw. Reverse Geocoding).
    * Polityka prywatności dostawcy: https://www.bigdatacloud.com/privacy-policy

Dostawcy ci otrzymują Twoje współrzędne oraz adres IP w momencie wysyłania zapytania przez Aplikację.

## 3. Bezpieczeństwo danych

* Komunikacja z Aplikacją oraz zewnętrznymi API odbywa się za pomocą szyfrowanego protokołu HTTPS.
* Twoje dane lokalizacyjne nie są zapisywane w trwałej bazie danych administratora Aplikacji. Są przetwarzane "w locie" (on-the-fly) na Twoim urządzeniu i ulotnie przez zewnętrzne API.

## 4. Uprawnienia i kontrola użytkownika

Podanie danych lokalizacyjnych jest dobrowolne, ale niezbędne do pełnego działania funkcji pogodowych i astronomicznych.

* Możesz w każdej chwili cofnąć zgodę na dostęp do lokalizacji w ustawieniach swojego urządzenia lub przeglądarki.
* W przypadku braku zgody, Aplikacja wyświetli dane dla lokalizacji domyślnej lub nie wyświetli ich wcale, jednak pozostałe funkcje (np. kalendarz, zegar) będą działać nadal.

## 5. Kontakt

W razie pytań lub wątpliwości dotyczących niniejszej Polityki Prywatności, możesz skontaktować się z deweloperem pod adresem e-mail:
**TomaszGabara5677@gmail.com**
