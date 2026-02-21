import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type Recipe = {
  slug: string;
  title: string;
  ingredients: string[];
  instructions: string;
  image: string;
};

const recipes: Recipe[] = [
  {
    slug: "classic-spanish-paella",
    title: "Classic Spanish Paella",
    ingredients: ["Rice", "Seafood", "Saffron"],
    instructions: "Cook rice with seafood and saffron.",
    image: "/paella.jpg",
  },
  {
    slug: "french-croissant",
    title: "French Croissant",
    ingredients: ["Flour", "Butter", "Yeast"],
    instructions: "Layer dough with butter and bake.",
    image: "/croissant.jpg",
  },
];

export default function RecipePage({ recipe }: { recipe: Recipe }) {
  const router = useRouter();
  const { locale } = router;

  if (!recipe) return <div>Recipe not found</div>;

  // Simple UI translations
  const translations: any = {
    en: { ingredients: "Ingredients", instructions: "Instructions" },
    es: { ingredients: "Ingredientes", instructions: "Instrucciones" },
    fr: { ingredients: "Ingrédients", instructions: "Instructions" },
  };

  const t = translations[locale || "en"];

  const currentUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `http://localhost:3000${router.asPath}`;

  return (
    <div className="min-h-screen p-10">

      <LanguageSwitcher />

      <h1 data-testid="recipe-title" className="text-4xl font-bold mb-6">
        {recipe.title}
      </h1>

      <Image
        src={recipe.image}
        alt={recipe.title}
        width={800}
        height={500}
        className="rounded mb-6"
      />

      <h2 data-testid="ingredients-heading" className="text-2xl font-semibold mb-2">
        {t.ingredients}
      </h2>

      <ul data-testid="recipe-ingredients" className="list-disc pl-6 mb-6">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">
        {t.instructions}
      </h2>

      <div data-testid="recipe-instructions" className="mb-6">
        {recipe.instructions}
      </div>

      <a
        data-testid="social-share-twitter"
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
          currentUrl
        )}&text=${encodeURIComponent(recipe.title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Share on Twitter
      </a>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths: any[] = [];

  recipes.forEach((recipe) => {
    locales?.forEach((locale) => {
      paths.push({
        params: { slug: recipe.slug },
        locale,
      });
    });
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const recipe = recipes.find(r => r.slug === params?.slug);

  if (!recipe) return { notFound: true };

  return { props: { recipe } };
};
