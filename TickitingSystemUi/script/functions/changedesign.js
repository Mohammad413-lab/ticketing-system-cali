export function changeDesign(firstDesign,secondDesign,w){
    if(screen.width <=w){
        return firstDesign;
      } else{
        return secondDesign;
      }
}