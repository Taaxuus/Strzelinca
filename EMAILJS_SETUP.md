# Konfiguracja EmailJS - Instrukcja

## 1. Rejestracja w EmailJS

1. Idź na https://www.emailjs.com/
2. Kliknij "Sign Up" i zarejestruj się (darmowe konto pozwala na 200 emaili/miesiąc)
3. Potwierdź email

## 2. Dodaj serwis email

1. W dashboard kliknij "Email Services"
2. Kliknij "Add New Service"
3. Wybierz swojego dostawcę email (np. Gmail, Outlook, Yahoo)
4. Postępuj zgodnie z instrukcjami dla twojego dostawcy

### Dla Gmail:
- Wybierz "Gmail"
- Zaloguj się do swojego konta Gmail
- Autoryzuj EmailJS
- Skopiuj Service ID (np. "service_xyz123")

## 3. Stwórz szablon email

1. Idź do "Email Templates"
2. Kliknij "Create New Template"
3. Użyj tego szablonu:

**Subject:** Nowa wiadomość z formularza kontaktowego - Klub Strzelecki Strzelka

**Content:**
```
Otrzymałeś nową wiadomość z formularza kontaktowego:

Imię i nazwisko: {{from_name}}
Email: {{from_email}}
Telefon: {{phone}}

Wiadomość:
{{message}}

---
Ta wiadomość została wysłana przez formularz kontaktowy na stronie Klubu Strzeleckiego Strzelka.
```

4. Kliknij "Save"
5. Skopiuj Template ID (np. "template_abc456")

## 4. Pobierz Public Key

1. Idź do "Account" > "General"
2. Skopiuj Public Key (np. "user_def789")

## 5. Konfiguracja reCAPTCHA

1. Idź na https://www.google.com/recaptcha/admin/create
2. Wybierz "reCAPTCHA v2" > "I'm not a robot"
3. Dodaj domenę: localhost (dla developmentu) i twoją docelową domenę
4. Skopiuj Site Key i Secret Key

## 6. Klucze do pliku .env.local

Wszystkie klucze znajdziesz w odpowiednich sekcjach EmailJS i Google reCAPTCHA dashboardów.
