export interface IPropsItem {
  label: string | number | null
  value: string | number | null
  [propName: string]: any
}

export const optionsBudgetData: IPropsItem[] = [
  { label: 'Без бюджета', value: 'Без бюджета', caption: 'Без бюджета' },
  { label: 'до 500 000', value: 'до 500 000', caption: 'до 500 000' },
  { label: '500 000 - 1 500 000', value: '500 000 - 1 500 000', caption: '500 000 - 1 500 000' },
  {
    label: 'от 1 500 000 до 6 000 000',
    value: 'от 1 500 000 до 6 000 000',
    caption: 'от 1 500 000 до 6 000 000',
  },
  { label: 'свыше 6 000 000', value: 'свыше 6 000 000', caption: 'свыше 6 000 000' },
]
