import Head from "next/head";

import { GetServerSideProps } from "next";

import styles from "./home.module.scss";

import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function App({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.container}>
        <section className={styles.hero}>
          <p>👏 Hey, Welcome!</p>
          <h1>
            New about the <span>React</span> World.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1L9xABHY6vu00bvsuVlFpLTh");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
  };
};
