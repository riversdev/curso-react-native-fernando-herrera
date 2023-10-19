export interface ReqResInterface {
    data: User[];
    page: number;
    per_page: number;
    support: Support;
    total: number;
    total_pages: number;
}

export interface User {
    avatar: string;
    email: string;
    first_name: string;
    id: number;
    last_name: string;
}

export interface Support {
    text: string;
    url: string;
}