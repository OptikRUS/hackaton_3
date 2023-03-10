from .exgauster import *
from .request_message import RequestMessage


def build_exgauster_3_f_171(msg: RequestMessage) -> Exgauster:
    """
    Билд для Эксгаустера № 3 (Ф-171)
    """
    exgauster: Exgauster = Exgauster(
        bearing_1=Bearing(
            heating_temperature=HeatingTemperature(
                temperature=msg.SM_Exgauster__0_27_,
                settings=SettingsFloat(
                    alarm_max=msg.SM_Exgauster__0_63_,
                    alarm_min=msg.SM_Exgauster__0_72_,
                    warning_max=msg.SM_Exgauster__0_81_,
                    warning_min=msg.SM_Exgauster__0_90_
                )
            ),
            vibration=Vibration(
                axial=AxialVibration(
                    value=msg.SM_Exgauster__0_2_,
                    settings=SettingsFloat(
                        alarm_max=msg.SM_Exgauster__0_137_,
                        alarm_min=msg.SM_Exgauster__0_149_,
                        warning_max=msg.SM_Exgauster__0_161_,
                        warning_min=msg.SM_Exgauster__0_173_
                    )
                ),
                horizontal=HorizontalVibration(
                    value=msg.SM_Exgauster__0_0_,
                    settings=SettingsFloat(
                        alarm_max=msg.SM_Exgauster__0_135_,
                        alarm_min=msg.SM_Exgauster__0_147_,
                        warning_max=msg.SM_Exgauster__0_159_,
                        warning_min=msg.SM_Exgauster__0_171_
                    )
                ),
                vertical=VerticalVibration(
                    value=msg.SM_Exgauster__0_1_,
                    settings=SettingsFloat(
                        alarm_max=msg.SM_Exgauster__0_136_,
                        alarm_min=msg.SM_Exgauster__0_148_,
                        warning_max=msg.SM_Exgauster__0_160_,
                        warning_min=msg.SM_Exgauster__0_172_
                    )
                )
            )
        ),
        bearing_2=Bearing(
            heating_temperature=HeatingTemperature(
                temperature=msg.SM_Exgauster__0_28_,
                settings=SettingsFloat(
                    alarm_max=msg.SM_Exgauster__0_64_,
                    alarm_min=msg.SM_Exgauster__0_73_,
                    warning_max=msg.SM_Exgauster__0_82_,
                    warning_min=msg.SM_Exgauster__0_91_
                )
            ),
            vibration=Vibration(
                axial=AxialVibration(
                    value=msg.SM_Exgauster__0_5_,
                    settings=SettingsFloat(
                        alarm_max=msg.SM_Exgauster__0_140_,
                        alarm_min=msg.SM_Exgauster__0_152_,
                        warning_max=msg.SM_Exgauster__0_164_,
                        warning_min=msg.SM_Exgauster__0_176_
                    )
                ),
                horizontal=HorizontalVibration(
                    value=msg.SM_Exgauster__0_3_,
                    settings=SettingsFloat(
                        alarm_max=msg.SM_Exgauster__0_138_,
                        alarm_min=msg.SM_Exgauster__0_150_,
                        warning_max=msg.SM_Exgauster__0_162_,
                        warning_min=msg.SM_Exgauster__0_174_
                    )
                ),
                vertical=VerticalVibration(
                    value=msg.SM_Exgauster__0_4_,
                    settings=SettingsFloat(
                        alarm_max=msg.SM_Exgauster__0_139_,
                        alarm_min=msg.SM_Exgauster__0_151_,
                        warning_max=msg.SM_Exgauster__0_163_,
                        warning_min=msg.SM_Exgauster__0_175_
                    )
                )
            )
        ),
        bearing_3=Bearing(
            heating_temperature=HeatingTemperature(
                temperature=msg.SM_Exgauster__0_29_,
                settings=SettingsFloat(
                    alarm_max=msg.SM_Exgauster__0_65_,
                    alarm_min=msg.SM_Exgauster__0_74_,
                    warning_max=msg.SM_Exgauster__0_83_,
                    warning_min=msg.SM_Exgauster__0_92_
                )
            )
        ),
        bearing_4=Bearing(
            heating_temperature=HeatingTemperature(
                temperature=msg.SM_Exgauster__0_30_,
                settings=SettingsFloat(
                    alarm_max=msg.SM_Exgauster__0_66_,
                    alarm_min=msg.SM_Exgauster__0_75_,
                    warning_max=msg.SM_Exgauster__0_84_,
                    warning_min=msg.SM_Exgauster__0_93_
                )
            )
        ),
        bearing_5=Bearing(
            heating_temperature=HeatingTemperature(
                temperature=msg.SM_Exgauster__0_31_,
                settings=SettingsFloat(
                    alarm_max=msg.SM_Exgauster__0_67_,
                    alarm_min=msg.SM_Exgauster__0_76_,
                    warning_max=msg.SM_Exgauster__0_85_,
                    warning_min=msg.SM_Exgauster__0_94_
                )
            )
        ),
        bearing_6=Bearing(
            heating_temperature=HeatingTemperature(
                temperature=msg.SM_Exgauster__0_32_,
                settings=SettingsFloat(
                    alarm_max=msg.SM_Exgauster__0_68_,
                    alarm_min=msg.SM_Exgauster__0_77_,
                    warning_max=msg.SM_Exgauster__0_86_,
                    warning_min=msg.SM_Exgauster__0_95_
                )
            )
        ),
        bearing_7=Bearing(
            heating_temperature=HeatingTemperature(
                temperature=msg.SM_Exgauster__0_33_,
                settings=SettingsFloat(
                    alarm_max=msg.SM_Exgauster__0_69_,
                    alarm_min=msg.SM_Exgauster__0_78_,
                    warning_max=msg.SM_Exgauster__0_87_,
                    warning_min=msg.SM_Exgauster__0_96_
                )
            ),
            vibration=Vibration(
                axial=AxialVibration(
                    value=msg.SM_Exgauster__0_8_,
                    settings=SettingsFloat(
                        alarm_max=msg.SM_Exgauster__0_143_,
                        alarm_min=msg.SM_Exgauster__0_155_,
                        warning_max=msg.SM_Exgauster__0_167_,
                        warning_min=msg.SM_Exgauster__0_179_
                    )
                ),
                horizontal=HorizontalVibration(
                    value=msg.SM_Exgauster__0_6_,
                    settings=SettingsFloat(
                        alarm_max=msg.SM_Exgauster__0_141_,
                        alarm_min=msg.SM_Exgauster__0_153_,
                        warning_max=msg.SM_Exgauster__0_165_,
                        warning_min=msg.SM_Exgauster__0_177_
                    )
                ),
                vertical=VerticalVibration(
                    value=msg.SM_Exgauster__0_7_,
                    settings=SettingsFloat(
                        alarm_max=msg.SM_Exgauster__0_142_,
                        alarm_min=msg.SM_Exgauster__0_154_,
                        warning_max=msg.SM_Exgauster__0_166_,
                        warning_min=msg.SM_Exgauster__0_178_
                    )
                )
            )
        ),
        bearing_8=Bearing(
            heating_temperature=HeatingTemperature(
                temperature=msg.SM_Exgauster__0_34_,
                settings=SettingsFloat(
                    alarm_max=msg.SM_Exgauster__0_70_,
                    alarm_min=msg.SM_Exgauster__0_79_,
                    warning_max=msg.SM_Exgauster__0_88_,
                    warning_min=msg.SM_Exgauster__0_97_
                )
            ),
            vibration=Vibration(
                axial=AxialVibration(
                    value=msg.SM_Exgauster__0_11_,
                    settings=SettingsFloat(
                        alarm_max=msg.SM_Exgauster__0_146_,
                        alarm_min=msg.SM_Exgauster__0_158_,
                        warning_max=msg.SM_Exgauster__0_170_,
                        warning_min=msg.SM_Exgauster__0_182_
                    )
                ),
                horizontal=HorizontalVibration(
                    value=msg.SM_Exgauster__0_9_,
                    settings=SettingsFloat(
                        alarm_max=msg.SM_Exgauster__0_144_,
                        alarm_min=msg.SM_Exgauster__0_156_,
                        warning_max=msg.SM_Exgauster__0_168_,
                        warning_min=msg.SM_Exgauster__0_180_
                    )
                ),
                vertical=VerticalVibration(
                    value=msg.SM_Exgauster__0_10_,
                    settings=SettingsFloat(
                        alarm_max=msg.SM_Exgauster__0_145_,
                        alarm_min=msg.SM_Exgauster__0_157_,
                        warning_max=msg.SM_Exgauster__0_169_,
                        warning_min=msg.SM_Exgauster__0_181_
                    )
                )
            )
        ),
        bearing_9=Bearing(
            heating_temperature=HeatingTemperature(
                temperature=msg.SM_Exgauster__0_35_,
                settings=SettingsFloat(
                    alarm_max=msg.SM_Exgauster__0_71_,
                    alarm_min=msg.SM_Exgauster__0_80_,
                    warning_max=msg.SM_Exgauster__0_89_,
                    warning_min=msg.SM_Exgauster__0_98_
                )
            )
        ),
        cooler=Cooler(
            oil=Oil(
                temperature_after=msg.SM_Exgauster__0_42_,
                temperature_before=msg.SM_Exgauster__0_41_
            ),
            water=Water(
                temperature_after=msg.SM_Exgauster__0_37_,
                temperature_before=msg.SM_Exgauster__0_36_
            )
        ),
        gas_manifold=GasManifold(
            temperature_before=msg.SM_Exgauster__0_24_,
            underpressure_before=msg.SM_Exgauster__0_61_
        ),
        valve_position=ValvePosition(
            gas_valve_closed=msg.SM_Exgauster__11_,
            gas_valve_open=msg.SM_Exgauster__12_,
            gas_valve_position=msg.SM_Exgauster__1_6_
        ),
        main_drive=MainDrive(
            rotor_current=msg.SM_Exgauster__1_2_,
            rotor_voltage=msg.SM_Exgauster__1_4_,
            stator_current=msg.SM_Exgauster__1_3_,
            stator_voltage=msg.SM_Exgauster__1_5_
        ),
        oil_system=OilSystem(
            oil_level=msg.SM_Exgauster__1_0_,
            oil_pressure=msg.SM_Exgauster__1_1_
        ),
        exgauster_work=msg.SM_Exgauster__00_
    )
    return exgauster
