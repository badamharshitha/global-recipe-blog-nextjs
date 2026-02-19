import { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type Recipe = {
  slug: string;
  title: string;
  ingredients: string[];
  instructions: string;
};

type Props = {
  recipe: Recipe;
};

export default function RecipePage({ recipe }: Props) {
  return (
    <div className="min-h-screen p-10">
      <h1
        data-testid="recipe-title"
        className="text-3xl font-bold mb-6"
      >
        {recipe.title}
      </h1>

      <ul
        data-testid="recipe-ingredients"
        className="mb-6 list-disc pl-6"
      >
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div data-testid="recipe-instructions">
        {recipe.instructions}
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const recipes = [
    { slug: "classic-spanish-paella" },
    { slug: "french-croissant" },
  ];

  return {
    paths: recipes.map((recipe) => ({
      params: { slug: recipe.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const data = {
    "classic-spanish-paella": {
      slug: "classic-spanish-paella",
      title: "Classic Spanish Paella",
      ingredients: ["Rice", "Seafood", "Saffron"],
      instructions: "Cook rice with seafood and saffron.",
    },
    "french-croissant": {
      slug: "french-croissant",
      title: "French Croissant",
      ingredients: ["Flour", "Butter", "Yeast"],
      instructions: "Layer dough with butter and bake.",
    },
  };

  const recipe = data[params?.slug as keyof typeof data];

  if (!recipe) {
    return { notFound: true };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      recipe,
    },
  };
};
