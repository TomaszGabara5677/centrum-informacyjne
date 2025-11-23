# Centrum Informacyjne

Kompleksowy zegar segmentowy z funkcjami astronomicznymi, kalendarzem imienin i zaawansowaną prognozą pogody. Aplikacja typu PWA (Progressive Web App) działająca offline, stylizowana na neonowy interfejs retro.

## 🚀 Uruchomienie

Aplikacja dostępna jest pod adresem:
👉 **https://tomaszgabara5677.github.io/centrum-informacyjne/**

### Instalacja (PWA)
Tę stronę można zainstalować jako aplikację na telefonie lub komputerze:
* **Android (Chrome):** Kliknij menu (trzy kropki) -> "Zainstaluj aplikację" lub "Dodaj do ekranu głównego".
* **iOS (Safari):** Kliknij przycisk "Udostępnij" -> "Do ekranu początkowego".
* **PC (Chrome/Edge):** Kliknij ikonę instalacji na pasku adresu.

---

## 💡 Funkcje

Szczegółowy opis działania poszczególnych elementów znajdziesz tutaj: [📖 Opis Funkcji (Legenda)](OPIS_FUNKCJI.md)

* **Zegar:** Stylizowany na wyświetlacz segmentowy, pokazujący datę i czas z mrugającym sekundnikiem.
* **Kalendarz:** Imieniny, święta stałe i ruchome, dni do końca roku, numer tygodnia i kwartału.
* **Astronomiczne:**
  * Wschody i zachody Słońca (z inteligentnym odliczaniem do najbliższego zdarzenia).
  * Fazy Księżyca (wizualizacja i nazwy) oraz odliczanie do Pełni.
  * Znaki zodiaku z informacją o zmianie znaku.
* **Pogoda (Open-Meteo):** * Aktualna temperatura i warunki (ikona).
  * **Ciśnienie atmosferyczne:** Wskazanie w hPa wraz ze strzałką trendu (wzrost/spadek).
  * **Wiatr:** Prędkość oraz dynamiczna strzałka wskazująca kierunek wiatru.
* **Lokalizacja:** Automatyczne wykrywanie miejscowości i precyzyjnych współrzędnych (GPS).

---

## 🛠️ Technologie i Źródła

Program powstał przy użyciu narzędzia Google Gemini PRO.

**Wykorzystane API i biblioteki:**
* **Pogoda:** [Open-Meteo API](https://open-meteo.com/) (Dane pogodowe, wiatr, ciśnienie).
* **Geocoding:** [BigDataCloud API](https://www.bigdatacloud.com/) (Nazwy miejscowości).
* **Astronomia:** Biblioteka `SunCalc` (Obliczenia pozycji Słońca i Księżyca).

---

## 🔒 Prywatność

Aplikacja korzysta z geolokalizacji urządzenia wyłącznie w celu pobrania danych pogodowych i astronomicznych dla Twojego miejsca pobytu. Żadne dane nie są gromadzone ani wysyłane na zewnętrzne serwery autora.
Szczegóły: [Polityka Prywatności](POLITYKA-PRYWATNOSCI.md)

---

## ℹ️ Uwagi techniczne

Aby odświeżyć pamięć podręczną (cache) po aktualizacji aplikacji (gdy nie widzisz nowych funkcji):

* **Opcja automatyczna (Zalecana):** Otwórz menu aplikacji (przycisk ☰) i wybierz **"Reset Aplikacji"**. Spowoduje to wyczyszczenie danych i ponowne załadowanie najnowszej wersji.
* **PC (Ręcznie):** Użyj skrótu `Ctrl + F5` lub `Ctrl + R`.
* **Mobile (Ręcznie):** Zamknij aplikację całkowicie (wyrzuć z paska zadań) i otwórz ponownie – Service Worker zaktualizuje się w tle przy kolejnym uruchomieniu.

Wszelkie uwagi mile widziane: `TomaszGabara5677@gmail.com`

---

## 📜 Licencja

**Freeware** - z podaniem źródła, jeśli projekt jest wykorzystywany poza Github.

Pozwala na darmowe korzystanie z programu, ale bez możliwości modyfikacji kodu źródłowego i czerpania korzyści finansowych z jego dystrybucji.
