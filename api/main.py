from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi import FastAPI, Depends, HTTPException, status
from sqlalchemy.orm import Session
from .database import engine, get_db
from . import models

app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"response": "naber"}

@app.get("/route1")
async def route1():
    return {"response": "yeni bir route"}

class SaturatedWaterCreate(BaseModel):
    temperature_T: float
    saturation_pressure_kPa: float
    specific_volume_vf: float
    specific_volume_vg: float
    internal_energy_uf: float
    internal_energy_ufg: float
    internal_energy_ug: float
    enthalpy_hf: float
    enthalpy_hfg: float
    enthalpy_hg: float
    entropy_sf: float
    entropy_sfg: float
    entropy_sg: float

# Root route
@app.get("/")
async def root():
    return {"response": "naber"}

# New route: POST to add a new record to SaturatedWater
@app.post("/saturated_water")
async def create_saturated_water(data: SaturatedWaterCreate, db: Session = Depends(get_db)):
    new_record = models.SaturatedWater(**dict(data))
    db.add(new_record)
    db.commit()
    db.refresh(new_record)
    return new_record

# New route: GET all records from SaturatedWater

@app.get("/saturated_water")
async def get_saturated_water(db: Session = Depends(get_db)):
    return {"response": "saturated_water"}
# New route: GET a specific record by temperature_T (Primary Key)

@app.get("/saturated_water/{temperature_T}")
async def get_saturated_water_by_temperature(temperature_T: float, db: Session = Depends(get_db)):
    record = db.query(models.SaturatedWater).filter(models.SaturatedWater.temperature_T == temperature_T).first()
    if not record:
        raise HTTPException(status_code=404, detail="Record not found")
    return record