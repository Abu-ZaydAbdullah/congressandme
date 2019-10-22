from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restless import APIManager
from flask_cors import CORS

# Handles the creation of the Flask app
app = Flask(__name__)
app.config.from_pyfile('config.cfg')
app.config['DEBUG'] = True
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

# Flask Alchemy obj
db = SQLAlchemy(app)

# Create the Flask-SQLAlchemy models.
class Representatives(db.Model):
    __tablename__ =     "Representatives"
    full_name =         db.Column(db.Unicode, primary_key = True)
    chamber =           db.Column(db.Unicode)
    state =             db.Column(db.Unicode)
    district =          db.Column(db.Integer)
    senate_class =      db.Column(db.Integer)
    party =             db.Column(db.Unicode)
    url =               db.Column(db.Unicode)
    phone =             db.Column(db.Unicode)
    contact_form =      db.Column(db.Unicode)
    rss_url =           db.Column(db.Unicode)
    twitter =           db.Column(db.Unicode)
    facebook =          db.Column(db.Unicode)
    youtube =           db.Column(db.Unicode)
    issues =            db.Column(db.Unicode)
    bioguide_id =       db.Column(db.Unicode)
    bioguide_summary =  db.Column(db.Unicode)

class States(db.Model):
    __tablename__ =     "States"
    abbreviation =      db.Column(db.Unicode, primary_key = True)
    name =              db.Column(db.Unicode)
    image =             db.Column(db.Unicode)
    website =           db.Column(db.Unicode)
    summary =           db.Column(db.Unicode)

class Issues(db.Model):
    __tablename__ =     "Issues"
    name =              db.Column(db.Unicode, primary_key = True)
    desc =              db.Column(db.Unicode)
    about =             db.Column(db.Unicode)
    image =             db.Column(db.Unicode)
    vids =              db.Column(db.Unicode)

# Allows for the use of Flask-Restless to quickly build APIs
# Requires app we just built with configurations and a flask alchemy obj
manager = APIManager(app, flask_sqlalchemy_db=db)

# Create APIs for our above models. Will be used to send and receive messages in JSON format
manager.create_api(Representatives, methods=['GET'], results_per_page=54)
manager.create_api(States, methods=['GET'])
manager.create_api(Issues, methods=['GET'])

if __name__=='__main__':
    app.run(host='0.0.0.0', port=5000)
