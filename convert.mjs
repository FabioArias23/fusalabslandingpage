import { readFile, writeFile } from 'fs/promises';
import ttf2woff2 from 'ttf2woff2';

async function convertFont() {
  try {
    console.log('Leyendo fuente TTF...');
    const input = await readFile('public/fonts/conthrax-sb.ttf');
    
    console.log('Comprimiendo a WOFF2...');
    const output = ttf2woff2(input);
    
    await writeFile('public/fonts/conthrax-sb.woff2', output);
    console.log('✅ ¡Éxito! Fuente convertida a conthrax-sb.woff2');
  } catch (error) {
    console.error('❌ Error en la conversión:', error);
  }
}

convertFont();
