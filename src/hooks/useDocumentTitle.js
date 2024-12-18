import { useEffect } from 'react'

export default function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title;

        return () => {
            console.log('Clean up!');
        };
    }, [title]);  // Add `title` as a dependency to avoid unnecessary re-renders
} 