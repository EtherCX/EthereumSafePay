import React from 'react'
import Link from 'gatsby-link'


// TODO: detect availability of web 3
let web3available = false;

const EtherInterface = () => {
  return (
    (<p><Link to="/pay-now/">"Make a payment now."</Link></p>) +
    (<p><Link to="/pay-later/">"Make a payment later."</Link></p>) +
    (<p><Link to="/cancel-payment/">"Cancel a payment you've sent."</Link></p>) +
    (<p><Link to="/refund-payment/">"Refund a payment you've received."</Link></p>)
  );
}

const EtherError = () => {
  console.log("Thee was a serious error establishing a connection to the blockchain.");
  return (
    <div>
      <p>There was a serious effor establishing a connection to the blockchain. Do you have an Ethereum node installed?</p>
    </div>
  )
}


const IndexPageNoWeb3 = () => {
//   return (<p>ok</p>);
// }
    return (
      <div>
        <h1>Ethereum Safe Pay</h1>
        <p>Welcome Ethereum Safe Pay.</p>
        { web3available ? (<EtherInterface></EtherInterface>) :
          (<p>awww shucks!</p><EtherError></EtherError>)
        }
      </div>);
};

const IndexPageWithWeb3 = () => {
  <p>darn</p>
}
//   return (
//     <div>
//         <h1>Ethereum Safe Pay</h1>
//         <p>Welcome Ethereum Safe Pay.</p>
//       { web3available ? (
//           <p>you're hooked up!</p>
//           <p><Link to="/pay-now/">{"Make a payment now."}</Link></p>
//           <p><Link to="/pay-later/">{"Make a payment later."}</Link></p>
//           <p><Link to="/cancel-payment/">{"Cancel a payment you've sent."}</Link></p>
//           <p><Link to="/refund-payment/">{"Refund a payment you've received."}</Link></p>) :
//         (<p>awww shucks!</p>);
//       }
//     </div>);
// };

const IndexPage = web3available ? IndexPageWithWeb3 : IndexPageNoWeb3;

export default IndexPage
