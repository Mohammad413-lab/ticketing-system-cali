export function priorityColor(prio){
    let txt=prio.textContent.toLowerCase();
    switch(txt){
        case "low":prio.style.color="#618B51";
        break;
        case "medium":prio.style.color="#CBB55A";
        break;
        case "high":prio.style.color="#FF7F7F";
    }

}