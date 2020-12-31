

import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';


const EmailLogin = () => {

  const router = useRouter();

  const cookies = new Cookies();

  cookies.set('GrekoAPI_UserId',"", { path: './' });
  cookies.set('email',"", { path: './' });

  //router.push("/");
  return (
    <>
    </>
  );
};

export default EmailLogin;
