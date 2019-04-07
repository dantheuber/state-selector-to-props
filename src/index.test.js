const stateSelect = require('./index');

const stub1 = jest.fn().mockReturnValue('mock1return');
stub1.ownProp = 'testProp';

const stub2 =jest.fn().mockReturnValue('mock2return');

const testSelectors = {
  stub1,
  stub2,
};

const testProps = {
  testProp: 'test-1234',
};

const testState = { test: 'state' };

describe('stateSelect', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('returns a method', () => {
    expect(stateSelect(testSelectors)).toEqual(expect.any(Function));
  });
  it('constructed method accepts state and ownProps to be used in selectors', () => {
    const test = stateSelect(testSelectors);
    test(testState, testProps);
    expect(stub1).toHaveBeenCalledWith(testState, 'test-1234');
    expect(stub2).toHaveBeenCalledWith(testState, undefined);
  });
});