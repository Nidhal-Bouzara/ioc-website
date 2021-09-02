import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Display from './components/Display/Display';

// styles
import signupStyle from './Signup.module.scss';

const Signup = (props: RouteComponentProps) => {
  const dec_array = (Array(9).fill(0)).map((elm,i)=><div key={"background"+i}>IMPACT OF CODE IMPACT OF CODE IMPACT OF CODE</div>);
  return (
    <main className={signupStyle.container}>
      <div className={signupStyle.background_dec}>
        { dec_array }
      </div>
      <Display />
    </main>
  );
}

export default Signup;
