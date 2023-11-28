const wordDefs = {
    "yes":{
        partOfSpeach: "noun",
        definitions: ["Used to give an affirmative response.","Used as a response to someone addressing one or otherwise trying to attract one's attention." ]
    } ,
    "panacea":{
        partOfSpeach: "noun",
        definitions: ["An answer or solution for all problems or difficulties. "]
    },
    "concatenation":{
        partOfSpeach: "noun",
        definitions: ["A series of interconnected or interdependent things or events."]
    },
    "saw":{
        partOfSpeach:"verb",
        definitions: ["Cut (something)using a saw.", "Make rapid to-and-fro motions in cutting something or in playing a stringed insturment. "]
    },
    "found":{
        partOfSpeach:"adjective",
        definitions: ["Having been discovered by chance or unexpectedly .", "(of a ship) Equipped;sSupplied."]
    },
    "crane":{
        partOfSpeach:"verb",
        definitions: ["Stretched out one's body or neck in order to see something.","Move (a heavy object) with a crane."]
    },
    "minute":{
        partOfSpeach:"noun",
        definitions:["A period of time equal to sixty seconds or a sixtieth of an hour.", "A sixieth of a degree of angualer measusrment (symobol:')"]
    }, 
    "grotesque":{
        partOfSpeach:"adjective",
        defitnitons:["Comically or repulsivley ugly or distorted "]
    },
    "label":{
        partOfSpeach:"noun",
        definitons: ["A small peice of paper, fabirc , plastic, or similar, material attached to an object and giving infomation about it. "]
    },
    "debacle":{
        partOfSpeach:"noun",
        definitons:["A sudden and ignominious faliure; a fiasco."]
    }
}

var submit = document.getElementById("submit");
var input = document.getElementById("input");
var wordEnterDiv = document.getElementById("wordEnter");
var displayInfo = document.getElementById("displayInfo"); 
var displaying = false;

function wordDef (){
    //this will be the word entered by the user 

    if(displaying === true ){
        displayInfo.innerText = "";
        displaying = false;
    }

    let word = input.value.toLowerCase();
    //check if word is there 
    if(wordDefs.hasOwnProperty(word)){
        let wordInfo = wordDefs[word];
        let speach = document.createElement("p");
        speach.classList.add ("speach")
        speach.innerText = wordInfo.partOfSpeach;
        displayInfo.appendChild(speach);
        //this is created to help the def to display

        for(let i = 0; i < wordInfo.definitions.length; i ++){
            var deffy = document.createElement ("p");
            deffy.classList.add ("deffy");
            deffy.innerText += (i+ 1)+"."+ wordInfo.definitions[i]+"\n";
            displayInfo.appendChild(deffy);
        }
        displaying = true;
    }
    else{
        let wrong = document.createElement("p");
        wrong.innerText = 'Word does not exist in the dictionary';
        displayInfo.appendChild(wrong);
        wrong.id=("wrong");
        displaying = true;
    }

    
}
submit.addEventListener("click", wordDef);
