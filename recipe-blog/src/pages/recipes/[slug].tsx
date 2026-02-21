import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { recipes } from "../../data/recipes";
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

  const pageUrl = `http://localhost:3000/${locale}/recipes/${recipe.slug}`;

  return (
    <>
      {/* ✅ SEO */}
      <Head>
        <title>{recipe.title}</title>
        <meta name="description" content={recipe.instructions} />
        <meta property="og:title" content={recipe.title} />
        <meta property="og:description" content={recipe.instructions} />
        <meta property="og:url" content={pageUrl} />
      </Head>

      <LanguageSwitcher />

      {/* ✅ Title */}
      <h1 data-testid="recipe-title">{recipe.title}</h1>

      {/* ✅ Optimized Image */}
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={600}
        height={400}
      />

      {/* ✅ Ingredients */}
      <h2 data-testid="ingredients-heading">
        {locale === "es"
          ? "Ingredientes"
          : locale === "fr"
          ? "Ingrédients"
          : "Ingredients"}
      </h2>

      <ul data-testid="recipe-ingredients">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* ✅ Instructions */}
      <h2>
        {locale === "es"
          ? "Instrucciones"
          : locale === "fr"
          ? "Instructions"
          : "Instructions"}
      </h2>

      <p data-testid="recipe-instructions">
        {recipe.instructions}
      </p>

      {/* ✅ Twitter Share */}
      <a
        data-testid="social-share-twitter"
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
          pageUrl
        )}&text=${encodeURIComponent(recipe.title)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on Twitter
      </a>

      {/* Example Comments Section (for print hide requirement) */}
      <div data-testid="comments-list">
        <h3>Comments</h3>
        <p>No comments yet.</p>
      </div>
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

  if (!recipe) {
    return { notFound: true };
  }

  return {
    props: {
      recipe,
    },
  };
};
