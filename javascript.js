let cnt=0;
function updatecount(){
    document.getElementById("demo").innerHTML=cnt;
}
function increaseCount(){
    cnt++;
    updatecount();
}
function decreaseCount(){
    cnt--;
    updatecount();
}
function resetCount(){
    cnt=0;
    updatecount();
}
function saveCount(){
    localStorage.setItem("demo",cnt);
    
}
function loadCount(){
    let saved=localStorage.setItem("demo",cnt);
    if(saved!==null){
        cnt=Number(saved);
    }
    updatecount();
}

