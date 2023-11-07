import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState<boolean>(false);

	const handleChange = (event: MediaQueryListEvent) => {
		setMatches(event.matches);
	};

	useEffect(() => {
		const mediaQueryList = window.matchMedia(query);

		// Initial check
		setMatches(mediaQueryList.matches);

		// Event listener for changes in media query
		const handleChangeEvent = (event: MediaQueryListEvent) =>
			handleChange(event);
		mediaQueryList.addEventListener("change", handleChangeEvent);

		// Clean up the event listener
		return () => {
			mediaQueryList.removeEventListener("change", handleChangeEvent);
		};
	}, [query]);

	return matches;
};

export default useMediaQuery;
