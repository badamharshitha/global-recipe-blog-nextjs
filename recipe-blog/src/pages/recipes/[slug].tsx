import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { recipes } from "../../data/recipes";
import LanguageSwitcher from "../../components/LanguageSwitcher";

export default function RecipePage({ recipe }: any) {
  const { locale } = useRouter();

  if (!recipe) return <div>Not found</div>;

  const title = recipe.title[locale as keyof typeof recipe.title];
  const ingredients = recipe.ingredients[locale as keyof typeof recipe.ingredients];
  const instructions = recipe.instructions[locale as keyof typeof recipe.instructions];

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}`;

  return (
    <div style={{ padding: 20 }}>
      <LanguageSwitcher />

      <h1>{title}</h1>

      <Image src={recipe.image} alt="recipe" width={500} height={300} />

      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <p>{instructions}</p>

      <a href={twitterUrl} target="_blank">
        Share on Twitter
      </a>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = recipes.map((recipe) => ({
    params: { slug: recipe.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const recipe = recipes.find((r) => r.slug === params?.slug);
  return { props: { recipe } };
};
