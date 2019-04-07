# state-selector-to-props
A helper method which aims to simplify mapping state values to props in react-redux containers.

## Getting Started
Install as a dependency to be used within your app:
```
yarn add state-selector-to-props
npm i --save state-selector-to-props
```

### How to use
This constructs your mapStateToProps method automatically for you, simpy by passing an object with the selectors like so:
```
import { connect } from 'react-redux';
import stateSelect from 'state-selector-to-props';
import { MyComponent } from './MyComponent';
import {
  mySelector1,
  mySelector2,
} from './mySelectors';

const mapStateToProps = stateSelect({
  mySelector1,
  mySelector2,
});

const container = connect(mapStateToProps)(MyComponent);

export { container as MyComponent };
```

**Note:** If your selector requires one of your components own props to be passed as a second parameter to your selector, you can add an `ownProp` attribute with the appropriate string for the prop to be passed, like so:
```
import {
  mySelector1,
  mySelector2,
} from './mySelectors';

mySelector.ownProp = 'useThisProp';

const mapStateToProps = stateSelect({
  mySelector1,
  mySelector2,
});
```
The prop value of the same name will be passed as a second paramter to your selector.
