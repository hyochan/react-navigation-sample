import type {IconType} from './src/types';

declare module '*.svg' {
  const content: IconType;
  export default content;
}

declare module '*.json' {
  const content;
  export default content;
}

declare module '*.png' {
  const content;
  export default content;
}
