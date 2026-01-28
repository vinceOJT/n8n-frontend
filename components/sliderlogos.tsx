
import HeroSection from "@/components/hero-section"
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'


export default function SliderLogos() {

    return (
        <section className="bg-background">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    {/* <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Powered by the best teamss</p>
                    </div> */}
                    <div className="relative py-2 md:w-[calc(100%-11rem)]">
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
    )

}


