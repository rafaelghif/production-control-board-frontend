export const setToken = (token: string): void => {
    localStorage.setItem("token", token);
}

export const setIdentifier = (identifier: string) => {
    localStorage.setItem("identifier", identifier);
}

export const getToken = (): string | null => {
    const token = localStorage.getItem("token");
    return token;
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