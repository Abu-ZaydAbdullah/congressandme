from flask import Flask # noqa
from flask_cors import CORS # noqa
from flask_sqlalchemy import SQLAlchemy # noqa


db = flask_sqlalchemy.SQLAlchemy(app)

"""
File to create a backend application
"""

def create_app():
    """
    function to create and start the backend application (our api)
    """
    app = Flask(__name__)
    CORS(app) 
    app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql+psycopg2://cnmdevs:raredonkeyfart1@postgresql://cnmdatabase.c94ulbkdkv0l.us-east-1.rds.amazonaws.com:5432/mydatabase"
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['DEBUG'] = True
    db = flask_sqlalchemy.SQLAlchemy(app)

    import models # noqa
    with app.app_context():
        db.configure_mappers()
        db.create_all(app=app)
    return app

if __name__ == '__main__':
    app.run()