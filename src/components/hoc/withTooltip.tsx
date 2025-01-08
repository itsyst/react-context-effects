import { ComponentType, useState } from 'react';

interface WithTooltipProps {
	showTooltip?: boolean;
}

export default function withTooltip<T extends WithTooltipProps>(
	Component: ComponentType<T>
) {
	return function WithTooltipComponent(props: Omit<T, keyof WithTooltipProps>) {
		const [showTooltip, setShowTooltip] = useState(false);

		return (
			<div
				onMouseEnter={() => setShowTooltip(true)}
				onMouseLeave={() => setShowTooltip(false)}
			>
				<Component {...(props as T)} showTooltip={showTooltip} />
			</div>
		);
	};
}
