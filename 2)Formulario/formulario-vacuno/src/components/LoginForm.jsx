import { useState } from "react";
export default function LoginForm() {

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuario:", usuario);
    console.log("Contraseña:", password);
    console.log("Email:", email);
  };
  return (
    <form onSubmit={handleSubmit}>


      <h2>Iniciar sesión</h2>

      <label>
        Usuario:
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </label>

      <label>
        Contraseña:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <button type="submit">Enviar</button>

      <p>
        ¿No tenés cuenta? <a href="#">Registrate acá</a>
      </p>
    </form>
  );
}