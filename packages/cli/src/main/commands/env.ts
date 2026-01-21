import os from 'os';
import fs from 'fs';
import { execSync } from 'child_process';
import { spinner } from '@clack/prompts';
import { checkVersion } from '../utils/checkVersion';
import { getCurrentPackageManager } from '../utils/getCurrentPackageManager';
import color from 'picocolors';

const MIN_VERSIONS: Record<string, string> = {
  node: '20.19.0',
  pnpm: '10.15.1',
  npm: '10.8.2',
  yarn: '1.22.22',
  bun: '1.2.21',
};

function getVersion(command: string, name: string): string {
  try {
    return execSync(command).toString().trim();
  } catch (err) {
    console.error(color.red(`× Failed to detect ${name} version:`), err);
    return 'unknown';
  }
}

function getSystemInfo() {
  return {
    os: `${os.type()} ${os.release()} (${os.platform()})`,
    cpu: os.cpus()[0].model,
    memoryMB: Math.round(os.totalmem() / 1024 / 1024),
    node: getVersion('node -v', 'Node'),
  };
}

function getPackageManagerInfo() {
  const current = getCurrentPackageManager();
  return {
    packageManager: current,
    version: getVersion(`${current} -v`, current),
  };
}

// @TODO:  "installedPackages": [] always returns empty array
function getInstalledPackages() {
  try {
    const pkgJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
    const deps = pkgJson.dependencies || {};
    return Object.keys(deps)
      .filter((d) => d.startsWith('@aristobyte-ui/'))
      .map((dep) => (dep.includes('react') ? 'all' : dep.split('/')[1]));
  } catch {
    return [];
  }
}

async function checkNetwork() {
  const url = 'https://registry.npmjs.org/-/org/aristobyte-ui/package';
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.ok;
  } catch {
    return false;
  }
}

export async function env(options: Record<string, any>) {
  const s = spinner();
  try {
    s.start('Collecting environment diagnostics…');
    console.log(
      `${color.green('◇')}  ${color.cyan('Environment Diagnostics')}
${color.gray('|')}`
    );

    const system = getSystemInfo();
    const pm = getPackageManagerInfo();

    const installed =
      options.packages || options.all || Object.keys(options).length === 0 ? getInstalledPackages() : [];

    const networkOnline =
      options.network || options.all || Object.keys(options).length === 0 ? await checkNetwork() : undefined;

    const payload = {
      system: system,
      packageManager: pm,
      installedPackages: installed,
      network: networkOnline,
    };

    if (options.json) {
      console.log(`${color.gray('|')}
${color.gray('◇ ------ JSON file start ------ ◇')}
${JSON.stringify(payload, null, 2)}
${color.gray('◇ ------ JSON file end ------ ◇')}
${color.gray('|')}`);
    }

    if (options.system || options.all || Object.keys(options).length === 0) {
      console.log(`${options.all || Object.keys(options).length === 0 ? '\n' : ''}${color.gray('|')} 
${color.green('◇')}  ${color.cyan('System:')}
${color.gray('|')}   ${color.white('OS:')} ${color.green(`${system.os}`)}
${color.gray('|')}   ${color.white('CPU:')} ${color.green(`${system.cpu}`)}
${color.gray('|')}   ${color.white('Memory:')} ${color.green(`${system.memoryMB} MB`)}
${color.gray('|')}   ${color.white('Node:')} ${checkVersion('Node', system.node, MIN_VERSIONS.node)}`);
    }

    if (options.pm || options.all || Object.keys(options).length === 0) {
      console.log(`${color.gray('|')}
${color.green('◇')}  ${color.cyan('Package Manager:')}
${color.gray('|')}   ${color.white('Current:')} ${color.green(pm.packageManager)}
${color.gray('|')}   ${color.white('Version:')} ${color.green(
        checkVersion(pm.packageManager, pm.version, MIN_VERSIONS[pm.packageManager])
      )}`);
    }

    if (options.packages || options.all || Object.keys(options).length === 0) {
      console.log(
        `${color.gray('|')}
${color.green('◇')}  ${color.cyan('Installed AristoByteUI Packages:')}`
      );
      if (!installed.length) {
        console.log(color.gray('  (none detected)'));
      } else {
        installed.forEach((p) => console.log(`${color.gray('|')}   ${color.green('-')} ${color.white(p)}`));
      }
    }

    if (options.network || options.all || Object.keys(options).length === 0) {
      console.log(`${options.network ? '\n' : ''}${color.gray('|')}
${color.green('◇')}  ${color.cyan('Network:')}
${color.gray('|')}   ${
        networkOnline
          ? `${color.green('✔')} ${color.white('Registry reachable"')}`
          : `${color.red('×')} ${color.white('Registry unreachable')}`
      }`);
    }
    console.log(color.gray('|'));
    s.stop(color.green('✔ Environment diagnostics finished with success!'));
  } catch (err) {
    s.stop(color.red('× Environment diagnostics finished with failure :('));
    console.error(color.red('× Environment diagnostics failed'), err);
  }
}
