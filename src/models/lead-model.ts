interface LeadModel {
    id?: number;
    name: string;
    lastName: string;
    age: number;
    phone: string;
    sex: 'male' | 'female';
    createdAt?: Date;
}

export default LeadModel;