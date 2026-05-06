"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollManager() {
    const pathname = usePathname();

    useEffect(() => {
        // Remove leading slash to get the section ID
        const targetId = pathname.substring(1);
        
        // Only trigger scroll if it's one of our rewritten routes
        if (targetId && ['services', 'portfolio', 'contact'].includes(targetId)) {
            // Small timeout ensures the DOM has finished painting
            setTimeout(() => {
                const elem = document.getElementById(targetId);
                if (elem) {
                    const topPos = elem.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                        top: topPos,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }, [pathname]);

    return null;
}
