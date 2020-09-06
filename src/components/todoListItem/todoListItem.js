import React, {Component} from 'react';

import './todoListItem.css';

export default class TodoListItem extends Component {
	onLabelClick = () => {
		this.setState(({done}) => {
			return {
				done: !done,
			};
		});
	};

	onExclamanationClick = () => {
		this.setState(({important}) => {
			return {
				important: !important,
			};
		});
	};

	render() {
		const {label, onDelete, onToggleImportant, onToggleDone, done, important} = this.props;

		let classNames = 'todo-list-item';
		classNames += done ? ' done' : '';
		classNames += important ? ' important' : '';

		return (
			<span className={classNames}>
				<span className="todo-list-item-label" onClick={onToggleImportant}>
					{label}
				</span>
				<button
					type="button"
					className="btn btn-outline-success btn-sm float-right"
					onClick={onToggleDone}>
					<i className="fa fa-exclamation"></i>
				</button>
				<button
					type="button"
					className="btn btn-outline-danger btn-sm float-right"
					onClick={onDelete}>
					<i className="fa fa-trash-o"></i>
				</button>
			</span>
		);
	}
}
