import React from 'react';

import './sign-inup.style.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
const SignInUpPage =() =>(

    <div className='sign-InUp-page'>
<SignIn/>
<SignUp/>
    </div>
);
export default SignInUpPage;