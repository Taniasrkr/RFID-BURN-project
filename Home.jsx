import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/on">
        <button>On</button>
      </Link>
      <Link to="/off">
        <button>Off</button>
      </Link>
    </div>
  );
};

export default Home;





// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//     return (
//         <div>
//             <h1>Home Page</h1>
//             <Link to="/rfidform">
//                 <button>Add RFID Data</button>
//             </Link>
//             <Link to="/rfidtable">
//                 <button>Show RFID Data</button>
//             </Link>
//             <Link to="/logform">
//                 <button>Add Log Data</button>
//             </Link>
//             <Link to="/logtable">
//                 <button>Show Log Data</button>
//             </Link>
//             <Link to="/on">
//                 <button>On</button>
//             </Link>
//             <Link to="/off">
//                 <button>Off</button>
//             </Link>
//         </div>
//     );
// };

// export default Home;
