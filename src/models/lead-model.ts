interface LeadModel {
    id?: number;
    name: string;
    lastName: string;
    age: number;
    phone: string;
    sex: 'male' | 'female';
    dataCreating: string;
}

export default LeadModel;