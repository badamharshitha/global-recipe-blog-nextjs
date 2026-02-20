import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import NewsletterForm from "@/components/NewsletterForm";

type Recipe = {
  slug: string;
  title: string;
  image: string;
  isFeatured: boolean;
};

type Props = {
  recipes: Recipe[];
};

export default function Home({ recipes }: Props) {
  return (
    <>
      <Head>
        <title>Recipe Blog</title>
        <meta
          name="description"
          content="Discover delicious international recipes"
        />
      </Head>

      <div className="p-10 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Featured Recipes
        </h1>

        <div
          data-testid="featured-recipes"
          className="grid md:grid-cols-2 gap-6"
        >
          {recipes.map((recipe) => (
            <Link
              key={recipe.slug}
              href={`/recipes/${recipe.slug}`}
            >
              <div
                data-testid="recipe-card"
                className="border p-4 rounded shadow hover:shadow-lg transition cursor-pointer"
              >
                <Image
                  src={`/${recipe.image}`}
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

        {/* Newsletter */}
        <NewsletterForm />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const recipes: Recipe[] = [
    {
      slug: "classic-spanish-paella",
      title: "Classic Spanish Paella",
      image: "paella.jpg",
      isFeatured: true,
    },
    {
      slug: "french-croissant",
      title: "French Croissant",
      image: "croissant.jpg",
      isFeatured: true,
    },
  ];

  const featuredRecipes = recipes.filter(
    (recipe) => recipe.isFeatured
  );

  return {
    props: {
      recipes: featuredRecipes,
    },
  };
};
