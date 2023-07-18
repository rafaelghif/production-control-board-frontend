import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";


export const formatDateTime = (stringDate: string) => {
    return format(parseISO(stringDate), "yyyy-MM-dd HH:mm", { locale: id });
}

export const formatDate = (stringDate: string) => {
    return format(parseISO(stringDate), "yyyy-MM-dd", { locale: id });
}

export const formatDateString = (date: Date) => {
    return format(date, "yyyy-MM-dd", { locale: id });
}

export const formatDateLongString = (date: Date) => {
    return format(date, "EEEE, dd LLLL yyyy");
}

export const formatTimeString = (date: Date) => {
    return format(date, "hh:mm:ss a", { locale: id });
}


export const plus1HourTime = (stringTime: string) => {
    const stringPlusTime = (parseInt(stringTime.split(":")[0]) + 1).toString().padStart(2, "0");
    return `${stringPlusTime.padStart(2, "0")}:00`;
}

export const formatMonthYearFull = (stringDate: string) => {
    return format(parseISO(stringDate), "LLLL wo, yyyy");
}


export const formatDayTimeFull = (stringDate: string) => {
    return format(parseISO(stringDate), "EEEE, hh:mm a");
}

export const getCurrentIsoDateIonic = () => {
    const date = format(parseISO(new Date().toISOString()), "yyyy-MM-dd", { locale: id });
    const time = format(parseISO(new Date().toISOString()), "HH:mm", { locale: id });

    return `${date}T${time}`;
}