import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KoreaDropdown - 자동 한국 선택 크롬 확장 프로그램',
  description: '웹사이트 국가 드롭다운에서 자동으로 한국을 찾아 선택해주는 무료 크롬 확장 프로그램. 더 이상 스크롤할 필요 없습니다.',
  keywords: ['크롬 확장 프로그램', '한국', 'dropdown', '자동 선택', '브라우저 확장', 'chrome extension'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
