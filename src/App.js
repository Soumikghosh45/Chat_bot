import react from 'react';
import ChatBot from 'react-simple-chatbot';

function App() {
  return (
    <>
      <ChatBot
     headerTitle="Speech Synthesis"
    speechSynthesis={{ enable: true, lang: 'en' }}
       Conts steps={[
          {
            id: "Greet",
            message: "Hello, Welcome to AdmitWise",
            trigger: "Done",
          },
          {
            id: "Done",
            message: "Please enter your name!",
            trigger: "waiting1",
            
          },
          {
            id: "waiting1",
            user: true,
            trigger: "Name",
          },
          {
            id: "Name",
            message: "Hi {previousValue}, Please select Where You Want to Admission",
            trigger: "issues",
          },
          
          {
            id: "issues",
            options: [
              {
                value: "School",
                label: "School",
                trigger: "School",
              },
              {
                value: "College",
                label: "College",
                trigger: "College"
              },
              {
                value: "University",
                label: "University",
                trigger:"University"
              },
              
              
            ],
          }, {
            id: "School",
            message:
              "1.Calcutta International School.          2.Lakshmipat Singhania Academy.          3.Don Bosco School Kolkata.4.Birla High School Kolkata.5.Cambridge School Kolkata..Loreto House Kolkata.7.Calcutta Boys School Kolkata.8.Calcutta Girls High School.     This is our best School in West Bengal",
            //end: true,
          },
          {
            id: "College",
            message:
              "1.JISCE.  2.GNIT.  3.NIT 4.SCSIT 5.GNFISC 6.GNIHM 7.TECHNO MAIN  8.IBM  9.UEM 10.HIT  This is our best College in West Bengal",
            //end: true,
          },
          {
            id:"University",
            message: " 1.JU 2.Adamas University 3.MAKAUT  4.JIS UNIVERSITY.   This is our best University in West Bengal",
            //end: true,
          },
         

        ]}
        floating={true}
      />
    </>

  );
}

export default App;
