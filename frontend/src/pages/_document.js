import  { Head, Main, NextScript } from "next/document";



export default function Document(){

        return (
          <html dir="rtl" lang="fa" >
            <Head>
              <title>next 12</title>
              {/* Step 5: Output the styles in the head  */}
     
            </Head>
            <body >
              <Main />
              <NextScript />
            </body>
          </html>
        );
      

}