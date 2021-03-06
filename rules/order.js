module.exports = {
  // https://github.com/hudochenkov/stylelint-order/tree/master/rules/order
  'order/order': [
    [
      'dollar-variables',
      'at-rules',
      { 'type': 'at-rule', 'name': 'import' },
      { 'type': 'at-rule', 'name': 'extend' },
      'custom-properties',
      'declarations',
      { 'type': 'at-rule', 'name': 'include', 'parameter': 'has-hover' },
      { 'type': 'at-rule', 'name': 'include', 'parameter': 'mq' },
      { 'type': 'at-rule', 'name': 'media' }
    ],
    { 'unspecified': 'ignore' }
  ],

  // https://github.com/hudochenkov/stylelint-order/tree/master/rules/properties-order
  'order/properties-order': null,

  // https://github.com/hudochenkov/stylelint-order/tree/master/rules/properties-alphabetical-order
  'order/properties-alphabetical-order': true,
};
