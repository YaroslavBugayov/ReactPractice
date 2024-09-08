export const calculateAge = (birthDate: string) => {
    const current = new Date();
    const birth = new Date(birthDate);

    let age = current.getFullYear() - birth.getFullYear();
    const monthDifference = current.getMonth() - birth.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && current.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}