import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

type Recipe = {
  slug: string;
  title: string;
  image: string;
  ingredients: string[];
  instructions: string;
};

type Props = {
  recipe: Recipe;
};

export default function RecipePage({ recipe }: Props) {
  const router = useRouter();
  const currentUrl = `http://localhost:3000${router.asPath}`;

  return (
    <>
      <Head>
        <title>{recipe.title}</title>
        <meta name="description" content={recipe.instructions} />
      </Head>

      <div className="p-10 max-w-3xl mx-auto">
        <h1
          data-testid="recipe-title"
          className="text-4xl font-bold mb-6"
        >
          {recipe.title}
        </h1>

        <div className="mb-6">
          <Image
            src={`/${recipe.image}`}
            alt={recipe.title}
            width={800}
            height={500}
            className="rounded"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-3">
          Ingredients
        </h2>

        <ul
          data-testid="recipe-ingredients"
          className="mb-6 list-disc pl-6"
        >
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-3">
          Instructions
        </h2>

        <div data-testid="recipe-instructions">
          {recipe.instructions}
        </div>

        {/* Twitter Share */}
        <div className="mt-6">
          <a
            data-testid="social-share-twitter"
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              currentUrl
            )}&text=${encodeURIComponent(recipe.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Share on Twitter
          </a>
        </div>
      </div>
    </>
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const recipes: Recipe[] = [
    {
      slug: "classic-spanish-paella",
      title: "Classic Spanish Paella",
      image: "paella.jpg",
      ingredients: ["Rice", "Seafood", "Saffron"],
      instructions: "Cook rice with seafood and saffron.",
    },
    {
      slug: "french-croissant",
      title: "French Croissant",
      image: "croissant.jpg",
      ingredients: ["Flour", "Butter", "Yeast"],
      instructions: "Layer dough with butter and bake.",
    },
  ];

  const recipe = recipes.find((r) => r.slug === params?.slug);

  if (!recipe) {
    return { notFound: true };
  }

  return {
    props: {
      recipe,
    },
  };
};
