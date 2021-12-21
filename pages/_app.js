import '../styles/flex.module.css'
// import Layout from '../components/layout';
import "tailwindcss/tailwind.css";
import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);
  return(

    <Component {...pageProps} />


  )


}

export default MyApp
