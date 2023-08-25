export const filterData = (text, data) => {
    if(text){
        return data.filter((elem) => elem?.brand?.name?.toLowerCase()?.includes(text?.toLowerCase()));
    }else{
        return data;
    }
}; 

export const euros = (data) => {
    const price = String(data).split("");
    price.length > 3 ? price.splice(2,-1,",") : price.splice(1,-1,",");
    return price;
}