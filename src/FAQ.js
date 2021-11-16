import React from 'react'

function FAQ({faq, index, toggleFAQ}) {
    const test = <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.2469 22.1114C15.9061 22.1114 20.4938 17.6406 20.4938 12.1257C20.4938 6.61071 15.9061 2.13995 10.2469 2.13995C4.5877 2.13995 0 6.61071 0 12.1257C0 17.6406 4.5877 22.1114 10.2469 22.1114Z" fill="white"/>
    <path d="M10.247 21.6121C15.6233 21.6121 19.9816 17.3649 19.9816 12.1256C19.9816 6.88644 15.6233 2.63922 10.247 2.63922C4.87077 2.63922 0.512451 6.88644 0.512451 12.1256C0.512451 17.3649 4.87077 21.6121 10.247 21.6121Z" stroke="#00ADAA"/>
    <path d="M4.09888 9.42949L9.83715 17.1964L21.8732 1.37402" stroke="#00ADAA" stroke-width="2" stroke-linecap="round"/>
    </svg>;
    return (
        <div 
            className={"faq " + (faq.open ? 'open' : '')}
            key={index}
            onClick={() => toggleFAQ(index)}
        >
            <div className="faq-question">
                <div className="faq-number">{index+1}</div>{faq.question}
            </div>
            <div className="faq-answer">   
                <p>{(faq.answer1 != '' ? test : '')}  {faq.answer1}</p>
                <p>{(faq.answer2 != '' ? test : '')} {faq.answer2}</p>
                <p>{(faq.answer3 != '' ? test : '')} {faq.answer3}</p>
            </div>
        </div>
        
    )
}

export default FAQ
