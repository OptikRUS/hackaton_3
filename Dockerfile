# установка python 3.11 с официального докерхаба
FROM python:3.11.0rc2

ENV MONGO_DB_HOST=mongo
ENV SITE_HOST=0.0.0.0

# установка рабочей директории
WORKDIR /

# установка зависимостей
COPY backend/requirements.txt .
RUN pip3 install -r requirements.txt

# копирование проекта
COPY . .