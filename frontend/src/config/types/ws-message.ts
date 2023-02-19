export interface SettingsApi {
  alarm_max: number;
  alarm_min: number;
  warning_max: number;
  warning_min: number;
}

interface HeatingTemperature {
  temperature: number;
  settings: SettingsApi;
}

export interface InfoApi {
  value: number;
  settings: SettingsApi;
}


interface Vibration {
  axial: InfoApi;
  horizontal: InfoApi;
  vertical: InfoApi;
}

export interface BearingApi {
  heating_temperature: HeatingTemperature;
  vibration?: Vibration;
}

interface Oil {
  temperature_after: number;
  temperature_before: number;
}

interface Water {
  temperature_after: number;
  temperature_before: number;
}

interface Cooler {
  oil: Oil;
  water: Water;
}

interface GasManifold {
  temperature_before: number;
  underpressure_before: number;
}

interface ValvePosition {
  gas_valve_closed: number;
  gas_valve_open: number;
  gas_valve_position?: any;
}

interface MainDrive {
  rotor_current?: any;
  rotor_voltage?: any;
  stator_current: number;
  stator_voltage?: any;
}

interface OilSystem {
  oil_level: number;
  oil_pressure: number;
}

export interface ExgausterApi {
  bearing_1: BearingApi;
  bearing_2: BearingApi;
  bearing_3: BearingApi;
  bearing_4: BearingApi;
  bearing_5: BearingApi;
  bearing_6: BearingApi;
  bearing_7: BearingApi;
  bearing_8: BearingApi;
  bearing_9: BearingApi;
  cooler: Cooler;
  gas_manifold: GasManifold;
  valve_position: ValvePosition;
  main_drive: MainDrive;
  oil_system: OilSystem;
  exgauster_work: number;
}


export interface WsExgausterMessage {
  moment: Date;
  exgauster_1_u_171: ExgausterApi;
  exgauster_2_u_172: ExgausterApi;
  exgauster_3_f_171: ExgausterApi;
  exgauster_4_f_172: ExgausterApi;
  exgauster_5_x_171: ExgausterApi;
  exgauster_6_x_172: ExgausterApi;
}

export type Exgauster = keyof Omit<WsExgausterMessage, 'moment'>


