'use client'

import Header from './components/layout/header'
import { Container } from '@/components/container'
import { List, ListItem } from '@/components/List'
import { FadeIn } from '@/components/FadeIn'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import yering from '@/images/yering.png'
import langi from '@/images/langi.png'
import xanadu from '@/images/xanadu.png'
import thelane from '@/images/thelane.png'
import hv from '@/images/howardvineyard.png'
import sw from '@/images/sidewood.png'
import montys from '@/images/montys.png'
import hp from '@/images/howardpark.png'

export default function Example() {
  const stats = [
    { label: 'Transactions every 24 hours', value: '44 million' },
    { label: 'Assets under holding', value: '$119 trillion' },
    { label: 'New users annually', value: '46,000' },
  ]
  return (
    
    <div className="bg-gray-900">
      <Header/>

      <div className="relative isolate overflow-hidden pt-14">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                Announcing our next round of funding.{' '}
                <a href="#" className="font-semibold text-white">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              The Ultimate Sales & Growth Tech Stack for Wineries 
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              Leverage the best platforms and expert strategy to maximise sales, grow memberships, and deepen customer loyalty.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Get started
                </a>
                <a href="#" className="text-sm/6 font-semibold text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg/8 font-semibold text-white">Trusted By Australia&apos;s Top Wineries</h2>
          <div className="mx-auto mt-10 flex flex-wrap justify-center max-w-lg items-center gap-x-8 gap-y-14 sm:max-w-xl  sm:gap-x-10 lg:mx-0 lg:max-w-none">
            <img
              alt="Yering"
              src={yering.src}
              width={158}
              height={48}
              className="w-[47%] md:w-[28%] lg:w-[17.35%] max-h-12 w-full object-contain"
            />
            <img
              alt="Langi"
              src={langi.src}
              width={158}
              height={48}
              className="w-[47%] md:w-[28%] lg:w-[17.35%] max-h-12 w-full object-contain"
            />
            <img
              alt="Xanadu"
              src={xanadu.src}
              width={158}
              height={48}
              className="w-[47%] md:w-[28%] lg:w-[17.35%] max-h-12 w-full object-contain"
            />
            <img
              alt="TheLane"
              src={thelane.src}
              width={158}
              height={48}
              className="w-[47%] md:w-[28%] lg:w-[17.35%] max-h-12 w-full object-contain"
            />
             <img
              alt="SideWood"
              src={sw.src}
              width={158}
              height={48}
              className="w-[47%] md:w-[28%] lg:w-[17.35%] max-h-12 w-full object-contain"
            />
            <img
              alt="HowardVineyard"
              src={hv.src}
              width={158}
              height={48}
              className="w-[47%] md:w-[28%] lg:w-[17.35%] max-h-12 w-full object-contain"
            />
            <img
              alt="Montys"
              src={montys.src}
              width={158}
              height={48}
              className="w-[47%] md:w-[28%] lg:w-[17.35%] max-h-12 w-full object-contain"
            />
            <img
              alt="HowardPark"
              src={hp.src}
              width={70}
              height={48}
              className="w-[47%] md:w-[28%] lg:w-[17.35%] max-h-12 w-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Unlock a Proven, High-Performance<br/>Tech Ecosystem for Wineries</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl/8 text-gray-600">
                Drive wine sales, club subscriptions, loyalty & engagement, boost retention, and harness the power of data to grow your business—all with a seamless technology stack designed for wineries.
                </p>
                <p className="mt-10 max-w-xl text-base/7 text-gray-700">
                Forget generic, one-size-fits-all platforms that claim to do everything but fall short. Our expert team ensures your ecosystem works together flawlessly, handling implementation, optimisation, and ongoing strategy. Trusted by top wineries, this approach delivers real results—helping you increase sales, enhance customer experiences, and build lasting loyalty.
                </p>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white pt-24 pb-16 sm:pt-32 sm:pb-24 xl:pb-32">
        <div className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
              <div className="relative aspect-2/1 h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                  className="absolute inset-0 size-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
              <figure className="relative isolate pt-6 sm:pt-12">
                <svg
                  fill="none"
                  viewBox="0 0 162 128"
                  aria-hidden="true"
                  className="absolute top-0 left-0 -z-10 h-32 stroke-white/20"
                >
                  <path
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                    id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                  />
                  <use x={86} href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" />
                </svg>
                <blockquote className="text-xl/8 font-semibold text-white sm:text-2xl/9">
                  <p>
                    Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt
                    nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque
                    bibendum.
                  </p>
                </blockquote>
                <figcaption className="mt-8 text-base">
                  <div className="font-semibold text-white">Judith Black</div>
                  <div className="mt-1 text-gray-400">CEO of Workcation</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base/7 font-semibold text-indigo-600">Get the help you need</p>
            <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">The Tech Stack</h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Each platform in this stack focuses solely on its capabilities, ensuring you&apos;re not stuck with an all-in-one solution that falls short.
            </p>
          </div>
        </div>
      </div>
      <Container className="bg-white pb-34 sm:pb-42">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Website & eCommerce">
            Endless features and flexibility. Take advantage of open-source customisability and a vast library of community-built extensions to handle nearly any scenario.
            </ListItem>
            <ListItem title="Powerful Subscriptions tools" >
            All the tools you need to create, design and deploy a powerful subscription offering. A revolutionary new platform focused on flexible subscription box offerings with all the management tools required to efficiently run a subscription club.
            </ListItem>
            <ListItem title="Robust CRM">
            Seamless data synchronisation across connected platforms of the ecosystem to build a 360 degree view of your customer, sales and product data across online, cellar door, hospitality and booking channels.
            </ListItem>
            <ListItem title="Digital Wallet">
            Instantly reach your wine club members with order updates, renewal reminders, and exclusive club content. Welcome members to your cellar door automatically using Geo-fencing. Push notifications ensure immediate delivery to their mobile devices, driving unmatched open and click rates.
            </ListItem>
            <ListItem title="Point Of Sale">
            The heart of your cellar door operation. Powerful data capture and integration with the ecosystem as well as efficient use processing orders 
            </ListItem>
          </List>
        </div>
      </Container>
      <div className="relative bg-gray-900">
        <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
            className="size-full object-cover"
          />
          <svg
            viewBox="0 0 926 676"
            aria-hidden="true"
            className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
          >
            <path
              d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
              fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
              fillOpacity=".4"
            />
            <defs>
              <linearGradient
                id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                x1="926.392"
                x2="-109.635"
                y1=".176"
                y2="321.024"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#776FFF" />
                <stop offset={1} stopColor="#FF4694" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32">
            <h2 className="text-base/7 font-semibold text-indigo-400">Award winning support</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">How can we help</p>
            <p className="mt-6 text-base/7 text-gray-300">
            Our team integrates a proven tech stack built on trusted, industry-leading platforms—stress-tested by top wineries generating high revenue. From eCommerce and CRM to subscriptions and POS, we ensure seamless integration and optimisation. 
            </p>
            <p className="mt-6 text-base/7 text-gray-300">
            Beyond setup, we provide expert strategy to help you maximise every tool, driving wine club growth, stronger customer relationships, and higher sales.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View Our scenarios
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Ready to dive in? <br />
            Start your free trial today.
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
