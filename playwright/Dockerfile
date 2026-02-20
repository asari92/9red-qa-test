FROM mcr.microsoft.com/playwright:v1.58.2-jammy

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY playwright.config.ts ./
COPY tests ./tests

CMD ["npm", "test"]
