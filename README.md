## Uwaga!
## Program jest w fazie wewnętrzych testów i ciągłej rozbudowy, kod jest aktualizowany kilka razy dziennie.

# Centrum Informacyjne

Kompleksowy zegar segmentowy z funkcjami astronomicznymi, kalendarzem imienin i prognozą pogody. Aplikacja typu PWA (Progressive Web App) działająca offline.

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

* **Zegar:** Stylizowany na wyświetlacz segmentowy.
* **Kalendarz:** Imieniny, święta stałe i ruchome, dni do sylwestra.
* **Astronomiczne:**
  * Wschody i zachody Słońca (z odliczaniem).
  * Fazy Księżyca i znaki zodiaku.
  * Wykrywanie roku przestępnego.
* **Pogoda:** Aktualna temperatura i warunki pogodowe dla Twojej lokalizacji.
* **Lokalizacja:** Automatyczne wykrywanie miejscowości i współrzędnych (GPS).

---

## 🛠️ Technologie i Źródła

Program powstał przy użyciu narzędzia Google Gemini PRO.

**Wykorzystane API i biblioteki:**
* **Pogoda:** [Open-Meteo API](https://open-meteo.com/) (Darmowe dane pogodowe).
* **Geocoding:** [BigDataCloud API](https://www.bigdatacloud.com/) (Nazwy miejscowości).
* **Astronomia:** Biblioteka `SunCalc` (Obliczenia pozycji Słońca i Księżyca).

---

## 🔒 Prywatność

Aplikacja korzysta z geolokalizacji urządzenia wyłącznie w celu pobrania danych pogodowych i astronomicznych. Żadne dane nie są gromadzone przez autora.
Szczegóły: [Polityka Prywatności](privacy-policy.md)

---

## ℹ️ Uwagi techniczne

Aby odświeżyć pamięć podręczną (cache) po aktualizacji aplikacji:
* **PC:** Użyj skrótu `Ctrl + F5` lub `Ctrl + R`.
* **Mobile:** Zamknij aplikację całkowicie i otwórz ponownie (nowy Service Worker zaktualizuje się w tle).

Wszelkie uwagi mile widziane: `TomaszGabara5677@gmail.com`

---

## 📜 Licencja

**Freeware** - z podaniem źródła, jeśli projekt jest wykorzystywany poza Github.

Pozwala na darmowe korzystanie z programu, ale bez możliwości modyfikacji kodu źródłowego i czerpania korzyści finansowych z jego dystrybucji.
