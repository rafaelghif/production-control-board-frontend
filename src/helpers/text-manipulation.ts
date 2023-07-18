export const convertNumberToTimeString = (stringInput: number) => {
    return `${stringInput.toString().padStart(2, "0")}:00`;
}