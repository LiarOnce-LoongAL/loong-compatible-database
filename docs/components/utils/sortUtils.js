export const sortValue = (a, b) => {
    // Convert upper case to sort list
    const upperA = a.value.toUpperCase();
    const upperB = b.value.toUpperCase();

    let result;
    if (upperA < upperB) {
        result = -1;
    } else if (upperA > upperB) {
        result = 1;
    } else {
        result = 0;
    }
    return result;
};