import { useEffect } from 'react';

const useDocumentTitle = (title: string) => {
	return useEffect(() => {
		document.title = title;
	}, [title]); // Add `title` as a dependency to avoid unnecessary re-renders
};

export default useDocumentTitle;
