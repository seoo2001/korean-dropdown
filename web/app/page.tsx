"use client"

import Link from "next/link"
import { ArrowRight, Check, Download, Globe, MousePointer, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { countries } from "@/constants/countries"
import { chromeWebStoreLink, githubLink } from "@/constants/linkNames"
import { mailAddress } from "@/constants/mailAddress"

const LandingPage = () => {
  const [selectedBeforeCountry, setSelectedBeforeCountry] = useState<string>("");
  const [selectedAfterCountry, setSelectedAfterCountry] = useState<string>("");


  const handleCountryChangeBefore = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBeforeCountry(e.target.value);
  }

  const handleCountryChangeAfter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAfterCountry(e.target.value);
  }

  const handleAfterDropdownClick = () => {
    const koreaOption = "Korea, South";
    setSelectedAfterCountry(koreaOption);
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto max-w-full px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Globe className="h-5 w-5" />
            <span>KoreaDropdown</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link href="#features" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">
              기능
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">
              사용 방법
            </Link>
            <Link href="#faq" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">
              FAQ
            </Link>
          </nav>
          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link href={chromeWebStoreLink}>
              <Download className="mr-2 h-4 w-4" />
              설치하기
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-full px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] 2xl:grid-cols-[1fr_700px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    찾지 마세요.<br />
                    한국은 이미 선택됐습니다.
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    웹사이트에서 국가를 선택할 때마다 스크롤을 내릴 필요가 없습니다. KoreaDropdown이 자동으로 한국을 찾아
                    선택해 드립니다.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="group">
                    <Link href={chromeWebStoreLink}>
                      지금 무료로 설치하기
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#how-it-works">사용 방법 알아보기</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto flex items-center justify-center">
                <div className="relative h-[350px] w-[300px] overflow-hidden rounded-xl border bg-white shadow-lg transition-all hover:shadow-xl sm:h-[400px] sm:w-[350px]">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 p-4">
                    <div className="flex h-8 items-center gap-2 rounded-full bg-gray-200 px-3">
                      <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                      <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                      <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                      <div className="ml-auto text-xs text-gray-500">example.com</div>
                    </div>
                    <div className="mx-auto mt-12 max-w-4xl xl:max-w-5xl">
                      <Tabs defaultValue="before" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 bg-gray-200">
                          <TabsTrigger value="before">확장 프로그램 없이</TabsTrigger>
                          <TabsTrigger value="after">확장 프로그램 설치 후</TabsTrigger>
                        </TabsList>
                        <TabsContent value="before" className="mt-6">
                          <div className="overflow-hidden rounded-lg border bg-white shadow">
                            <div className="p-6">
                              <div className="space-y-4">
                                <div className="space-y-2">
                                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    국가 선택
                                  </label>
                                  <select
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    onChange={handleCountryChangeBefore}
                                    value={selectedBeforeCountry}
                                  >
                                    {countries.map((country) => (
                                      <option key={country} value={country}>
                                        {country}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                <p className="text-sm text-gray-500">한국을 찾기 위해 스크롤을 내려야 합니다.</p>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="after" className="mt-6">
                          <div className="overflow-hidden rounded-lg border bg-white shadow">
                            <div className="p-6">
                              <div className="space-y-4">
                                <div className="space-y-2">
                                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    국가 선택
                                  </label>
                                  <div className="relative">
                                    <select
                                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                      onChange={handleCountryChangeAfter}
                                      value={selectedAfterCountry}
                                      onClick={handleAfterDropdownClick}
                                    >
                                      {countries.map((country) => (
                                        <option key={country} value={country}>
                                          {country}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                                <p className="text-sm text-gray-500">KoreaDropdown이 자동으로 한국을 찾아 선택했습니다!</p>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                    {/* <div className="mt-8 space-y-6">
                      <div className="space-y-2">
                        <div className="h-4 w-32 rounded bg-gray-300"></div>
                        <div className="relative">
                          <div className="h-10 w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm">
                            대한민국 (Korea)
                          </div>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <Check className="h-4 w-4 text-gray-900" />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 w-24 rounded bg-gray-300"></div>
                        <div className="h-10 w-full rounded border border-gray-300 bg-white"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 w-28 rounded bg-gray-300"></div>
                        <div className="h-10 w-full rounded border border-gray-300 bg-white"></div>
                      </div>
                      <div className="flex justify-end">
                        <div className="h-10 w-24 rounded bg-gray-800"></div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full bg-gray-50 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-full px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">주요 기능</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">시간을 절약하는 스마트한 방법</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  KoreaDropdown은 웹사이트에서 국가 선택 과정을 자동화하여 시간을 절약해 드립니다.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 py-12 md:grid-cols-3 xl:gap-8 2xl:gap-10">
              <Card className="transition-all hover:-translate-y-1 hover:shadow-md">
                <CardHeader>
                  <MousePointer className="h-10 w-10 text-gray-900" />
                  <CardTitle className="mt-4">자동 선택</CardTitle>
                  <CardDescription>드롭다운 메뉴가 열리면 자동으로 한국을 찾아 선택합니다.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all hover:-translate-y-1 hover:shadow-md">
                <CardHeader>
                  <Globe className="h-10 w-10 text-gray-900" />
                  <CardTitle className="mt-4">다양한 웹사이트 지원</CardTitle>
                  <CardDescription>대부분의 웹사이트와 호환되며 지속적으로 업데이트됩니다.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all hover:-translate-y-1 hover:shadow-md">
                <CardHeader>
                  <Settings className="h-10 w-10 text-gray-900" />
                  <CardTitle className="mt-4">간편한 설정</CardTitle>
                  <CardDescription>설치 후 별도의 설정 없이 바로 사용할 수 있습니다.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-full px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">사용 방법</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">간단한 3단계로 시작하세요</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  KoreaDropdown는 설치 후 바로 작동합니다. 별도의 복잡한 설정이 필요하지 않습니다.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 py-12 md:grid-cols-3 xl:gap-10 2xl:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-white">1</div>
                <h3 className="text-xl font-bold">크롬 웹 스토어에서 설치</h3>
                <p className="text-gray-500">
                  Chrome 웹 스토어에서 KoreaDropdown을 검색하고 '추가' 버튼을 클릭하세요.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-white">2</div>
                <h3 className="text-xl font-bold">확장 프로그램 활성화</h3>
                <p className="text-gray-500">
                  설치 후 자동으로 활성화됩니다. 필요한 경우 확장 프로그램 아이콘을 클릭하여 설정할 수 있습니다.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-white">3</div>
                <h3 className="text-xl font-bold">웹사이트 이용하기</h3>
                <p className="text-gray-500">
                  이제 웹사이트에서 국가 선택 드롭다운이 나타나면 자동으로 한국이 선택됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto max-w-full px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">자주 묻는 질문</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  KoreaDropdown에 대해 궁금한 점이 있으신가요? 아래에서 답변을 찾아보세요.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 max-w-4xl xl:max-w-5xl space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>KoreaDropdown은 모든 웹사이트에서 작동하나요?</CardTitle>
                  <CardDescription>
                    대부분의 웹사이트에서 작동합니다. 일부 특수한 형태의 드롭다운이나 커스텀 UI를 사용하는
                    웹사이트에서는 작동하지 않을 수 있습니다.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>개인 정보를 수집하나요?</CardTitle>
                  <CardDescription>
                    아니요, KoreaDropdown은 어떠한 개인 정보도 수집하지 않습니다. 모든 작업은 사용자의 브라우저 내에서만
                    이루어집니다.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>다른 국가를 자동 선택할 수 있나요?</CardTitle>
                  <CardDescription>
                    현재는 한국만 지원하고 있습니다. 향후 업데이트에서 다른 국가 선택 기능을 추가할 예정입니다.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>확장 프로그램을 일시적으로 비활성화할 수 있나요?</CardTitle>
                  <CardDescription>
                    네, Chrome 브라우저의 확장 프로그램 관리 페이지에서 일시적으로 비활성화하거나 특정 웹사이트에서만
                    작동하도록 설정할 수 있습니다.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto max-w-full px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <div className="mx-auto max-w-2xl xl:max-w-3xl 2xl:max-w-4xl space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">개발자에게 마음 한 잔 보내기</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  KoreaDropdown이 유용하셨다면, 개발자에게 따뜻한 커피 한 잔을 선물해주세요 ☕️
                </p>
              </div>

              <div className="flex flex-col items-center space-y-6">
                <div className="w-48 h-48 bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
                  <img src="/kakao-pay.png" alt="kakao" className="rounded-lg" />
                </div>
                <p className="text-sm text-gray-500">
                  후원해주신 금액은 더 나은 서비스 개발에 사용됩니다.
                </p>
              </div>
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
            &copy; 2025 KoreaDropdown. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href={githubLink} className="text-sm text-gray-500 hover:underline">
              Github
            </Link>
            <Link href={`mailto:${mailAddress}`} className="text-sm text-gray-500 hover:underline">
              문의하기
            </Link>
            <Link href="/privacy-policy" className="text-sm text-gray-500 hover:underline">
              개인정보처리방침
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage;