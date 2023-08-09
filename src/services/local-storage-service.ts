export const setToken = (token: string): void => {
    localStorage.setItem("token", token);
}

export const setLine = (lineId: string): void => {
    localStorage.setItem("lineSelect", lineId);
}

export const setIdentifier = (identifier: string) => {
    localStorage.setItem("identifier", identifier);
}

export const getToken = (): string | null => {
    const token = localStorage.getItem("token");
    return token;
}

export const getLine = (): string => {
    const line = localStorage.getItem("lineSelect") || "none";
    return line;
}

export const getIdentifier = (): string | null => {
    const token = localStorage.getItem("identifier");
    return token;
}

export const clearLocalStorage = (): void => {
    const identifier = getIdentifier();
    localStorage.clear();
    setIdentifier(identifier!);
}