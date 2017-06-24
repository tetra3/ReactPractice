import React from 'react';
import {getFunName} from '../helpers.js'





class StorePicker extends React.Component {

	goToStore(event) {
		event.preventDefault();
		console.log("hahaha");
		console.log(this.storeInput.value);
	}


	render() {
		return(

			<form className="store-selector" onSubmit={ (e) => this.goToStore(e)}>
				{ /* hello */ }
				<h2>Please Enter a Store</h2>
				<input type="text" required placeholder="Store Name" ref={ (input) => {this.storeInput = input} }  defaultValue={getFunName()} />
				<button type="submit">Visit Store </button>
			</form>
		)
	}
}

export default StorePicker;