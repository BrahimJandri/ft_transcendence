FROM node:18-alpine
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
# Serve project root so index.html and website/* are available to the SPA
CMD ["npx", "serve", "-s", ".", "-l", "3000"]