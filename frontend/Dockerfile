FROM node:18

# Çalışma dizinini oluştur ve bu dizini çalışma dizini olarak ayarla
WORKDIR /usr/src/app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama kodlarını kopyala
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev-exposed"]




## Base image olarak Node.js resmi imajını kullan
#FROM node:18 AS build
#
## Çalışma dizinini oluştur ve bu dizini çalışma dizini olarak ayarla
#WORKDIR /app
#
## package.json ve package-lock.json dosyalarını kopyala
#COPY package*.json ./
#
## Bağımlılıkları yükle
#RUN npm install
#
## Uygulama kodlarını kopyala
#COPY . .
#
## Uygulamanın üretim için derlenmesi
#RUN npm run build
#
## Üretim ortamı için Nginx imajını kullan
#FROM nginx:alpine
#
## Üretim için derlenen dosyaları Nginx'in standart web dizinine kopyala
#COPY --from=build /app/dist /usr/share/nginx/html
#
## Nginx'i başlat
#CMD ["nginx", "-g", "daemon off;"]
#
## Konteynerin 80 portunu aç
#EXPOSE 80
