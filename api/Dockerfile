# Python'un resmi imajını temel al
FROM python:3.10-slim

# Çalışma dizinini oluştur
WORKDIR /app

# Gereksinim dosyasını kopyala
COPY requirements.txt .

# Bağımlılıkları yükle
RUN pip install -r requirements.txt

# Uygulama kodunu kopyala
COPY . .

# Flask uygulamasını geliştirme modunda çalıştır
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000", "--reload"]

# Konteynerin 5000 portunu aç
EXPOSE 5000
