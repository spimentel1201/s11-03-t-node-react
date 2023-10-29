export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
  
    const day: string = String(date.getDate()).padStart(2, '0');
    const month: string = String(date.getMonth() + 1).padStart(2, '0');
    const year: number = date.getFullYear();
  
    return `${day}-${month}-${year}`;
};


export const extractTimeFromDate = (dateString: string): string => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
  
    const hours: string = String(date.getUTCHours()).padStart(2, '0');
    const minutes: string = String(date.getUTCMinutes()).padStart(2, '0');
  
    return `${hours}:${minutes}`;
  }