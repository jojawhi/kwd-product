import { useState } from "@wordpress/element";

const Toggle = () => {
	const [toggleOn, setToggleOn] = useState(false);

	const handleToggle = () => {
		setToggleOn((state) => !state);
	};

	return (
		<div className="kwd-toggle-container" onClick={() => handleToggle()}>
			<div
				className={`kwd-toggle-button ${
					toggleOn ? "kwd-toggle-button-on" : "kwd-toggle-off"
				}`}
			></div>
		</div>
	);
};

export default Toggle;
