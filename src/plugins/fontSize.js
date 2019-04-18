import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, config, variants }) {
    const utilities = _.fromPairs(
      _.map(config('theme.fontSize'), (value, modifier) => {
        return [
          `.${e(`text-${modifier}`)}`,
          {
            'font-size': value,
          },
        ]
      })
    )

    addUtilities(utilities, variants('fontSize'))
  }
}
