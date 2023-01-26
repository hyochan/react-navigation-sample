import 'styled-components';
import type {Theme} from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    // hyochan - no empty extends
    background: string;
  }
}
