import { Button } from "@aristobyte-ui/button";

export default function Home() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">AristoByte UI</h1>
      <Button variant="primary">Primary CTA</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  );
}
