import enum
from typing import Optional

from pydantic import BaseModel


class SignalType(str, enum.Enum):
    digital = 'digital'
    analog = 'analog'


class SettingsInt(BaseModel):
    alarm_max: Optional[int]
    alarm_min: Optional[int]
    warning_max: Optional[int]
    warning_min: Optional[int]


class SettingsFloat(BaseModel):
    alarm_max: Optional[float]
    alarm_min: Optional[float]
    warning_max: Optional[float]
    warning_min: Optional[float]


class HeatingTemperature(BaseModel):
    temperature: Optional[float]
    settings: SettingsInt


class AxialVibration(BaseModel):
    value: Optional[float]
    settings: SettingsFloat


class HorizontalVibration(BaseModel):
    value: Optional[float]
    settings: SettingsFloat


class VerticalVibration(BaseModel):
    value: Optional[float]
    settings: SettingsFloat


class Vibration(BaseModel):
    axial: AxialVibration
    horizontal: HorizontalVibration
    vertical: VerticalVibration


class Bearing(BaseModel):
    heating_temperature: HeatingTemperature
    vibration: Optional[Vibration]


class Oil(BaseModel):
    temperature_after: Optional[float]
    temperature_before: Optional[float]


class Water(BaseModel):
    temperature_after: Optional[float]
    temperature_before: Optional[float]


class Cooler(BaseModel):
    oil: Oil
    water: Water


class GasManifold(BaseModel):
    temperature_before: Optional[float]
    underpressure_before: Optional[float]


class ValvePosition(BaseModel):
    gas_valve_closed: Optional[float]
    gas_valve_open: Optional[float]
    gas_valve_position: Optional[float]


class MainDrive(BaseModel):
    rotor_current: Optional[int]
    rotor_voltage: Optional[int]
    stator_current: Optional[int]
    stator_voltage: Optional[int]


class OilSystem(BaseModel):
    oil_level: Optional[float]
    oil_pressure: Optional[float]


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
    exgauster_work: Optional[int]
