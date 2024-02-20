import { titleFont } from "../config/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className={`${titleFont.className} font-bold`}>Hola mundo shop</h1>
    </main>
  );
}
