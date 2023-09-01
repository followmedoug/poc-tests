const Navbar = () => {
  return (
    <nav
      style={{
        width: "100%",
        flexShrink: 0,
        background: "#000",
        padding: "16px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img
        src='/totvs.svg'
        style={{
          width: "118px",
          height: "35px",
        }}
      />
      <input
        placeholder='Buscar eventos'
        style={{
          width: "601px",
          height: "40px",
          flexShrink: 0,
          borderRadius: "30px",
          border: "1px solid #E6E7E8",
          background: "#000",
        }}
      />
      <button
        style={{
          display: "flex",
          width: "126px",
          height: "40px",
          padding: "8px 32px",
          justifyContent: "center",
          alignItems: "center",
          gap: "9px",
          flexShrink: 0,
          borderRadius: "30px",
          background: "#FEAC0E",
          color: "#FFF",
          fontFamily: "Lato",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "16px",
          border: "none",
        }}
      >
        Entrar
      </button>
      <button>Criar conta</button>
    </nav>
  );
};

export default Navbar;
