export interface IPropsItem {
  label: string | number | null
  value: string | number | null
  [propName: string]: any
}

export const optionsData: IPropsItem[] = [
  { label: 'Москва', value: 'Moscow', caption: 'Москва' },
  { label: 'Париж', value: 'Paris', caption: 'Париж' },
  { label: 'Прага', value: 'Prague', caption: 'Прага' },
  { label: 'Амстердам', value: 'Amsterdam', caption: 'Амстердам' },
  { label: 'Берлин', value: 'Berlin', caption: 'Берлин' },
  { label: 'Лондон', value: 'London', caption: 'Лондон' },
  { label: 'Рига', value: 'Riga', caption: 'Рига' },
]
