export interface Employee{
    id: number;
    first_name: string;
    last_name: string;
    email: string;
}

export interface InitialStateEmployee{
    data: Employee[];
    loading: boolean;
    error: string;
}