import { useState } from "react";

const T0UseContext = () => {
  const [user, setUser] = useState(false);
  return (
    <>
      <p>{user ? "Contectado" : "Desconectado"}</p>
      {user ? (
        <button onClick={() => setUser(false)}>Cerrar Sesion</button>
      ) : (
        <button onClick={() => setUser(true)}>Iniciar Sesion</button>
      )}
    </>
  );
};

export { T0UseContext };
