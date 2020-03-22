Simple React/Preact component for show and change current state/props/content of component.
# Install
````
yarn add https://github.com/Garphild/react-state-panel-dev
````

# Usage
````
import StateObserver from 'state-panel-dev';
import 'state-panel-dev/build/assets/StateObserver.6580ec47.css';

...
function onChange(field, value) => {
    this.setState({
        [field]: value
    });
}
...
<StateObserver state={this.state} onChange={this.onChange} />
````
# Props 
* state (Object) - state for show
* onChange (function(field, value)) - function to change state
