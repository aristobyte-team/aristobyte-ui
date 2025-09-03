import * as React from "react";
import { type Metadata } from "next";
import { Layout } from "@/components";

type ComponentPageProps = {
  params: Promise<{ unit: string }>;
  // searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
}: ComponentPageProps): Promise<Metadata> {
  // @TODO: finish the metadata
  const { unit } = await params;
  return {
    title: `Viewing Unit with ID ${unit}`,
  };
}

export default async function Component({ params }: ComponentPageProps) {
  const { unit } = await params;
  return <Layout category="presets" unit={unit} />;
}
