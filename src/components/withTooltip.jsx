import { useState } from 'react';

function withTooltip(Component) {
	function WithTooltip(props) {
		const [showTooltip, setShowTooltip] = useState(false);

		const mouseOver = () => {
			setShowTooltip(true);
		};

		const mouseOut = () => {
			setShowTooltip(false);
		};

		return (
			<div onMouseOver={mouseOver} onMouseOut={mouseOut}>
				<Component showTooltip={showTooltip} {...props} />
			</div>
		);
	}

	// Set a display name for debugging
	const componentName = Component.displayName || Component.name || 'Component';
	WithTooltip.displayName = `withTooltip(${componentName})`;

	return WithTooltip;
}

export default withTooltip;
