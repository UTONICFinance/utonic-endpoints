
export type MultiPageSetting = {
    page: number;
    pageSize: number;
    searchParam?: Record<string, string>;
}

export type MultiPageData<T> = {
    data: T[];
    totalPage: number;
    loading: boolean;
}

export type MultiPageProps<T> = {
    setting: MultiPageSetting;
    pageData: MultiPageData<T>;
    setCurrentPage: (page: number) => void;
    setPageSize: (pageSize: number) => void;
}
