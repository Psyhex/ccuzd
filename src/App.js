import React, { useState } from "react";
import Header from "./Header";
import FAQ from "./FAQ";

function App () {
  const [faqs, setfaqs] = useState([
    {
      question: 'Build test task',
      answer1: 'Create repository',
      answer2: 'Implement design',
      answer3: 'Implement functionality',
      open: true
    },
    {
      question: 'Submit your test task',
      answer1: 'Open email client',
      answer2: 'Sent link with information to careers@cornercasetech.com',
      answer3: '',
      open: false
    },
    {
      question: 'Participate in tech interview',
      answer1: 'Talk with HR',
      answer2: 'Talk with Tech team',
      answer3: '',
      open: false
    },
    {
      question: 'Receive answer',
      answer1: 'Receive answers',
      answer2: 'Start your IT career',
      answer3: '',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} toggleFAQ={toggleFAQ}/>
        ))}
      </div>
    </div>
  );
}

export default App;