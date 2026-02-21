import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "../components/LanguageSwitcher";
import NewsletterForm from "../components/NewsletterForm";
import { recipes } from "../data/recipes";

export default function Home({ featured }: any) {
  return (
    <div>
      <LanguageSwitcher />

      <h1>Featured Recipes</h1>

      <div data-testid="featured-recipes">
        {featured.map((recipe: any) => (
          <div key={recipe.slug} data-testid="recipe-card">
            <Link href={`/recipes/${recipe.slug}`}>
              <h3>{recipe.title}</h3>
            </Link>

            <Image
              src={recipe.image}
              alt={recipe.title}
              width={500}
              height={300}
            />
          </div>
        ))}
      </div>

      <NewsletterForm />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {

const featured = recipes;
  return {
    props: {
      featured,
    },
  };
};
