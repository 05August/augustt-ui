import fs from 'fs';
import path from 'path';

const dist = 'dist';

// Xóa các thư mục con không cần thiết
if (fs.existsSync(path.join(dist, 'components'))) {
  fs.rmSync(path.join(dist, 'components'), { recursive: true });
  console.log('🗑️  Removed dist/components/');
}

if (fs.existsSync(path.join(dist, 'lib'))) {
  fs.rmSync(path.join(dist, 'lib'), { recursive: true });
  console.log('🗑️  Removed dist/lib/');
}

// Sửa index.d.ts
const indexPath = path.join(dist, 'index.d.ts');
if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, 'utf8');
  
  // Loại bỏ import CSS
  content = content.replace(/import '\.\/index\.css';/g, '');
  
  // Sửa các export để trỏ về index
  content = content.replace(/export \{ cn \} from '\.\/lib\/cn';/g, 'export { cn } from "./index";');
  content = content.replace(/export \* from '\.\/components\/Button\/Button';/g, 'export { Button, ButtonProps } from "./index";');
  content = content.replace(/export \* from '\.\/components\/Input\/Input';/g, 'export { Input, InputProps } from "./index";');
  content = content.replace(/export \* from '\.\/components\/Card\/Card';/g, 'export { Card, CardProps } from "./index";');
  
  fs.writeFileSync(indexPath, content);
  console.log('✅ Fixed index.d.ts');
}

console.log('🎉 Post-build cleanup completed!');
