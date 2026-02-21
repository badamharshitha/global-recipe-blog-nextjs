import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type Recipe = {
  slug: string;
  title: string;
  image: string;
  isFeatured: boolean;
};

const recipes: Recipe[] = [
  {
    slug: "classic-spanish-paella",
    title: "Classic Spanish Paella",
    image: "/paella.jpg",
    isFeatured: true,
  },
  {
    slug: "french-croissant",
    title: "French Croissant",
    image: "/croissant.jpg",
    isFeatured: true,
  },
];

export default function Home({ featuredRecipes }: { featuredRecipes: Recipe[] }) {
  return (
    <div className="min-h-screen p-10">

      {/* Language Switcher */}
      <LanguageSwitcher />

      <h1 className="text-4xl font-bold mb-8">
        Featured Recipes
      </h1>

      <div
        data-testid="featured-recipes"
        className="grid md:grid-cols-2 gap-8"
      >
        {featuredRecipes.map((recipe) => (
          <Link
            key={recipe.slug}
            href={`/recipes/${recipe.slug}`}
          >
            <div
              data-testid="recipe-card"
              className="border p-4 rounded hover:shadow-lg transition cursor-pointer"
            >
              <Image
                src={recipe.image}
                alt={recipe.title}
                width={600}
                height={400}
                className="rounded mb-4"
              />
              <h2 className="text-2xl font-semibold">
                {recipe.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ---------- STATIC GENERATION ---------- */
export const getStaticProps: GetStaticProps = async () => {
  const featuredRecipes = recipes.filter(r => r.isFeatured);

  return {
    props: {
      featuredRecipes,
    },
  };
};
