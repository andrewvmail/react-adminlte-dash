// IMPORTANT
// ---------
// This is an auto generated file with React CDK.
// Do not modify this file.

const shell = require('shelljs');

shell.set('-e'); // exit upon first error

// Get GIT URL
try {
  const GIT_URL = shell.exec('git config --get remote.origin.url');
} catch (e) {
  shell.echo('ERROR: This project is not configured with a remote git repo');
}

// clear and re-create the out directory
try {
  shell.rm('-rf', '.out');
  shell.mkdir('.out');
} catch (e) {
  shell.echo(e);
}
