Simple React/Preact component for show and change current state/props/content of component.
# Install
````
yarn add https://github.com/Garphild/react-state-panel-dev
````

# Usage
````
function onChange(field, value) => {
    this.setState({
        [field]: value
    });
}
<StateObserver state={this.state} onChange={this.onChange} />
````
# Props 
* state (Object) - state for show
* onChange (function(field, value)) - function to change state
