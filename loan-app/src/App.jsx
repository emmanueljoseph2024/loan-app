import WelcomePage from './welcomePage/WelcomePage.jsx'
import LoginPage from './loginPage/LoginPage.jsx'
import SignupPage from './signupPage/SignupPage.jsx'
import KYCForm from './kycForm/KYC.jsx'
import HomePage from './homepage/HomePage.jsx'
import UserAccount from './homepage/UserAccount.jsx'
import UserForm from './homepage/UserForm.jsx'
import AdminForm from './homepage/AdminForm.jsx'
import UserDashboard from './homepage/UserDashboard.jsx'
import Transaction from './homepage/Transaction.jsx'
import Repay from './homepage/Repay.jsx'
import ErrorPage from './ErrorPage.jsx'
//Footer pages
import Terms from './terms/Terms.jsx'
import PrivacyPolicy from './privacyPolicy/PrivacyPolicy.jsx'
import DataUsagePolicy from './dataUsagePolicy/DataUsagePolicy.jsx'
import LoanAgreement from './loanAgreement/LoanAgreement.jsx'
import HowItWorks from './howItWorks/HowItWorks.jsx'
import LoanEligibility from './loanEligibility/LoanEligibility.jsx'
import ApplyForALoan from './applyForALoan/ApplyForALoan.jsx'
import RepaymentProcess from './repaymentProcess/RepaymentProcess.jsx'
import FAQs from './faqs/FAQs.jsx'

//router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css'

function App() {
  //main routes
  const route = createBrowserRouter([
         {
      path:'/',
      element:<WelcomePage />,
      errorElement: <ErrorPage />
    },
    {
      path:'/repay',
      element: <Repay />,
      errorElement: <ErrorPage />
    }
    ,
    {
      path:'/userdashboard',
      element:<UserDashboard />,
      errorElement: <ErrorPage />
    },
   {
    path:'/history',
    element: <Transaction />,
    errorElement: <ErrorPage />
   }
   ,
        {
      path:'/homepage',
      element:<HomePage/>,
      errorElement: <ErrorPage />
    },
          {
      path:'/adminform',
      element:<AdminForm/>,
      errorElement: <ErrorPage />
    },
      {
      path:'/kyc',
      element:<KYCForm/>,
      errorElement: <ErrorPage />
    },
    {
      path:'/userform',
      element:<UserForm />,
      errorElement: <ErrorPage />
    }
    ,
    {
       path:'useraccount',
       element:<UserAccount />,
       errorElement: <ErrorPage />
    }
    ,
    {
      path:'/login',
      element: <LoginPage />,
      errorElement: <ErrorPage />
    },
    {
      path:'/signup',
      element: <SignupPage />,
      errorElement: <ErrorPage />
    },
     {
      path:'/terms',
      element:<Terms />,
      errorElement: <ErrorPage />
    },
    {
      path:'/privacypolicy',
      element:<PrivacyPolicy />,
      errorElement: <ErrorPage />
    },
     {
      path:'/datausagepolicy',
      element:<DataUsagePolicy />,
      errorElement: <ErrorPage />
    },
     {
      path:'/loanagreement',
      element:<LoanAgreement />,
      errorElement: <ErrorPage />
    },
       {
      path:'/howitworks',
      element:<HowItWorks />,
      errorElement: <ErrorPage />
    },
        {
      path:'/loaneligibility',
      element:<LoanEligibility />,
      errorElement: <ErrorPage />
    },
         {
      path:'/applyforloan',
      element:<ApplyForALoan />,
      errorElement: <ErrorPage />
    },
         {
      path:'/repaymentprocess',
      element:<RepaymentProcess />,
      errorElement: <ErrorPage />
    },
       {
      path:'/faqs',
      element:<FAQs />,
      errorElement: <ErrorPage />
    },
    {
      path: '*',
      element: <ErrorPage />
    },
  ]);
  return (
    <>
          <RouterProvider router={route} />
    </>
  )
}

export default App;
