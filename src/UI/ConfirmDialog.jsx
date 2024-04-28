/* eslint-disable react/prop-types */
import Button from "./Button";
import classes from "./ConfirmDialog.module.css";

function ConfirmDialog({ query, success, cancel, onSuccess, onCancel }) {
	function handleSubmit(event) {
		event.preventDefault();
		onSuccess();
	}

	return (
		<div className={classes["dialog"]}>
			<p>{query}</p>
			<form onSubmit={handleSubmit}>
				<Button
					type="submit"
					variant="primary"
				>
					{success}
				</Button>
				<Button
					type="button"
					variant="text"
					onClick={onCancel}
				>
					{cancel}
				</Button>
			</form>
		</div>
	);
}

export default ConfirmDialog;
