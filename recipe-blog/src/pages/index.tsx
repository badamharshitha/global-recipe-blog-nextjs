import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "../components/LanguageSwitcher";
import NewsletterForm from "../components/NewsletterForm";
import { recipes } from "../data/recipes";

interface Recipe {
  slug: string;
  title: string;
  image: string;
  ingredients: string[];
  instructions: string;
  category: string;
  isFeatured: boolean;
}

interface HomeProps {
  featured: Recipe[];
}

export default function Home({ featured }: HomeProps) {
  return (
    <div>
      <LanguageSwitcher />

      <h1>Featured Recipes</h1>

      <div data-testid="featured-recipes">
        {featured.map((recipe) => (
          <div key={recipe.slug} data-testid="recipe-card">
            <Link href={`/recipes/${recipe.slug}`}>
              <h2>{recipe.title}</h2>
            </Link>

            <Image
              src={recipe.image}
              alt={recipe.title}
              width={500}
              height={300}
              priority
            />
          </div>
        ))}
      </div>

      <NewsletterForm />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const featured = recipes.filter((recipe) => recipe.isFeatured);

  return {
    props: {
      featured,
    },
  };
};
