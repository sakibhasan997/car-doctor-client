import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then((result) => {
            const user = result.user;
            console.log(user);
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    return (
        <div>
            <div className="divider">OR</div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;