import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { recipes } from "../data/recipes";
import LanguageSwitcher from "../components/LanguageSwitcher";
import NewsletterForm from "../components/NewsletterForm";

export default function Home({ featured }: any) {
  const { locale } = useRouter();

  return (
    <div style={{ padding: 20 }}>
      <LanguageSwitcher />
      <h1>Featured Recipes</h1>

      {featured.map((recipe: any) => (
        <div key={recipe.slug} style={{ marginBottom: 40 }}>
          <Link href={`/recipes/${recipe.slug}`}>
            <h2>
              {recipe.title[locale as keyof typeof recipe.title]}
            </h2>
          </Link>

          <Image
            src={recipe.image}
            alt="recipe"
            width={400}
            height={250}
          />
        </div>
      ))}

      <NewsletterForm />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const featured = recipes.filter((r) => r.featured);
  return { props: { featured } };
};
