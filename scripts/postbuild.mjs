import { copyFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const dist = join(process.cwd(), 'dist');
try {
  // Ensure CNAME copied
  copyFileSync('CNAME', join(dist, 'CNAME'));
} catch (e) {
  console.warn('CNAME not copied:', e.message);
}

// Add .nojekyll to bypass Jekyll processing on GitHub Pages
try {
  writeFileSync(join(dist, '.nojekyll'), '');
} catch (e) {
  console.warn('.nojekyll not created:', e.message);
}

// Basic deployment meta info file
writeFileSync(join(dist, 'DEPLOY_INFO.txt'), `Deployed at ${new Date().toISOString()}\n`);

console.log('Postbuild tasks complete.');
