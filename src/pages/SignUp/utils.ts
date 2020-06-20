export const getSuggestions = (value: string, options: IPropsItem[]) =>
  options.filter(
    (option: IPropsItem) =>
      option && typeof option.label === 'string' && option.label.includes(value.toLocaleLowerCase())
  )

export const getIds = (array: IPropsItem[]) => array.map((item: IPropsItem) => item.id)

export interface IPropsItem {
  label: string | number | null
  value: string | number | null
  [propName: string]: any
}

export const optionsData: IPropsItem[] = [
  {
    label: 'финансовая грамотность',
    value: 0,
    caption: 'Финансовая грамотность',
  },
  {
    label: 'платежные технологии',
    value: 1,
    caption: 'Платежные технологии',
  },
  { label: 'openbanking', value: 'OpenBanking', caption: 'OpenBanking' },
  {
    label: 'кибербезопасность',
    value: 2,
    caption: 'Кибербезопасность',
  },
  { label: 'роботизация', value: 'Роботизация', caption: 'Роботизация' },
  {
    label: 'лучшие практики UI UX',
    value: 3,
    caption: 'Лучшие практики UI UX',
  },
  {
    label: 'digital marketing',
    value: 4,
    caption: 'Digital marketing',
  },
  {
    label: 'блокчейн',
    value: 5,
    caption: 'Блокчейн',
  },
]

// Риск менеджмент
//
// Инвестиционный бизнес
//
// Кредиты и депозиты
//
// Бухгалтерия
//
// Финансовая отчетность
//
// Кибербезопасность
//
// Управление проектами
//
// Дизайн
//
// Проектирование архитектуры

export const optionsDataExpertise = [
  {
    label: 'риск менеджмент',
    value: 0,
    caption: 'Риск менеджмент',
  },
  {
    label: 'инвестиционный бизнес',
    value: 1,
    caption: 'Инвестиционный бизнес',
  },
  {
    label: 'кредиты и депозиты',
    value: 2,
    caption: 'Кредиты и депозиты',
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
