function hands(){

    const name= document.getElementById('name').value;
    const ad = document.getElementById('ad').value;
    const mn = document.getElementById('mn').value;
    const el = document.getElementById('el').value;

    sessionStorage.setItem("NAME",name);
    sessionStorage.setItem("AD",ad);
    sessionStorage.setItem("MN",mn);
    sessionStorage.setItem("EL",el);
    return;

}