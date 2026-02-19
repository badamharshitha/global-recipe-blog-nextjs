import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type Recipe = {
  id: number;
  title: string;
};

type Props = {
  featuredRecipes: Recipe[];
};

export default function Home({ featuredRecipes }: Props) {
  const { t } = useTranslation("common");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-4xl font-bold">
        {t("newsletter")}
      </h1>

      <input
        type="text"
        placeholder={t("search_placeholder")}
        className="border p-2 rounded"
      />

      <LanguageSwitcher />

      {/* Featured Recipes Section */}
      <div
        data-testid="featured-recipes"
        className="mt-10 grid gap-4"
      >
        {featuredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            data-testid="recipe-card"
            className="border p-4 rounded shadow"
          >
            {recipe.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // Mock featured recipes (later we replace with CMS)
  const featuredRecipes = [
    { id: 1, title: "Classic Spanish Paella" },
    { id: 2, title: "French Croissant" },
  ];

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      featuredRecipes,
    },
  };
};
