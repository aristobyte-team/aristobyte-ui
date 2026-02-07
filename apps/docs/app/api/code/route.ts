import { NextResponse } from 'next/server';
import path from 'path';
import { readFile } from 'fs/promises';

export const runtime = 'nodejs';

const toPascalCase = (value: string) =>
  value
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

const categoryDir = (category: string) => (category === 'components' ? 'Components' : 'Presets');

const overrides: Record<string, Record<string, Record<string, string>>> = {
  components: {
    label: {
      colors: 'CustomColors',
    },
  },
};

const repoRoot = path.resolve(process.cwd(), '..', '..');

const resolvePreviewPath = (category: string, unit: string, section: string) => {
  const unitName = toPascalCase(unit);
  const sectionName = overrides[category]?.[unit]?.[section] ?? toPascalCase(section);
  const base = path.join(
    repoRoot,
    'apps',
    'docs',
    'components',
    'Sections',
    'mapping',
    categoryDir(category),
    `${unitName}PreviewBlocks`
  );
  return path.join(base, `${sectionName}.tsx`);
};

const resolveSafePath = (inputPath: string) => {
  const base = path.join(repoRoot, 'apps', 'docs', 'components', 'Sections', 'mapping');
  const normalized = inputPath.replace('apps/docs/', '');
  const absolute = path.resolve(repoRoot, 'apps', 'docs', normalized);
  if (!absolute.startsWith(base)) {
    return null;
  }
  return absolute;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || '';
  const unit = searchParams.get('unit') || '';
  const section = searchParams.get('section') || '';
  const pathParam = searchParams.get('path');

  try {
    const filePath = pathParam ? resolveSafePath(pathParam) : resolvePreviewPath(category, unit, section);

    if (!filePath) {
      return NextResponse.json({ code: '' }, { status: 400 });
    }

    const code = await readFile(filePath, 'utf-8');

    return NextResponse.json({ code });
  } catch {
    return NextResponse.json({ code: '' }, { status: 200 });
  }
}
