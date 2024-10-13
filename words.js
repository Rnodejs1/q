window.addEventListener("DOMContentLoaded",()=>{
    let add;
    let quiz;
    let memory;
    let q
    let japan,english,inpja,inpen;
    let fpress,start,end,flagnew,flagquiz,flaglist,wordsE,wordsP;
    let quizi,page1,page2,page3,fa;
    flagnew=flagquiz=flaglist=false;
    wordsP=[];wordsE=[]
    inpen=inpja="" 
    words={};
    english=document.querySelector(".ja");  
    japan=document.querySelector(".inpen"); 
    quiz = document.querySelector(".quiz");
    add  = document.querySelector(".add");
    memory = document.querySelector(".memory");
    page1  = document.querySelector(".page1");
    page2  = document.querySelector(".page0");
    page3=document.querySelector(".quizt");
    fpress = document.querySelector(".press");
    let ok = document.querySelector(".determine");
    let count     // start = document.querySelector(".start");
    q = document.querySelector(".q");
    start = document.querySelector(".qqq");
    let quizstart,i,wordc,qu;i=0; wordc=false
    
    

    quiz.addEventListener("click",()=>{ 
        flagquiz=true;flagnew=false;
        page1.style.display='none';page2.style.display='block'; })

    function sta(){
        setTimeout(() => {
        count.innerHTML="1"
        setTimeout(()=>{
        count.innerHTML="2"   
        setTimeout(() => {count.innerHTML="3"}, 1000); },1000)}, 9);}
    
    function star(){
        if(quizi===false)
        {
            startmenu.display="block";
        }
    else{
        startmenu.display="none"
    }}

    function createquiz( wayaku, eigo) {
        let  word = {};
        word .question = eigo;
        word.answer = wayaku;wordsP.push(word);}
    

    quizstart=()=>{ if(wordc==false){wordsE=wordsP.slice();wordc=true}if (i===wordsE.length){i=0;
            wordc=false; q.innerHTML="No"}
        else{ 
            qu=wordsE[i];q.innerHTML=qu.question 
            i++;
            
    }}

    add.addEventListener("click",()=>{
        flagnew=true;flagquiz=false;page1.style.display='block';page2.style.display='none'; })
        
    fpress.addEventListener("click",()=>{
        inpen=english.value;inpja=japan.value; 
        if(inpen==''||inpja==""){
            }
        else {createquiz(inpja,inpen)
            inpen=inpja=""
            english.value="";
            japan.value="";
         }})

    ok.addEventListener("click",()=>{{check();  }
     

 })
function check(){alert("h")
                     end=start.value
    
    start.value=""
    
        if(end===count){
            


        }
        else{


        }
            }
    quizstart()
    })