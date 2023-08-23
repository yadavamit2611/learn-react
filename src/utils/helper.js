export const filterData = (text, data) => {
    if(text){
        return data.filter((elem) => elem?.brand?.name?.toLowerCase()?.includes(text?.toLowerCase()));
    }else{
        return data;
    }
}; 