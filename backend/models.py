from flask_sqlalchemy import SQLAlchemy

db= SQLAlchemy()  #store method inside a db method

class Task(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    title=db.Column(db.String(100),nullable=False)
    description=db.Column(db.String(100),nullable=True)


    def __repr__(self):
        return f'<Task {self.title}'
