import { FakeHook } from "../../hooks/fakeHook";

const Content = () => {
  const { loading } = FakeHook();

  return (
    <div>
      {loading ? (
        <div data-testid='loading'>Carregando...</div>
      ) : (
        <div>Conteúdo</div>
      )}
    </div>
  );
};

export default Content;
