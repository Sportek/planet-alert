FROM node:20

WORKDIR /home/node/app

# On copie le package.json et on installe les dépendances
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

# On copie le reste du code
COPY . .

# Étape pour générer un fichier .env temporaire (peu importe les valeurs ici)
# La seule valeur qui importe, c'est NODE_ENV=production
RUN echo "PORT=3333" >> .env && \
    echo "APP_KEY=RANDOM_KEY_VERY_LONG_AND_SUPER_SECURE_AND_SECRET" >> .env && \
    echo "HOST=127.0.0.1" >> .env && \
    echo "LOG_LEVEL=info" >> .env && \
    echo "DB_HOST=localhost" >> .env && \
    echo "DB_PORT=5432" >> .env && \
    echo "DB_USER=default_user" >> .env && \
    echo "DB_DATABASE=default_db" >> .env && \
    echo "TZ=UTC" >> .env && \
    echo "NODE_ENV=development" >> .env && \
    echo "DB_PASSWORD=password" >> .env

# Nettoyer le fichier .env temporaire
RUN rm .env