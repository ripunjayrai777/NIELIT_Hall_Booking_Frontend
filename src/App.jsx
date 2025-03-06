// import React from "react";
// import "../src/index.css";

// function App() {
//   return (
//     <>
//       <h1>ram ram</h1>
//     </>
//   );
// }

// export default App;
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import "../src/index.css";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
