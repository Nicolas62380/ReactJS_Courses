// App.tsx

import React from "react";
import { LoginScreen } from "./src/screens/LoginScreen";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";
import { TermsScreen } from "./src/screens/TermsScreen";
//import { WhatEverScreen } from "./src/screens/WhatEverScreen";

const App = () => {
  return (
    //<LoginScreen />
    //<TermsScreen />
    <StarshipFeedScreen />
  );
};

// always export default App otherwise Expo is not happy
export default App;