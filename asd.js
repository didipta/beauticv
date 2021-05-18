window.addEventListener('load',()=>
{
    
    const name=sessionStorage.getItem('NAME');
    const ad=sessionStorage.getItem('AD');
    const mn=sessionStorage.getItem('MN');
    const el=sessionStorage.getItem('EL');
    document.getElementById('n').innerHTML=name;
    document.getElementById('A').innerHTML="Residence&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:"+ad;
    document.getElementById('M').innerHTML="Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:"+mn;
    document.getElementById('E').innerHTML="E-mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:"+el;
}

)


