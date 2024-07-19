import Game from "./components/Game";
import NewGameForm from "./components/NewGameForm";
import useGameCollection from "./hooks/useGameCollection";

export default function App() {
  const { games, addGame, removeGame } = useGameCollection();

  return (
    <div id="app">
      <h1>Biblioteca de Jogos</h1>
      <NewGameForm addGame={addGame} />
      <div className="games">
        {games.length > 0 
          ? games.map(({ id, title, cover }) => (
          <Game 
            key={id} 
            title={title} 
            cover={cover} 
            onRemove={() => removeGame(id)} 
          />)) 
          : (
            <h2 style={{margin: "4rem auto" }}>Parece que ainda não tem nada aqui. Tente adicionar alguns jogos!</h2>
          )}
      </div>
    </div>
  );
}
