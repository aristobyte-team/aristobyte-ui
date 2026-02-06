import { getCurrentPackageManager } from '../utils/getCurrentPackageManager.js';
import { spinner, text } from '@clack/prompts';
import { execa } from 'execa';
import color from 'picocolors';
import { list } from './list.js';
export async function remove(component: string, options: Record<string, any>) {
  if (options.list) {
    await list({ installed: true }, true);
  }

  const pkgManager = getCurrentPackageManager();
  if (options.packageManager) {
    console.log(`${color.cyan('Current package manager:')}
${color.green('◇')} ${pkgManager}`);
    process.exit(0);
  }

  const s = spinner();
  let packageName: string;
  if (!component) {
    console.log(
      `${color.green('◇')}  ${color.white('You did not specify, which package should be removed')}
${color.gray('|')}   ${color.gray('Please select one of the installed packages below to proceed.')}
${color.gray('|')}`
    );
    await list({ installed: true });
    packageName = (await text({
      message: `Component name to remove (Required filled)`,
      placeholder: '<package-name>',
    })) as string;
  } else {
    packageName = component;
  }

  if (!packageName) {
    console.log(
      color.red(`Invalid Package name. <package-name> should be specified:\naristobyte-ui remove <package-name>`)
    );
    return;
  }

  try {
    const pkgName = packageName === 'all' ? '@aristobyte-ui/react' : `@aristobyte-ui/${packageName}`;
    s.start(`Removing ${pkgName}...`);
    await execa(pkgManager, ['remove', pkgName], { stdio: 'inherit' });
    s.stop();
    console.log(color.green(`✔ ${pkgName} removed successfully!`));
  } catch (err) {
    s.stop();
    console.error(color.red(`× Failed to remove component ${packageName}`), err);
  }
}
