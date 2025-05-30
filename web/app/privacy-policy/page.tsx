"use client"

import Link from "next/link"
import { ArrowLeft, Globe, Shield, Users, Clock, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mailAddress } from "@/constants/mailAddress"

const PrivacyPolicyPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto max-w-full px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Globe className="h-5 w-5" />
            <span>KoreaDropdown</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link href="/" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">
              홈
            </Link>
            <Link href="/#features" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">
              기능
            </Link>
            <Link href="/#how-it-works" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">
              사용 방법
            </Link>
            <Link href="/#faq" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">
              FAQ
            </Link>
          </nav>
          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              홈으로
            </Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">메뉴 열기</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      
      <main className="flex-1 break-keep">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-full px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">개인정보처리방침</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  개인정보 보호에 대한<br />
                  KoreaDropdown의 약속
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  KoreaDropdown은 사용자의 개인정보를 소중히 여기며, 개인정보보호법에 따라 투명하게 처리합니다.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-500">
                <Shield className="h-4 w-4" />
                <span>최종 수정일: {new Date().toLocaleDateString('ko-KR')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Overview */}
        <section className="w-full bg-gray-50 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-full px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">개인정보 처리 원칙</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  KoreaDropdown은 다음과 같은 원칙 하에 개인정보를 처리합니다.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 py-12 md:grid-cols-3 xl:gap-8 2xl:gap-10">
              <Card className="transition-all hover:-translate-y-1 hover:shadow-md">
                <CardHeader>
                  <Shield className="h-10 w-10 text-gray-900" />
                  <CardTitle className="mt-4">최소 수집</CardTitle>
                  <CardDescription>서비스 제공에 필요한 최소한의 정보만 수집합니다.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all hover:-translate-y-1 hover:shadow-md">
                <CardHeader>
                  <Users className="h-10 w-10 text-gray-900" />
                  <CardTitle className="mt-4">목적 외 이용 금지</CardTitle>
                  <CardDescription>수집된 개인정보는 명시된 목적 외에는 사용하지 않습니다.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all hover:-translate-y-1 hover:shadow-md">
                <CardHeader>
                  <Clock className="h-10 w-10 text-gray-900" />
                  <CardTitle className="mt-4">안전한 보관</CardTitle>
                  <CardDescription>개인정보는 안전하게 보호되며 필요시에만 보관됩니다.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Privacy Policy */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-full px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <div className="mx-auto max-w-4xl xl:max-w-5xl space-y-8">
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    1. 개인정보 수집 및 이용 목적
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed space-y-4">
                    <div>
                      KoreaDropdown 확장 프로그램은 다음과 같은 목적으로 개인정보를 처리합니다:
                    </div>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>웹사이트의 국가 선택 드롭다운 자동화 서비스 제공</li>
                      <li>확장 프로그램의 정상적인 동작 및 오류 해결</li>
                      <li>서비스 개선 및 사용자 지원</li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    2. 수집하는 개인정보 항목
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed space-y-4">
                    <div>
                      <strong>KoreaDropdown은 개인정보를 수집하지 않습니다.</strong>
                    </div>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>확장 프로그램은 사용자의 브라우저 내에서만 동작합니다</li>
                      <li>어떠한 개인 식별 정보도 외부로 전송되지 않습니다</li>
                      <li>사용자의 웹 브라우징 기록이나 개인정보를 저장하지 않습니다</li>
                      <li>쿠키나 기타 추적 기술을 사용하지 않습니다</li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    3. 개인정보 보유 및 이용기간
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed space-y-4">
                    <div>
                      KoreaDropdown은 개인정보를 수집하지 않으므로 별도의 보유기간이 없습니다.
                    </div>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>확장 프로그램의 설정 정보는 사용자의 브라우저 로컬 스토리지에만 저장됩니다</li>
                      <li>사용자가 확장 프로그램을 제거하면 모든 관련 데이터가 삭제됩니다</li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    4. 개인정보 제3자 제공
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed space-y-4">
                    <div>
                      KoreaDropdown은 수집한 개인정보를 제3자에게 제공하지 않습니다.
                    </div>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>개인정보를 수집하지 않으므로 제3자 제공이 불가능합니다</li>
                      <li>법령에 의한 요구가 있더라도 제공할 개인정보가 존재하지 않습니다</li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    5. 개인정보 처리 위탁
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed space-y-4">
                    <div>
                      KoreaDropdown은 개인정보 처리 업무를 외부에 위탁하지 않습니다.
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    6. 이용자의 권리
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed space-y-4">
                    <div>
                      개인정보를 수집하지 않으므로 별도의 권리 행사 절차가 필요하지 않습니다:
                    </div>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>확장 프로그램의 활성화/비활성화는 브라우저 설정에서 언제든지 가능합니다</li>
                      <li>확장 프로그램 제거 시 모든 관련 데이터가 자동으로 삭제됩니다</li>
                      <li>서비스 관련 문의는 아래 연락처로 언제든지 가능합니다</li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    7. 고지의 의무
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed space-y-4">
                    <div>
                      현재 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                    </div>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>시행일자: {new Date().toLocaleDateString('ko-KR')}</li>
                      <li>변경사항이 있는 경우 웹사이트를 통해 사전 공지</li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto max-w-full px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <div className="mx-auto max-w-2xl xl:max-w-3xl 2xl:max-w-4xl space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">문의하기</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  개인정보 처리에 관한 문의사항이 있으시면 언제든지 연락해 주세요.
                </p>
              </div>
              <Button asChild size="lg" className="group">
                <Link href={`mailto:${mailAddress}`}>
                  이메일로 문의하기
                  <ArrowLeft className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 rotate-180" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-gray-50 py-6 md:py-12">
        <div className="container mx-auto max-w-full flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="flex items-center gap-2 font-bold">
            <Globe className="h-5 w-5" />
            <span>KoreaDropdown</span>
          </div>
          <p className="text-center text-sm text-gray-500 md:text-left">
            &copy; {new Date().getFullYear()} KoreaDropdown. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/" className="text-sm text-gray-500 hover:underline">
              홈으로
            </Link>
            <Link href={`mailto:${mailAddress}`} className="text-sm text-gray-500 hover:underline">
              문의하기
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PrivacyPolicyPage;
