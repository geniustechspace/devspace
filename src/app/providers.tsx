"use client";

import "@/static/style.css";
import "@/static/bootstrap.scss";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { NextUIProvider } from "@nextui-org/system";
import { register } from 'swiper/element/bundle';


register();


export function Providers({ children, ...themeProps }: ThemeProviderProps) {
	const router = useRouter();
	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min");
	}, []);

	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
		</NextUIProvider>
	);
}
