import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HeroHeader } from './header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">Ship 10x Faster with NS</h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg">Highly customizable components for building modern websites and applications that look and feel the way you mean it.</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-5 text-base">
                                        <Link href="#link">
                                            <span className="text-nowrap">Start Building</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="px-5 text-base">
                                        <Link href="#link">
                                            <span className="text-nowrap">Request a demo</span>
                                        </Link>
                                    </Button>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="client-logo-svg"> <use href="https://www.callboxinc.com/wp-content/themes/enfold-child/assets/images/client-logos-2023.svg?x29465#microsoft-logo"></use> </svg>
                                </div>
                            </div>
                            {/* <Image
                                className="-z-10 order-first ml-auto h-56 w-full object-cover invert sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0"
                                src="https://ik.imagekit.io/lrigu76hy/tailark/abstract-bg.jpg?updatedAt=1745733473768"
                                alt="Abstract Object"
                                height="4000"
                                width="3000"
                            /> */}
                        </div>
                    </div>
                </section>
                <section className="bg-background pb-16 md:pb-32">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">Powered by the best teamss</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                                    {/* Applied 'h-12' (3rem) and 'object-contain' to all images.
              Removed hardcoded 'height' attributes to let CSS handle it.
          */}
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="dark:invert h-12 w-auto object-contain"
                                            src="https://cdn-icons-png.flaticon.com/512/882/882749.png"
                                            alt="hp logo"
                                        />
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <img
                                            className="dark:invert h-25 w-auto object-contain"
                                            src="https://cdn-icons-png.flaticon.com/512/5968/5968863.png"
                                            alt="google logo"
                                        />
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <img
                                            className="dark:invert h-12 w-auto object-contain"
                                            src="https://img.icons8.com/color/1200/amazon-web-services.jpg"
                                            alt="aws logo"
                                        />
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <img
                                            className="dark:invert h-25 w-auto object-contain"
                                            src="https://cdn-icons-png.flaticon.com/512/16183/16183557.png"
                                            alt="acer Logo"
                                        />
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <img
                                            className="dark:invert h-12 w-auto object-contain"
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Zendesk_logo.svg/500px-Zendesk_logo.svg.png?20190613202225"
                                            alt="zendesk Logo"
                                        />
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <img
                                            className="dark:invert h-20 w-auto object-contain"
                                            src="https://cdn-icons-png.flaticon.com/512/16183/16183600.png"
                                            alt="intel Logo"
                                        />
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <img
                                            className="dark:invert h-10 w-auto object-contain"
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Telef%C3%B3nica_2021_logo.svg/960px-Telef%C3%B3nica_2021_logo.svg.png?20211009193120"
                                            alt="telefonica Logo"
                                        />
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <img
                                            className="dark:invert h-12 w-auto object-contain"
                                            src="https://cdn-icons-png.flaticon.com/512/731/731984.png"
                                            alt="amd Logo"
                                        />
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <img
                                            className="dark:invert h-10 w-auto object-contain"
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/NEC_logo.svg/330px-NEC_logo.svg.png?20251003142441"
                                            alt="nec Logo"
                                        />
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <img
                                            className="dark:invert h-40 w-auto object-contain"
                                            src="https://cdn-icons-png.flaticon.com/512/16183/16183626.png"
                                            alt="microsoft Logo"
                                        />
                                    </div>
                                </InfiniteSlider>

                                {/* Gradient Overlays */}
                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
