export const convertNumberToTimeString = (
	stringInput: number,
	isHalf: boolean = false,
) => {
	return `${stringInput.toString().padStart(2, "0")}:${isHalf ? "30" : "00"}`;
};

export const convertNumberToTimeHalfString = (stringInput: number) => {
	return `${convertNumberToTimeString(
		stringInput,
		true,
	)} - ${convertNumberToTimeString(stringInput + 1, true)}`;
};
