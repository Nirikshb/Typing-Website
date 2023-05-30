import UpperMenu from "./UpperMenu";
import React, {createRef, useEffect, useMemo, useRef, useState} from "react";

var randomwords = require('random-words');

const TypingBox = () => {

    const inputRef = useRef(null);
    const [countDown, setCountDown]= useState(15);
    const [ wordsArray, setWordsArray] = useState(()=>{
        return randomwords(50);    
    });

    const [currWordIndex, setCurrWordIndex]= useState(0);
    const [currCharIndex, setCurrCharIndex]= useState(0);
    
    const wordsSpanRef = useMemo(()=>{
        return Array(wordsArray.length).fill(0).map(i=>createRef(null));  
    }, [wordsArray]);

    const handleUserInput= (e)=>{
        
        const allCurrChars = wordsSpanRef[currWordIndex].current.childNodes;

        if(e.keyCode === 32){
            //logic for space

            if(allCurrChars.length <=currCharIndex){
                //remove cursor from last place in a word
            allCurrChars[currCharIndex-1].classList.remove('current-right');
            }
            else{
                //remove cursor from in between of the word
                allCurrChars[currCharIndex].classList.remove('current');
            }

            wordsSpanRef(currWordIndex+1).current.childNodes[0].className = 'current';
            setCurrWordIndex(currWordIndex+1);
            setCurrCharIndex(0);
            return;
        }

        if(e.keyCode === 8){
            //logic for backspace

            if(currCharIndex !==0){

                if(allCurrChars.length === currCharIndex){

                    if(allCurrChars[curr -1].className.includes('extra')){
                        allCurrChars[currCharIndex-1].remove();
                        allCurrChars[currCharIndex- 2].className+='current-right';
                    }
                    else{
                        allCurrChars[currCharIndex-1].className='current';
                    }
                    setCurrChars[currCharIndex].className='';
                }
                return
            }

            allCurrChars[currCharIndex].className='';
            allCurrChars[currCharIndex-1].className='current';
            setCurrCharIndex(currCharIndex-1);

        }


        return;
    }

     if(currCharIndex === allCurrChars.length){

        let newSpan = document.createElement('span');
        newSpan.innerText=e.key;
        newSpan.className = 'incorrect extra current-right';
        allCurrChars[currCharIndex-1].classList.remove('current-right');
        wordsSpanRef[currCharIndex].current.append(newSpan);
        setCurrCharIndex(currCharIndex+1);
        return;

     }

     if(e.key === allCurrChars[currCharIndex].innerText){
        allCurrChars[currCharIndex].className = 'correct';
     }
     else{
        allCurrChars[currCharIndex].className='incorrect';
     }

     if(currCharIndex+1 === allCurrChars.length){
        allCurrChars[currCharIndex].className +='current-right';
     }
     else{
        allCurrChars[currCharIndex+1].className='current';
     }


      setCurrCharIndex(currCharIndex+1);


  

  const focusInput = ()=>{
    inputRef.current.focus();
  }

  useEffect(()=>{
    focusInput();
    wordsSpanRef[0].current.childNodes[0].className='current';
  }, []);
  
return (
    <div>
        <UpperMenu countDown={countDown}/>
        {(testEnd)? (<h1>Test Over</h1>) :}
        <div className="type-box" onClick={focusInput}>
            <div className="words">
                {
                    wordsArray.map((word,index)=>{
                        <span className="word" ref={wordsSpanRef[index]}>
                            {word.spilt('').map(char=>(
                                <span>{char}</span>
                            ))}
                        </span>
                    })
                }
            </div>
        {/* </div> */}
        <input
        type="text"
        className="hidden-input"
        ref={inputRef}
        onKeyDown={handleUserInput}>
        </input>
    </div>
    
)
            }
export default TypingBox;