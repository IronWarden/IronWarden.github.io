
import { ThemeProvider } from 'next-themes';

export function Providers({ children }) {
    return <ThemeProvider attribute="data-theme" enableSystem={false}>{children}</ThemeProvider>;
}
