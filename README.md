# ChatGPT Clone

Prosty klon ChatGPT z frontendem w React i backendem w Node.js (Express), korzystający z API OpenAI.

## Funkcje

- Wysyłanie wiadomości do modelu GPT-3.5-turbo (OpenAI)
- Odpowiedzi wyświetlane w stylu czatu
- Obsługa Enter do wysyłania wiadomości
- Autoscroll do najnowszej wiadomości
- Przycisk "New Chat" odświeżający rozmowę

## Wymagania

- Node.js (18+)
- Konto OpenAI z aktywnym kluczem API (i środkami na koncie)

## Instalacja

1. **Sklonuj repozytorium:**
   ```bash
   git clone https://github.com/bartoszkoperczak/chatgpt_clone_react.git
   cd gpt-clone
   ```

2. **Zainstaluj zależności frontendu:**
   ```bash
   npm install
   ```

3. **Skonfiguruj backend:**
   ```bash
   cd backend
   npm install
   ```

4. **Ustaw klucz OpenAI:**
   - Utwórz plik `.env` w folderze `backend`:
     ```
     OPENAI_API_KEY=sk-...tutaj_twój_klucz...
     ```

## Uruchomienie

1. **Uruchom backend:**
   ```bash
   cd backend
   node index.js
   ```
   Backend będzie dostępny na `http://localhost:5000`.

2. **Uruchom frontend:**
   ```bash
   cd ..
   npm start
   ```
   Frontend będzie dostępny na `http://localhost:3000`.

## Ważne

- **Nie udostępniaj swojego klucza API publicznie!**
- Klucz API powinien być tylko w pliku `.env` na backendzie.
- Jeśli nie masz aktywnego planu na OpenAI, API nie będzie działać.
