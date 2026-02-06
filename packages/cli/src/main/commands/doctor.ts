import fs from 'fs';
import path from 'path';
import os from 'os';
import { execSync } from 'child_process';
import { spinner } from '@clack/prompts';
import color from 'picocolors';
import { checkVersion } from '../utils/checkVersion.js';
import { getCurrentPackageManager } from '../utils/getCurrentPackageManager.js';
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

function hasProjectPackage(name: string) {
  try {
    const pkgJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
    return (
      (pkgJson.dependencies && pkgJson.dependencies[name]) || (pkgJson.devDependencies && pkgJson.devDependencies[name])
    );
  } catch {
    return false;
  }
}

function detectUISetup() {
  const configPaths = ['tailwind.config.js', 'tailwind.config.ts', 'postcss.config.js', 'postcss.config.ts'];
  return configPaths.filter((p) => fs.existsSync(path.resolve(p)));
}

async function checkNetwork() {
  try {
    const res = await fetch('https://registry.npmjs.org/-/org/aristobyte-ui/package', { method: 'HEAD' });
    return res.ok;
  } catch {
    return false;
  }
}

export async function doctor(options: Record<string, any>) {
  const s = spinner();
  try {
    s.start('Running doctor diagnostics…');

    console.log(`${color.green('◇')}  ${color.cyan('Doctor Diagnostics')}\n${color.gray('|')}`);

    const system = {
      os: `${os.type()} ${os.release()} (${os.platform()})`,
      cpu: os.cpus()[0].model,
      memoryMB: Math.round(os.totalmem() / 1024 / 1024),
      node: getVersion('node -v', 'Node'),
    };

    const pkgManager = getCurrentPackageManager();
    const pmVersion = getVersion(`${pkgManager} -v`, pkgManager);

    const uiInstalled = hasProjectPackage('@aristobyte-ui/react');
    const pluginInstalled = hasProjectPackage('@aristobyte-ui/plugin');
    const configs = detectUISetup();

    let networkOnline: boolean | undefined;
    if (options.network || options.all || Object.keys(options).length === 0) {
      networkOnline = await checkNetwork();
    }

    const payload = {
      system,
      packageManager: { name: pkgManager, version: pmVersion },
      installedPackages: { ui: uiInstalled, plugin: pluginInstalled },
      configs,
      network: networkOnline,
    };

    if (options.json) {
      console.log(
        `${color.gray('|')}\n${color.gray('◇ ------ JSON start ------ ◇')}\n${JSON.stringify(payload, null, 2)}\n${color.gray('◇ ------ JSON end ------ ◇')}\n${color.gray('|')}`
      );
    }

    if (options.system || options.all || Object.keys(options).length === 0) {
      console.log(
        `${options.system ? '' : '\n'}${color.gray('|')}\n${color.green('◇')}  ${color.cyan('System:')}\n${color.gray('|')}   ${color.white('OS:')} ${color.green(system.os)}\n${color.gray('|')}   ${color.white('CPU:')} ${color.green(system.cpu)}\n${color.gray('|')}   ${color.white('Memory:')} ${color.green(`${system.memoryMB} MB`)}\n${color.gray('|')}   ${color.white('Node:')} ${checkVersion('Node', system.node, MIN_VERSIONS.node)}`
      );
    }

    if (options.pm || options.all || Object.keys(options).length === 0) {
      console.log(
        `${color.gray('|')}\n${color.green('◇')}  ${color.cyan('Package Manager:')}\n${color.gray('|')}   ${color.white('Current:')} ${color.green(pkgManager)}\n${color.gray('|')}   ${color.white('Version:')} ${checkVersion(pkgManager, pmVersion, MIN_VERSIONS[pkgManager])}`
      );
    }

    if (options.deps || options.all || Object.keys(options).length === 0) {
      console.log(
        `${color.gray('|')}\n${color.green('◇')}  ${color.cyan('Project Dependencies:')}\n${color.gray('|')}   ${color.white('@aristobyte-ui/react:')} ${uiInstalled ? color.green('✔ Installed') : color.red('× Missing')}\n${color.gray('|')}   ${color.white('@aristobyte-ui/plugin:')} ${pluginInstalled ? color.green('✔ Installed') : color.red('× Missing')}`
      );
    }

    if (options.configs || options.all || Object.keys(options).length === 0) {
      console.log(`${color.gray('|')}\n${color.green('◇')}  ${color.cyan('Config Files:')}`);
      if (!configs.length) {
        console.log(`${color.gray('|')}   ${color.red('× No config files detected')}`);
      } else {
        configs.forEach((cfg) => console.log(`${color.gray('|')}   ${color.green('✔')} ${color.white(cfg)}`));
      }
    }

    if ((options.network || options.all || Object.keys(options).length === 0) && networkOnline !== undefined) {
      console.log(
        `${options.network ? '\n' : ''}${color.gray('|')}\n${color.green('◇')}  ${color.cyan('Network:')}\n${color.gray('|')}   ${networkOnline ? `${color.green('✔')} ${color.white('Registry reachable')}` : `${color.red('×')} ${color.white('Registry unreachable')}`}`
      );
    }

    console.log(color.gray('|'));
    s.stop(color.green('✔ Doctor diagnostics finished successfully!'));
  } catch (err) {
    s.stop(color.red('× Doctor diagnostics failed'));
    console.error(color.red('× Diagnostics crashed'), err);
  }
}
