from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from .config import settings
# Format of sqlalchemy database url:
# "postgresql://<user_name>:<password>@<ip_address/hostname>:<database>"
SQLALCHEMY_DATABASE_URL = f"postgresql://postgres:developmentPassword123456@postgres:5432/thermoprops_db"

# Create a database engine
# engine is used to connect to the database
engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db(): 
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
