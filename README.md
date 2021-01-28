


# WDP Projekt Zespołowy 

## Opis projektu

Zaprojektowanie strony www sklepu meblowego, zgodnie z wytycznymi klienta w oparciu o technologie JavaScript, SCSS, Redux, React.

## Demo

DO UZUPEŁNIENIA

## Inicjacja projektu

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `yarn install` (lub `npm install`).

Teraz możesz zacząć pracę, korzystając z przygotowanych taska `yarn start` (lub `npm start`).

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderach `src` oraz `public`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderów `src` i `public` buduje project w folderze `build`
- `start`: obserwuje zmiany w folderze `src` i uruchamia podgląd roboczy
- `test`: uruchomienie testów jednostkowych
- `refactor`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu, a także sprawdza błędy za pomocą ESLinta

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostaną uruchomione testy jednostkowe, formatowanie oraz lintowanie
dla plików, które zostały wybrane za pomocą `git add` i mają być zapisane w commicie.

## Konwencje i dobre praktyki

W celu wydajniejszego workflow:

* raz w tygodniu uskutecznialiśmy 45min video-spotkanie całego zespołu
* codziennie każdy z nas informował resztę o swoich postępach za pomocą DAILY
* zadania każdy przypisywał sobie sam z pomocą Jiry
* każdy z nas pilnował porządku na tablicy Kanban i dobierał dla siebie 1-5 zadań z samej góry
* każdemu zadaniu odpowiadał branch od aktualnego mastera, o tym samym numerze
* zdolność do merge posiadał nasz PM, któremu każdorazowo należało wysłać Pull Request z krótkim opisem problemu w języku ang.

Struktura katalogów:

* katalog źródłowy src:
 - components: (komponenty podzielone na kategorie)
    common
    features
    layout
    views
 - redux (pliki związane z obsługą Reduxa)
 - styles (zastosowane style)
