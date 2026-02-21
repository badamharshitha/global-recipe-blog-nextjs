import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { recipes } from "../../data/recipes"; // ✅ named import
import LanguageSwitcher from "../../components/LanguageSwitcher";

interface Recipe {
  slug: string;
  title: string;
  image: string;
  ingredients: string[];
  instructions: string;
}

interface Props {
  recipe: Recipe;
}

export default function RecipePage({ recipe }: Props) {
  const router = useRouter();
  const { locale } = router;

  if (!recipe) return <div>Recipe not found</div>;

  const pageUrl = `https://your-domain.com/${locale}/recipes/${recipe.slug}`;

  return (
    <>
      <Head>
        <title>{recipe.title}</title>
        <meta name="description" content={recipe.instructions} />
      </Head>

      <LanguageSwitcher />

      <h1>{recipe.title}</h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        width="600"
      />

      <h2>
        {locale === "es"
          ? "Ingredientes"
          : locale === "fr"
          ? "Ingrédients"
          : "Ingredients"}
      </h2>

      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>
        {locale === "es"
          ? "Instrucciones"
          : locale === "fr"
          ? "Instructions"
          : "Instructions"}
      </h2>

      <p>{recipe.instructions}</p>

      <a
        href={`https://twitter.com/intent/tweet?text=${recipe.title}&url=${pageUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on Twitter
      </a>
    </>
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

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const recipe = recipes.find(
    (r) => r.slug === params?.slug
  );

  return {
    props: {
      recipe,
    },
  };
};
