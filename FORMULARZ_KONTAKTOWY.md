# Konfiguracja EmailJS i reCAPTCHA dla formularza kontaktowego

## 1. Konfiguracja EmailJS

### Krok 1: Rejestracja na EmailJS

1. Idź na https://www.emailjs.com/
2. Zarejestruj się i zaloguj
3. Kliknij "Add New Service"

### Krok 2: Dodanie serwisu email

1. Wybierz Gmail (lub inny provider)
2. Podłącz swoje konto email (strzelkaks@gmail.com)
3. Skopiuj **Service ID**

### Krok 3: Tworzenie szablonu email

1. Idź do "Email Templates"
2. Kliknij "Create New Template"
3. Użyj tego szablonu:

```
Subject: Nowa wiadomość z formularza kontaktowego - {{from_name}}

Nowa wiadomość z formularza kontaktowego na stronie Klubu Strzeleckiego Strzelka:

Imię i nazwisko: {{from_name}}
Email: {{from_email}}
Telefon: {{phone}}

Wiadomość:
{{message}}

---
Ta wiadomość została wysłana automatycznie z formularza kontaktowego.
```

4. Skopiuj **Template ID**

### Krok 4: Pobranie Public Key

1. Idź do "Account" -> "General"
2. Skopiuj **Public Key**

## 2. Konfiguracja Google reCAPTCHA

### Krok 1: Rejestracja

1. Idź na https://www.google.com/recaptcha/admin/create
2. Wprowadź etykietę (np. "Klub Strzelecki Strzelka")
3. Wybierz **reCAPTCHA v2** -> "I'm not a robot" Checkbox
4. Dodaj domeny:
   - `localhost` (dla rozwoju)
   - Twoja domena produkcyjna
5. Zaakceptuj warunki i utwórz

### Krok 2: Pobranie kluczy

1. Skopiuj **Site Key**
2. Secret Key nie jest potrzebny (używamy tylko frontend)

## 3. Aktualizacja pliku .env.local

Wprowadź swoje klucze w pliku `.env.local`:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx

# Google reCAPTCHA v2
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## 4. Test formularza

1. Uruchom aplikację: `npm run dev`
2. Idź do sekcji kontakt
3. Wypełnij formularz
4. Potwierdź reCAPTCHA
5. Wyślij wiadomość
6. Sprawdź czy email dotarł na strzelkaks@gmail.com

## Funkcje formularza:

✅ Wysyłanie emaili przez EmailJS  
✅ Ochrona przed botami (reCAPTCHA)  
✅ Walidacja formularza  
✅ Status wysyłania (loading, sukces, błąd)  
✅ Responsywny design  
✅ Animacje i przejścia

## Wsparcie

W razie problemów sprawdź:

- Czy klucze są poprawnie wprowadzone w .env.local
- Czy domeny są poprawnie skonfigurowane w reCAPTCHA
- Czy serwis EmailJS jest aktywny
- Console w przeglądarce dla szczegółów błędów
