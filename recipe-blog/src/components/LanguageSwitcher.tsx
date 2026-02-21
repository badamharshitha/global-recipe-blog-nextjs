import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  return (
    <div data-testid="language-switcher">
      <button onClick={() => router.push({ pathname, query }, asPath, { locale: "en" })}>
        EN
      </button>

      <button onClick={() => router.push({ pathname, query }, asPath, { locale: "es" })}>
        ES
      </button>

      <button onClick={() => router.push({ pathname, query }, asPath, { locale: "fr" })}>
        FR
      </button>
    </div>
  );
}
