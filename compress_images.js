import fs from 'fs';
import path from 'path';
import Jimp from 'jimp';

const dirPath = './public/images/glimpses';

async function compress() {
  try {
    const files = fs.readdirSync(dirPath);
    console.log(`Found ${files.length} files in ${dirPath}. Starting compression...`);
    
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        const originalSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
        
        console.log(`Reading ${file} (${originalSizeMB} MB)...`);
        
        try {
          const image = await Jimp.read(filePath);
          
          // Resize to width 640px, keep aspect ratio auto
          image.resize(640, Jimp.AUTO);
          
          // Set quality to 80%
          image.quality(80);
          
          // Overwrite original file
          await image.writeAsync(filePath);
          
          const newStats = fs.statSync(filePath);
          const newSizeKB = (newStats.size / 1024).toFixed(2);
          console.log(`Successfully compressed ${file}: ${originalSizeMB} MB -> ${newSizeKB} KB`);
        } catch (err) {
          console.error(`Error processing ${file}:`, err);
        }
      }
    }
    console.log('All images processed successfully!');
  } catch (err) {
    console.error('Error reading directory:', err);
  }
}

compress();
