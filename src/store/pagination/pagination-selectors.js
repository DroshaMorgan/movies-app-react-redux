export const selectPageCount = (state) => state.paginationReducer;

export const selectArrPageCount = (state, pageCount) => {
    for (let i = 1; i < pageCount + 1; i++) {
        // if (apiState===API_URL_POPULAR){
        //     let arr = [...Array(20).keys()].map(x => ++x);
        //     setPageCount(arr);
        //     return
        // }
        let arrPageCount = [...Array(i).keys()].map(x => ++x);
        if (arrPageCount[arrPageCount.length - 1] === pageCount) {
            return arrPageCount;
        }
    }
}