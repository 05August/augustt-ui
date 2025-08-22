import fs from 'fs';
import path from 'path';

const dist = 'dist';

// Hàm loại bỏ import statements
function removeImportStatements(content) {
  return content
    .split('\n')
    .filter(line => !line.trim().startsWith('import'))
    .join('\n')
    .trim();
}

// Hàm thay thế React.FC bằng FC
function replaceReactFC(content) {
  return content.replace(/React\.FC/g, 'FC');
}

// Hàm đọc và merge tất cả type definitions
function mergeTypeDefinitions() {
  const indexPath = path.join(dist, 'index.d.ts');
  let finalContent = '';
  
  // Thêm các type imports cần thiết
  finalContent += `import type { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes } from 'react';\n`;
  finalContent += `import type { FC } from 'react';\n\n`;
  
  // Thêm các type definitions từ lib
  const libPath = path.join(dist, 'lib', 'cn.d.ts');
  if (fs.existsSync(libPath)) {
    const libContent = fs.readFileSync(libPath, 'utf8');
    finalContent += libContent + '\n\n';
  }
  
  // Thêm các type definitions từ components
  const componentsDir = path.join(dist, 'components');
  if (fs.existsSync(componentsDir)) {
    const componentDirs = fs.readdirSync(componentsDir);
    
    for (const componentDir of componentDirs) {
      const typesPath = path.join(componentsDir, componentDir, `${componentDir}.types.d.ts`);
      if (fs.existsSync(typesPath)) {
        const typesContent = fs.readFileSync(typesPath, 'utf8');
        // Loại bỏ import statements
        const cleanTypesContent = removeImportStatements(typesContent);
        finalContent += cleanTypesContent + '\n\n';
      }
      
      const componentPath = path.join(componentsDir, componentDir, `${componentDir}.d.ts`);
      if (fs.existsSync(componentPath)) {
        const componentContent = fs.readFileSync(componentPath, 'utf8');
        // Loại bỏ import statements và thay thế React.FC
        const cleanComponentContent = removeImportStatements(componentContent);
        const finalComponentContent = replaceReactFC(cleanComponentContent);
        finalContent += finalComponentContent + '\n\n';
      }
    }
  }
  
  // Ghi vào index.d.ts (không cần export statements)
  fs.writeFileSync(indexPath, finalContent);
  console.log('✅ Merged all type definitions into index.d.ts');
}

// Merge types trước
mergeTypeDefinitions();

// Sau đó xóa các thư mục con không cần thiết
if (fs.existsSync(path.join(dist, 'components'))) {
  fs.rmSync(path.join(dist, 'components'), { recursive: true });
  console.log('🗑️  Removed dist/components/');
}

if (fs.existsSync(path.join(dist, 'lib'))) {
  fs.rmSync(path.join(dist, 'lib'), { recursive: true });
  console.log('🗑️  Removed dist/lib/');
}

console.log('🎉 Post-build cleanup completed!');
