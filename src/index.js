module.exports = function stateSelectorToProps(selectors) {
  return (state, ownProps) => Object.keys(selectors).reduce((acc, key) => ({
    ...acc,
    [key]: selectors[key](state, ownProps[selectors[key].ownProp]),
  }), {});
};
