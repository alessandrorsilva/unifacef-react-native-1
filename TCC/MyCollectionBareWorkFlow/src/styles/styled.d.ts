// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    measures:{
      radius: number;
    }
    colors: {
      primary: string;
      secondary: string;
      background: string;
    };
  }
}
