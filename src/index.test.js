import stateSelect from './index';

const stub1 = jest.fn();
const stub2 = jest.fn();

const testProps = {
  testProp: 'test-1234',
};

const testState = { test: 'state' };

describe('stateSelect', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    stub1.ownProp = 'testProp';
  });
  it('returns a method', () => {
    const selectors = {
      stub1,
      stub2,
    };
    expect(stateSelect(selectors)).toEqual(expect.any(Function));
  });
  it('constructed method accepts state and ownProps to be used in selectors', () => {
    const selectors = {
      stub1,
      stub2,
    };
    stateSelect(selectors)(testState, testProps);
    expect(stub1).toHaveBeenCalledWith(testState, 'test-1234');
    expect(stub2).toHaveBeenCalledWith(testState, undefined);
  });
  it('returns mapped state values in object matching selector name', () => {
    stub1.mockReturnValueOnce('mock1return');
    stub2.mockReturnValueOnce('mock2return');
    const selectors = {
      stub1,
      stub2,
    };
    const test = stateSelect(selectors)(testState, testProps);
    expect(test).toEqual({
      stub1: 'mock1return',
      stub2: 'mock2return',
    });
  });
});
