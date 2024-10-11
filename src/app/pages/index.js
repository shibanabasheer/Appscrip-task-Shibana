import Head from 'next/head';
import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Discover Our Products</title>
        <meta name="description" content="Browse our exclusive collection of products." />
      </Head>
      <header>
        <h1>Discover Our Products</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}