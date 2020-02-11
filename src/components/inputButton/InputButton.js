import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './inputButton.scss';

class InputButton extends React.Component {
	constructor() {
		super();
		this.state = {
			inputText: ''
		}
	} 

	onChange = (event) => {
		this.setState({
			inputText: event.target.value
		});
	}

	onSearch = () => {
		const {inputText} = this.state;
		this.props.onSearch(inputText.trim());
	}

	render() {
		return (
			<div className="search-widget">
				<InputGroup size="lg">
					<FormControl
					  placeholder={this.props.placeholder}
					  aria-describedby="basic-addon2"
					  value = {this.state.inputText}
					  onChange = {this.onChange.bind(this)}
					/>
					<InputGroup.Append>
					  <Button variant="outline-secondary" onClick={this.onSearch.bind(this)} className={this.props.isSearchIconRequired ? 'btn-search' : ''}>
					  	{this.props.isSearchIconRequired ? <FaSearch /> : null} &nbsp; {this.props.btnLabel}
					  </Button>
					</InputGroup.Append>
				</InputGroup>
			</div>
		);
	}
}

export default InputButton;
