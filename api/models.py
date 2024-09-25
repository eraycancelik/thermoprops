from sqlalchemy import Column, Numeric, String, Text, Float
from sqlalchemy.sql.expression import text
from sqlalchemy.sql.sqltypes import TIMESTAMP
from sqlalchemy.orm import relationship

from .database import Base

class SaturatedWater(Base):
    __tablename__ = "saturatedWaterTable"
    temperature_T = Column(Numeric(precision=10, scale=4), nullable=True, index=True, primary_key=True)
    saturation_pressure_kPa = Column(Numeric(precision=10, scale=4), nullable=True)
    specific_volume_vf = Column(Numeric(precision=10, scale=4), nullable=True)
    specific_volume_vg = Column(Numeric(precision=10, scale=4), nullable=True)
    internal_energy_uf = Column(Numeric(precision=10, scale=4), nullable=True)
    internal_energy_ufg = Column(Numeric(precision=10, scale=4), nullable=True)
    internal_energy_ug = Column(Numeric(precision=10, scale=4), nullable=True)
    enthalpy_hf = Column(Numeric(precision=10, scale=4), nullable=True)
    enthalpy_hfg = Column(Numeric(precision=10, scale=4), nullable=True)
    enthalpy_hg = Column(Numeric(precision=10, scale=4), nullable=True)
    entropy_sf = Column(Numeric(precision=10, scale=4), nullable=True)
    entropy_sfg = Column(Numeric(precision=10, scale=4), nullable=True)
    entropy_sg = Column(Numeric(precision=10, scale=4), nullable=True)
