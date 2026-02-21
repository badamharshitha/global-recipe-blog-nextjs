import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();

  const changeLanguage = (locale: string) => {
    router.push(router.asPath, router.asPath, { locale });
  };

  return (
    <div data-testid="language-switcher" style={{ marginBottom: "20px" }}>
      <button onClick={() => changeLanguage("en")} style={{ marginRight: "10px" }}>
        EN
      </button>
      <button onClick={() => changeLanguage("es")} style={{ marginRight: "10px" }}>
        ES
      </button>
      <button onClick={() => changeLanguage("fr")}>
        FR
      </button>
    </div>
  );
}
