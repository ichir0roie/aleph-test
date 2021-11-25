import { useDeno } from "aleph/react";
import React from "react";
import Head from "~/components/head.tsx";
import Input from "~/components/input.tsx";
import useCounter from "~/lib/useCounter.ts";

export default function Home() {
  const [count, isSyncing, increase, decrease] = useCounter();
  const version = useDeno(() => Deno.version.deno);

  return (
    <div className="page">
      <Head />
      <Input />
    </div>
  );
}
