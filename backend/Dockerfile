FROM python:3.6-alpine
RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev postgresql-contrib
RUN pip3 install psycopg2 flask flask-sqlalchemy flask-restless SQLAlchemy flask-migrate flask.ext flask-cors
EXPOSE 5000
RUN mkdir -p /app
COPY app.py /app
COPY config.cfg /app
WORKDIR /app
CMD ["python", "app.py"]
