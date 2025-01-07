export function showList(list,fun){
    let filter=list;
    for(let index=0;index<filter.length;index++){
       fun(filter[index]);
    }
    return filter;
   
    
}