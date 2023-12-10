FROM nginx:latest
RUN apt-get update && apt-get install -y nodejs && apt-get update && apt-get install -y npm
WORKDIR /app
COPY package*.json ./
COPY index.js ./
COPY views/* ./views/
RUN npm install
EXPOSE 3200
CMD ["npm", "start"]