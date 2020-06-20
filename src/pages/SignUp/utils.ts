export const getSuggestions = (value: string, options: any[]) =>
  options.filter((option: any) => option && option.label.includes(value.toLocaleLowerCase()))

export const optionsData = [
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
  { label: 'openBanking', value: 'OpenBanking', caption: 'OpenBanking' },
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
