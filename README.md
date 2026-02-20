# 9RED QA - тестовое задание

В репозитории лежат решения всех 3 задач тестового задания.

## Структура

- **Задача 1 – тест кейсы для оплаты картой**
  - Markdown: `test-cases/payment_test_cases.md`
  - Excel: `test-cases/payment_test_cases.xlsx`
- **Задача 2 – автотест на Playwright**
  - Проект: `playwright/`
  - Тест: `playwright/tests/title.spec.ts`
  - Конфиг: `playwright/playwright.config.ts`
  - CI: `.github/workflows/playwright.yml`
  - Публикация отчета в GitHub Pages: `.github/workflows/static.yml`
  - Отчет (Pages): https://asari92.github.io/9red-qa-test/
- **Задача 3 – теория вероятностей**
  - Решение: `probability/task3.md`

---

## Задача 1 – тест кейсы для оплаты картой

**Контекст:** веб приложение позволяет пользователю оплатить заказ банковской картой. Оплата проходит через внешний платежный шлюз после нажатия кнопки «Оплатить».
Возможен редирект на 3-D Secure, после чего шлюз возвращает результат:
- успешно
- отклонено банком
- ошибка платежного сервиса

**Покрытие:**
- позитивный сценарий (успешная оплата)
- негативные сценарии (отклонение банком, ошибка сервиса, отмены и возвраты из 3DS)
- граничные значения (длина и формат номера, срок действия, CVV, имя держателя)
- клиентская валидация (обязательные поля, формат, Luhn, срок в будущем и т.д.)
- интеграция со шлюзом (запросы и ответы, 3DS редирект и возврат, обновление статуса заказа, идемпотентность)

Артефакты:
- `test-cases/payment_test_cases.md`
- `test-cases/payment_test_cases.xlsx`

---

## Задача 2 – Playwright (проверка заголовка на 2 браузерах)

**Требование:** открыть https://playwright.dev/ и проверить, что заголовок страницы соответствует ожидаемому значению. Запуск минимум в 2 браузерах.

### Реализация

- Фреймворк: **Playwright Test**
- Браузеры: **Chromium** и **Firefox** (заданы проектами в конфиге)
- Репортер: HTML отчет
- Артефакты при падении:
  - screenshot: only-on-failure
  - trace: retain-on-failure
  - video: retain-on-failure

### Запуск локально

Вариант 1. Через Node (если установлен Node.js):

```bash
cd playwright
npm ci
npx playwright install --with-deps
npx playwright test
```

Вариант 2. Через Docker (если не хочется ставить npm и зависимости локально):

```bash
cd playwright
docker build -t pw-task .
docker run --rm pw-task
```

### CI и отчеты

1) **Playwright tests** (`.github/workflows/playwright.yml`)
- запускается на `pull_request`
- можно запускать вручную через `workflow_dispatch`
- при ручном запуске можно выбрать браузер: `all`, `chromium`, `firefox`
- для ручного запуска ставится только выбранный браузер, чтобы было быстрее

2) **Publish Playwright Report (Pages)** (`.github/workflows/static.yml`)
- запускается на push в `main`
- генерирует HTML отчет Playwright и публикует его в GitHub Pages

### HTML отчет (GitHub Pages)

Актуальный отчет:
- https://asari92.github.io/9red-qa-test/

---

## Задача 3 – теория вероятностей

**Условие:** монету подбрасывают три раза. Найти вероятность того, что выпадет ровно два орла.

Решение:
- `probability/task3.md`

---

## Примечание по репозиторию

Папки `playwright/node_modules`, `playwright/playwright-report`, `playwright/test-results` должны быть исключены из Git (через `.gitignore`).
