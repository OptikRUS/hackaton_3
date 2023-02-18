import enum
from typing import Optional

from pydantic import BaseModel


class SignalType(str, enum.Enum):
    """
    Модель типов сигналов
    """
    digital = 'digital'
    analog = 'analog'


class SettingsFloat(BaseModel):
    """
    Модель Уставки
    """
    alarm_max: Optional[float]
    alarm_min: Optional[float]
    warning_max: Optional[float]
    warning_min: Optional[float]


class HeatingTemperature(BaseModel):
    """
    Модель температуры нагрева
    """
    temperature: Optional[float]
    settings: SettingsFloat


class AxialVibration(BaseModel):
    """
    Модель осевой вибрации
    """
    value: Optional[float]
    settings: SettingsFloat


class HorizontalVibration(BaseModel):
    """
    Модель горизонтальной вибрации
    """
    value: Optional[float]
    settings: SettingsFloat


class VerticalVibration(BaseModel):
    """
    Модель вертикальной вибрации
    """
    value: Optional[float]
    settings: SettingsFloat


class Vibration(BaseModel):
    """
    Модель Вибрации
    """
    axial: AxialVibration
    horizontal: HorizontalVibration
    vertical: VerticalVibration


class Bearing(BaseModel):
    """
    Модель подшипника
    """
    heating_temperature: HeatingTemperature
    vibration: Optional[Vibration]


class Oil(BaseModel):
    """
    Модель Масла
    """
    temperature_after: Optional[float]
    temperature_before: Optional[float]


class Water(BaseModel):
    """
    Модель воды
    """
    temperature_after: Optional[float]
    temperature_before: Optional[float]


class Cooler(BaseModel):
    """
    Модель охладителя
    """
    oil: Oil
    water: Water


class GasManifold(BaseModel):
    """
    Модель газового коллектора
    """
    temperature_before: Optional[float]
    underpressure_before: Optional[float]


class ValvePosition(BaseModel):
    """
    Модель положения задвижки
    """
    gas_valve_closed: Optional[float]
    gas_valve_open: Optional[float]
    gas_valve_position: Optional[float]


class MainDrive(BaseModel):
    """
    Модель главного привода
    """
    rotor_current: Optional[int]
    rotor_voltage: Optional[int]
    stator_current: Optional[int]
    stator_voltage: Optional[int]


class OilSystem(BaseModel):
    """
    Модель маслосистемы
    """
    oil_level: Optional[float]
    oil_pressure: Optional[float]


class Exgauster(BaseModel):
    """
    Модель Эксгаустера
    """
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
