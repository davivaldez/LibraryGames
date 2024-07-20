import { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";

NewGameForm.propTypes = {
  addGame: PropTypes.func,
};

export default function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [titlePlaceholder, setTitlePlaceholder] = useState("Nome do jogo")
  const [coverPlaceholder, setCoverPlaceholder] = useState("Capa do jogo")

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (!title || !cover) {
      if (!title) {
        setTitlePlaceholder("Título está em branco!");
      }

      if (!cover) {
        setCoverPlaceholder("Capa está em branco!");
      }

      return;
    }

    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput 
        id="title" 
        label="Título:"
        placeholder={titlePlaceholder}
        setPlaceholder={setTitlePlaceholder}
        value={title}
        setValue={setTitle}
      />
      <TextInput 
        id="cover" 
        label="Capa:"
        placeholder={coverPlaceholder}
        setPlaceholder={setCoverPlaceholder}   
        value={cover} 
        setValue={setCover} 
      />
      <button type="submit">Adicionar à biblioteca</button>
    </form>
  );
}
