import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData(initialFormState);
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input name="name" type="text" placeholder="Name" onChange={handleChange} value={formData.name} /></td>
            <td><input name="cuisine" type="text" placeholder="Cuisine" onChange={handleChange} value={formData.cuisine} /></td>
            <td><input name="photo" type="text" placeholder="URL" onChange={handleChange} value={formData.photo} /></td>
            <td><textarea name="ingredients" placeholder="Ingredients" onChange={handleChange} value={formData.ingredients}></textarea></td>
            <td><textarea name="preparation" placeholder="Preparation" onChange={handleChange} value={formData.preparation}></textarea></td>
            <td><button type="submit">Create</button></td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
