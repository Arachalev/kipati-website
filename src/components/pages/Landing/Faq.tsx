import classes from "./Faq.module.css";
import FaqQuestions from "./FaqQuestions";

const Faq = () => {
  return (
    <div className={classes.faq}>
      <h2 className={classes.faqH2}>Frequently Asked Questions</h2>
      <div className={classes.faqContainer}>
        <div className={classes.questionContainer} >
          <FaqQuestions
            question="Can I automatically import recipient contacts from Kipati"
            answer="Yes! With Kipati Premium, you can upload a long list of recipient contacts to your reminder with just one click. Import contacts to Kipati in the .CSV and .XSLX formats"
          />
           <FaqQuestions
            question="Can I automatically import recipient contacts from Kipati"
            answer="Yes! With Kipati Premium, you can upload a long list of recipient contacts to your reminder with just one click. Import contacts to Kipati in the .CSV and .XSLX formats"
          />
        </div>
        <div className={classes.questionContainer} >
          <FaqQuestions
            question="Can I automatically import recipient contacts from Kipati"
            answer="Yes! With Kipati Premium, you can upload a long list of recipient contacts to your reminder with just one click. Import contacts to Kipati in the .CSV and .XSLX formats"
          />
           <FaqQuestions
            question="Can I automatically import recipient contacts from Kipati"
            answer="Yes! With Kipati Premium, you can upload a long list of recipient contacts to your reminder with just one click. Import contacts to Kipati in the .CSV and .XSLX formats"
          />
        </div>
        <div className={classes.questionContainer} >
          <FaqQuestions
            question="Can I automatically import recipient contacts from Kipati"
            answer="Yes! With Kipati Premium, you can upload a long list of recipient contacts to your reminder with just one click. Import contacts to Kipati in the .CSV and .XSLX formats"
          />
           <FaqQuestions
            question="Can I automatically import recipient contacts from Kipati"
            answer="Yes! With Kipati Premium, you can upload a long list of recipient contacts to your reminder with just one click. Import contacts to Kipati in the .CSV and .XSLX formats"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
