#!/usr/bin/env node

// @ts-ignore
import { Command, Help } from 'commander';

import { add } from './commands/add';
import { init } from './commands/init';
import { remove } from './commands/remove';
import { upgrade } from './commands/upgrade';
import { list } from './commands/list';
import { doctor } from './commands/doctor';
import { env } from './commands/env';

import { logoSmallGradient, logo3, logo4, darkGrey, lightGrey } from './utils/colors';
import { usage } from './utils/typography';
import { parseHelp } from './utils/parseHelp';
import pkg from '../../package.json';

const COMMANDS = ['init', 'add', 'remove', 'upgrade', 'list', 'doctor', 'env', 'help'];

const aristobyteui = new Command();

aristobyteui
  .name('aristobyte-ui')
  .usage(usage(['command', 'options']))
  .description(
    'Create new AristoByteUI projects or manage existing projects with full control\n  over components, dependencies, and UI stack configuration. Supports initialization,\n  addition, removal, upgrading of components, and project diagnostics.'
  )
  // @ts-ignore
  .version(pkg.version, '-V, --version', 'Output the CLI version')
  .helpOption('-H, --help', 'Show help information')
  .configureHelp({
    formatHelp: (cmd: Command, helper: Help) => parseHelp(cmd, helper),
  });
aristobyteui
  .command('init [myProjectName]')
  .usage(usage(['options', 'myProjectName']))
  .description('Initialize a new AristoByteUI project')
  .option('-LT, --list-templates', 'Display a list of available templates')
  .option('-LPM, --list-package-managers', 'Display a list of available package managers')
  .option('-T, --template <templateName>', 'Specify a template to use')
  .option('-P, --package-manager <packageManager>', 'Select a package manager (npm, yarn, pnpm, bun)')
  .configureHelp({
     formatHelp: (cmd: Command, helper: Help) => parseHelp(cmd, helper),
  })
  .action(init);
aristobyteui
  .command('add [component]')
  .usage(usage(['options', 'components...']))
  .description('Add a UI component')
  .option('-L, --list', 'Display a list of available packages, to be added')
  .option('-P, --package-manager', 'Show the package manager used in current project')
  .configureHelp({
     formatHelp: (cmd: Command, helper: Help) => parseHelp(cmd, helper),
  })
  .action(add);
aristobyteui
  .command('remove [component]')
  .usage(usage(['options', 'components...']))
  .description('Remove a UI component')
  .option('-L, --list', 'Display a list of installed packages, to be removed')
  .option('-P, --package-manager', 'Show the package manager used in current project')
  .configureHelp({
     formatHelp: (cmd: Command, helper: Help) => parseHelp(cmd, helper),
  })
  .action(remove);
aristobyteui
  .command('upgrade [component]')
  .usage(usage(['options', 'components...']))
  .description('Upgrade a UI component')
  .option('-A, --all', 'Upgrade all AristoByteUI components')
  .option('-T, --to <version>', 'Upgrade to a specific version')
  .configureHelp({
     formatHelp: (cmd: Command, helper: Help) => parseHelp(cmd, helper),
  })
  .action(upgrade);
aristobyteui
  .command('list')
  .usage(usage(['options']))
  .description('List installed components')
  .option('-A, --all', 'Display the list of all packages')
  .option('-I, --installed', 'Display the list of installed packages')
  .option('-O, --outdated', 'Check for available updates')
  .configureHelp({
     formatHelp: (cmd: Command, helper: Help) => parseHelp(cmd, helper),
  })
  .action((options: Record<string, any>) => list(options, true));
aristobyteui
  .command('doctor')
  .usage(usage(['options']))
  .description('Check system and project health')
  .option('-A, --all', 'Run all diagnostics')
  .option('-C, --configs', 'Validate project config files')
  .option('-D, --deps', 'Validate installed AristoByteUI dependencies')
  .option('-J, --json', 'Output diagnostics as JSON')
  .option('-N, --network', 'Verify registry/network connectivity')
  .option('-P, --pm', 'Check package manager state')
  .option('-S, --system', 'Check system environment')
  .configureHelp({
     formatHelp: (cmd: Command, helper: Help) => parseHelp(cmd, helper),
  })
  .action(doctor);
aristobyteui
  .command('env')
  .usage(usage(['options']))
  .description('Display environment info')
  .option('-A, --all', 'Display all environment diagnostics')
  .option('-J, --json', 'Output environment info as JSON')
  .option('-M, --pm', 'Show package manager details')
  .option('-N, --network', 'Check registry/network connectivity')
  .option('-P, --packages', 'Show installed AristoByteUI packages')
  .option('-S, --system', 'Show system information')
  .configureHelp({
     formatHelp: (cmd: Command, helper: Help) => parseHelp(cmd, helper),
  })
  .action(env);
aristobyteui
  .command('help')
  .usage(usage(['options']))
  .description('Display help for command')
  .action(env);
// @ts-ignore
aristobyteui.command('help', { hidden: true });

aristobyteui.exitOverride(async (err: { code:string, message:string }) => {
  if (err.code === 'commander.unknownCommand') {
    console.error(
      logoSmallGradient(' ◆ Possible commands are: \n'),
      ...COMMANDS.map((cmd) =>
        cmd === err.message.split('Did you mean ')[1].split('?')[0]
          ? `${logoSmallGradient('│  ')}${logo4('● aristobyte-ui')} ${logo4(`${cmd}`)}\n`
          : `${logoSmallGradient('│  ○ aristobyte-ui')} ${logo3(`${cmd}`)}\n`
      )
    );
  }

  process.exit(1);
});

(async () => {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    aristobyteui.outputHelp();
    process.exit(0);
  }

  try {
    await aristobyteui.parseAsync(args, { from: 'user' });
  } catch (err) {
    console.error(darkGrey('Error:'), lightGrey((err as Error).message));
    process.exit(1);
  }
})();
