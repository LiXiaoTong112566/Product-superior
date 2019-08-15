import fly from "../utils/request";

//搜索
export let searchShop = params => {
    return fly.post('/api/open/search/query/1.0.0', params);
}