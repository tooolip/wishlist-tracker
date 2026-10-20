import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Considered — Your personal edit',description:'One wishlist. A clearer sense of you. Save what catches your eye and see how it all fits together.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
