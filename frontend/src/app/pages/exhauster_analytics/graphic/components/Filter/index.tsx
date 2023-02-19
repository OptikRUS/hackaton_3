import { CheckTree } from 'rsuite'
import type { ItemDataType } from 'rsuite/cjs/@types/common'


const PC_1_Values: ItemDataType[] = [
  { value: 'PC_1_temp', label: 'T, °С' },
  { value: 'PC_1_vertical', label: 'Верт, мм/с' },
  { value: 'PC_1_horizontal', label: 'Гориз, мм/с' },
  { value: 'PC_1_here', label: 'Ось, мм/с' },
]
const PC_3_Values: ItemDataType[] = [
  { value: 'PC_3_temp', label: 'T, °С' },
  { value: 'PC_3_vertical', label: 'Верт, мм/с' },
  { value: 'PC_3_horizontal', label: 'Гориз, мм/с' },
  { value: 'PC_3_here', label: 'Ось, мм/с' },
]

const MainDriveValues: ItemDataType[] = [
  { value: 'flow', label: 'Ток, А' },
  { value: 'drive_flow', label: 'Ток двигателя, А' },
  { value: 'roter_voltage', label: 'Напряжение ротера, кВт' },
  { value: 'starter_voltage', label: 'Напряжение статера, кВт' },
]



const OilBankValues: ItemDataType[] = [
  { value: 'oil_level', label: 'Уровень масла, %'},
  { value: 'oil_pressure', label: 'Давление масла, кг/см2'},
]

const PC: ItemDataType[] = [
  { value: 'PC_1', label: '1 ПС', children: PC_1_Values },
  { value: 'PC_3', label: '3 ПС', children: PC_3_Values },
]

const OilBank: ItemDataType[] = [
  { value: 'oil_bank', label: 'Маслобак', children: OilBankValues },
]

const MainDrive: ItemDataType[] = [
  { value: 'main_drive', label: 'Главный привод', children: MainDriveValues },
]

const data: ItemDataType[] = [
  { value: 'bearing', label: 'Подшипники', children: [...PC] }
]

const mainData: ItemDataType[] = [...MainDrive, ...OilBank, ...data]


export const Filter = () => {
  return <CheckTree data={mainData} defaultExpandAll/>
}
