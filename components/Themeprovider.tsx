"use client";
import { SessionProvider } from "next-auth/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";



export default function ThemeProvider({children, ...props}: {children: React.ReactNode} & React.ComponentProps<typeof NextThemesProvider>) {    
  return <SessionProvider><NextThemesProvider {...props}>{children}</NextThemesProvider></SessionProvider>;
}