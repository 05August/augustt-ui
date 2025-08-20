# @your-username/my-package

Bộ component React (TypeScript) kèm TailwindCSS và Storybook, đóng gói bằng Rollup. Hỗ trợ script tạo nhanh template component.

## Cài đặt (dùng trực tiếp từ GitHub)

Không phát hành lên npm. Thêm dependency trỏ đến repo Git của bạn:

```bash
# ví dụ dùng GitHub
npm i github:your-username/my-package#main
# hoặc pin theo tag
npm i github:your-username/my-package#v1.0.0
```

Gói sẽ tự build nhờ script `prepare`. Cần cài đặt peer deps trong dự án sử dụng:
- react ^18
- react-dom ^18

## Sử dụng nhanh

```tsx
import React from 'react';
import { Button, Input } from '@your-username/my-package';
import '@your-username/my-package/dist/styles.css';

export default function App() {
  return (
    <div className="p-4 space-y-3">
      <Button label="Click me" />
      <Input placeholder="Type here" />
    </div>
  );
}
```

## Phát triển

### Cài đặt dev deps
```bash
npm i
```

### Storybook
```bash
npm run storybook
```

### Build
```bash
npm run build
```

Kết quả xuất ra thư mục `dist/` gồm:
- `index.js`, `index.esm.js`, `index.d.ts`
- `styles.css` (đã build từ Tailwind)

## Tạo nhanh component
Script tạo component chuẩn:
```bash
npm run gen:component Button
```
Sinh ra:
- `src/components/Button/Button.tsx`
- `src/components/Button/Button.types.ts`
- Tự động thêm export vào `src/index.ts`

## Cấu trúc dự án
- `src/components/*`: Component nguồn
- `src/index.ts`: Điểm export
- `src/index.css`: CSS gốc của thư viện (Tailwind)
- `.storybook/*`: Cấu hình Storybook
- `rollup.config.js`: Cấu hình bundling

## Tùy biến Tailwind trong app sử dụng
Bạn có thể override style bằng cách thêm `className` vào component hoặc dùng Tailwind của ứng dụng. Nếu ứng dụng đã có Tailwind, vẫn import `@your-username/my-package/dist/styles.css` để có style mặc định, hoặc bỏ import này và tự style lại theo nhu cầu.

## Dùng Git repo thay vì npm
1. Tạo repo Git và push mã nguồn:
   ```bash
   git init
   git add .
   git commit -m "init: component library"
   git branch -M main
   git remote add origin git@github.com:your-username/my-package.git
   git push -u origin main
   ```
2. Tại dự án sử dụng, cài qua Git như phần Cài đặt ở trên.
3. Khi cập nhật lib, tạo tag và dùng tag trong dependency để cố định version.

