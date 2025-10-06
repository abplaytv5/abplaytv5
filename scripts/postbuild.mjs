import { copyFileSync, writeFileSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';

const dist = join(process.cwd(), 'dist');

try {
  // Ensure CNAME copied
  copyFileSync('CNAME', join(dist, 'CNAME'));
} catch (e) {
  console.warn('CNAME not copied:', e.message);
}

// Copy _headers file if it exists
try {
  copyFileSync('public/_headers', join(dist, '_headers'));
  console.log('_headers file copied');
} catch (e) {
  console.warn('_headers not copied:', e.message);
}

// Add .nojekyll to bypass Jekyll processing on GitHub Pages
try {
  writeFileSync(join(dist, '.nojekyll'), '');
  console.log('.nojekyll file created');
} catch (e) {
  console.warn('.nojekyll not created:', e.message);
}

// Create 404.html for SPA routing (copy index.html)
try {
  const indexContent = readFileSync(join(dist, 'index.html'), 'utf8');
  writeFileSync(join(dist, '404.html'), indexContent);
  console.log('404.html created for SPA routing');
} catch (e) {
  console.warn('404.html not created:', e.message);
}

// Basic deployment meta info file
writeFileSync(join(dist, 'DEPLOY_INFO.txt'), `Deployed at ${new Date().toISOString()}\n`);

console.log('Postbuild tasks complete.');
