import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { recipes } from "../../data/recipes";

export default function RecipesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filtered = recipes.filter((recipe) => {
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category
      ? recipe.category === category
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <h1>All Recipes</h1>

      <input
        data-testid="search-input"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        data-testid="category-filter"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
      </select>

      {filtered.map((recipe) => (
        <div key={recipe.slug} data-testid="recipe-card">
          <Link href={`/recipes/${recipe.slug}`}>
            <h2>{recipe.title}</h2>
          </Link>
          <Image
            src={recipe.image}
            alt={recipe.title}
            width={400}
            height={250}
          />
        </div>
      ))}
    </div>
  );
}
