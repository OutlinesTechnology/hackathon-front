export const getSuggestions = (value: string, options: IPropsItem[]) =>
  options.filter(
    (option: IPropsItem) =>
      option && typeof option.label === 'string' && option.label.includes(value.toLocaleLowerCase())
  )

export interface IPropsItem {
  label: string | number | null
  value: string | number | null
  [propName: string]: any
}

export const optionsData: IPropsItem[] = [
  {
    label: 'финансовая грамотность',
    value: 'Финансовая грамотность',
    caption: 'Финансовая грамотность',
  },
  {
    label: 'платежные технологии',
    value: 'Платежные технологии',
    caption: 'Платежные технологии',
  },
  { label: 'openbanking', value: 'OpenBanking', caption: 'OpenBanking' },
  {
    label: 'кибербезопасность',
    value: 'Кибербезопасность',
    caption: 'Кибербезопасность',
  },
  { label: 'роботизация', value: 'Роботизация', caption: 'Роботизация' },
  {
    label: 'лучшие практики UI UX',
    value: 'Лучшие практики UI UX',
    caption: 'Лучшие практики UI UX',
  },
  {
    label: 'digital marketing',
    value: 'Digital marketing',
    caption: 'Digital marketing',
  },
  {
    label: 'блокчейн',
    value: 'Блокчейн',
    caption: 'Блокчейн',
  },
]

interface ITextSteps {
  [key: number]: {
    title: string
    description: string
  }
}

export const textSteps: ITextSteps = {
  1: {
    title: 'Добро пожаловать',
    description: 'Давайте заполним пару шагов для знакомства :)',
  },
  2: {
    title: 'Какие у вас интересы?',
    description:
      'Расскажите о том, какие проекты и сферы вам интересны, чтобы мы подобрали подходящие проекты для вас',
  },
  3: {
    title: 'Какие у вас компетенции?',
    description:
      'Расскажите о том, какой экспертизой вы готовы поделитьсся, чтобы вас могли найти и пригласить в команду или на проект',
  },
}
