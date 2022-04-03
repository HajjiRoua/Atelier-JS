while(true){
    let a=Math.floor(Math.random()*10);
    let level=prompt("choose difficulty level 1/2/3");
    let Try=(level==1)?10:(level==2)?5:2
    let y=0;
    for (let i = 0; i < Try; i++) {
        if(i!=0) alert("Wrong")
        let guess=prompt(`Guess the  NUMBER between 0 and 10 you have ${Try-i} tries`)
        if (guess==a){ 
            alert("Winner,Good job !!!")
            y=1
            break;
        }
    }
    if (y!=1){
        alert("Game over :(")
    }
    let repeat=prompt(`The answer was ${a}\n wanna try again ? yes/no`)
    if (repeat=="no"){
        window.location.href = "../../index.html";
        break;
    }
}