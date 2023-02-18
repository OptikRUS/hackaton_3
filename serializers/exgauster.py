import enum
from typing import Optional

from pydantic import BaseModel


class SignalType(str, enum.Enum):
    digital = 'digital'
    analog = 'analog'


class SettingsInt(BaseModel):
    alarm_max: int
    alarm_min: int
    warning_max: int
    warning_min: int


class SettingsFloat(BaseModel):
    alarm_max: float
    alarm_min: float
    warning_max: float
    warning_min: float


class HeatingTemperature(BaseModel):
    temperature: float
    settings: SettingsInt


class AxialVibration(BaseModel):
    value: float
    settings: SettingsFloat


class HorizontalVibration(BaseModel):
    value: float
    settings: SettingsFloat


class VerticalVibration(BaseModel):
    value: float
    settings: SettingsFloat


class Vibration(BaseModel):
    axial: AxialVibration
    horizontal: HorizontalVibration
    vertical: VerticalVibration


class Bearing(BaseModel):
    heating_temperature: HeatingTemperature
    vibration: Optional[Vibration]


class Oil(BaseModel):
    temperature_after: float
    temperature_before: float


class Water(BaseModel):
    temperature_after: float
    temperature_before: float


class Cooler(BaseModel):
    oil: Oil
    water: Water


class GasManifold(BaseModel):
    temperature_before: float
    underpressure_before: float


class ValvePosition(BaseModel):
    gas_valve_closed: float
    gas_valve_open: float
    gas_valve_position: float


class MainDrive(BaseModel):
    rotor_current: int
    rotor_voltage: int
    stator_current: int
    stator_voltage: int


class OilSystem(BaseModel):
    oil_level: float
    oil_pressure: float


class Exgauster(BaseModel):
    bearing_1: Bearing
    bearing_2: Bearing
    bearing_3: Bearing
    bearing_4: Bearing
    bearing_5: Bearing
    bearing_6: Bearing
    bearing_7: Bearing
    bearing_8: Bearing
    bearing_9: Bearing
    cooler: Cooler
    gas_manifold: GasManifold
    valve_position: ValvePosition
    main_drive: MainDrive
    oil_system: OilSystem
    exgauster_work: int
