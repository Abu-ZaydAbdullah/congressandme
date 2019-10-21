FROM python:3.6-alpine
RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev postgresql-contrib
RUN pip3 install psycopg2 flask flask-sqlalchemy flask.ext.restless SQLAlchemy flask-migrate
EXPOSE 5000
RUN mkdir -p /app
COPY application.py /app
WORKDIR /app
CMD ["python", "application.py"]