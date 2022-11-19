import React from "react";
const Contact = React.lazy(() => import("./Contact"));

const App = () => {
  const [active, setActive] = React.useState(false);

  return (
    <>
      {active && (
        <React.Suspense>
          <Contact fallback={<div>Loading...</div>} />
        </React.Suspense>
      )}
      <button onClick={() => {setActive((prev) => !prev)}}>Contact</button>
    </>
  );
};

export default App;
