import * as React from "react";
import { type Metadata } from "next";
import { Layout } from "@/components";

type ComponentPageProps = {
  params: Promise<{ id: string }>;
  // searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
}: ComponentPageProps): Promise<Metadata> {
  // @TODO: finish the metadata
  const { id } = await params;
  return {
    title: `Viewing ID ${id}`,
  };
}

export default async function Component({ params }: ComponentPageProps) {
  const { id } = await params;
  return <Layout category="components" unit={id} />;
}
