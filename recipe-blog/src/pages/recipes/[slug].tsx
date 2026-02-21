import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { recipes } from "../../data/recipes";

export default function RecipePage({ recipe }: any) {
  const router = useRouter();

  if (!recipe) return <div>Not found</div>;

  const url = `http://localhost:3000${router.asPath}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url
  )}&text=${encodeURIComponent(recipe.title)}`;

  return (
    <div>
      <LanguageSwitcher />

      <h1 data-testid="recipe-title">{recipe.title}</h1>

      <Image
        src={recipe.image}
        alt={recipe.title}
        width={600}
        height={400}
      />

      <h2 data-testid="ingredients-heading">Ingredients</h2>
      <ul data-testid="recipe-ingredients">
        {recipe.ingredients.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <p data-testid="recipe-instructions">{recipe.instructions}</p>

      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="social-share-twitter"
      >
        Share on Twitter
      </a>

      <div data-testid="comments-list">
        <h3>Comments</h3>
        <p>No comments yet.</p>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = recipes.map((recipe) => ({
    params: { slug: recipe.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const recipe = recipes.find((r) => r.slug === params?.slug);

  if (!recipe) {
    return { notFound: true };
  }

  return {
    props: { recipe },
  };
};
