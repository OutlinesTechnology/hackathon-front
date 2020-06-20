export interface IPropsItem {
  label: string | number | null
  value: string | number | null
  [propName: string]: any
}

export const optionsDataMain: IPropsItem[] = [
  {
    label: 'Департамент цифровых технологий',
    value: 'Департамент цифровых технологий',
    caption: 'Департамент цифровых технологий',
  },
]
