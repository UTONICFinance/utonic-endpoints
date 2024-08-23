import { useSetState } from 'ahooks';
import { SetState } from 'ahooks/lib/useSetState';
import { MultiPageData, MultiPageSetting } from '../types/multiPage';

export interface useMultiPageReturn<T> {
    pageSetting: MultiPageSetting;
    pageData: MultiPageData<T>;

    setCurrentPage: (page: number) => void;
    setPageSize: (pageSize: number) => void;
    setPageData: SetState<MultiPageData<T | undefined>>;
}

export const useMultiPage = <T>(initPageSize: number = 10) : useMultiPageReturn<T> => {
    // split control and data
    const [pageSetting, setPageSetting] = useSetState<MultiPageSetting>({
        page: 1,
        pageSize: initPageSize,
    });
    const [pageData, setPageData] = useSetState<MultiPageData<T>>({
        data: [],
        totalPage: 1,
        loading: false,
    });

    return {
        pageSetting,
        pageData,
        setCurrentPage: (page: number) => setPageSetting({ page }),
        setPageSize: (pageSize: number) => setPageSetting({ pageSize }),
        setPageData
    }
}
