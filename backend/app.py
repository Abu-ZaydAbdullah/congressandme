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
    rep_id =            db.Column(db.Unicode)

class States(db.Model):
    __tablename__ =     "States"
    abbreviation =      db.Column(db.Unicode, primary_key = True)
    name =              db.Column(db.Unicode)
    image =             db.Column(db.Unicode)
    website =           db.Column(db.Unicode)
    summary =           db.Column(db.Unicode)
    state_id =          db.Column(db.Unicode)

class Issues(db.Model):
    __tablename__ =     "Issues"
    name =              db.Column(db.Unicode, primary_key = True)
    description =       db.Column(db.Unicode)
    about =             db.Column(db.Unicode)
    image =             db.Column(db.Unicode)
    vids =              db.Column(db.Unicode)
    issue_id =          db.Column(db.Unicode)
    abbreviation =      db.Column(db.Unicode)

class Mentions(db.Model):
    __tablename__ =                     "Mentions"
    full_name =                         db.Column(db.Unicode, primary_key = True)
    state =                             db.Column(db.Unicode)
    agriculture =                       db.Column(db.Unicode)
    armed_forces =                      db.Column(db.Unicode)
    crimes =                            db.Column(db.Unicode)
    economics =                         db.Column(db.Unicode)
    education =                         db.Column(db.Unicode)
    emergency_management =              db.Column(db.Unicode)
    environmentalism =                  db.Column(db.Unicode)
    gun_control =                       db.Column(db.Unicode)
    healthcare =                        db.Column(db.Unicode)
    housing =                           db.Column(db.Unicode)
    immigration =                       db.Column(db.Unicode)
    labor =                             db.Column(db.Unicode)
    social_issues =                     db.Column(db.Unicode)
    taxation =                          db.Column(db.Unicode)
    transportation_and_public_works =   db.Column(db.Unicode)
    other =                             db.Column(db.Unicode)

class megaTable(db.Model):
    __tablename__ =                     "megaTable"
    full_name =                         db.Column(db.Unicode, primary_key = True)
    state =                             db.Column(db.Unicode)
    chamber =                           db.Column(db.Unicode)
    district =                          db.Column(db.Integer)
    senate_class =                      db.Column(db.Integer)
    party =                             db.Column(db.Unicode)
    url =                               db.Column(db.Unicode)
    phone =                             db.Column(db.Unicode)
    contact_form =                      db.Column(db.Unicode)
    rss_url =                           db.Column(db.Unicode)
    twitter =                           db.Column(db.Unicode)
    facebook =                          db.Column(db.Unicode)
    youtube =                           db.Column(db.Unicode)
    issues =                            db.Column(db.Unicode)
    bioguide_id =                       db.Column(db.Unicode)
    bioguide_summary =                  db.Column(db.Unicode)
    rep_id =                            db.Column(db.Unicode)
    agriculture =                       db.Column(db.Unicode)
    armed_forces =                      db.Column(db.Unicode)
    crimes =                            db.Column(db.Unicode)
    economics =                         db.Column(db.Unicode)
    education =                         db.Column(db.Unicode)
    emergency_management =              db.Column(db.Unicode)
    environmentalism =                  db.Column(db.Unicode)
    gun_control =                       db.Column(db.Unicode)
    healthcare =                        db.Column(db.Unicode)
    housing =                           db.Column(db.Unicode)
    immigration =                       db.Column(db.Unicode)
    labor =                             db.Column(db.Unicode)
    social_issues =                     db.Column(db.Unicode)
    taxation =                          db.Column(db.Unicode)
    transportation_and_public_works =   db.Column(db.Unicode)
    other =                             db.Column(db.Unicode)


# Allows for the use of Flask-Restless to quickly build APIs
# Requires app we just built with configurations and a flask alchemy obj
manager = APIManager(app, flask_sqlalchemy_db=db)

# Create APIs for our above models. Will be used to send and receive messages in JSON format
manager.create_api(Representatives, methods=['GET'], results_per_page=54, max_results_per_page=540)
manager.create_api(States, methods=['GET'], results_per_page=10, max_results_per_page=51)
manager.create_api(Issues, methods=['GET'], results_per_page=5, max_results_per_page=30)
manager.create_api(Mentions, methods = ['GET'], results_per_page=0)

if __name__=='__main__':
    app.run(host='0.0.0.0')

