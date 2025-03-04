'use client'

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Header from '../components/layout/headerBlack'
import bocs from '@/images/bocs_1.png'
import gears from '@/images/gears_1.png'
import keap from '@/images/keap_1.png'
import woo from '@/images/woo_1.png'
import launchy from '@/images/launchy_1.png'


const people = [
    {
      name: 'Website & eCommerce',
      role: 'Wordpress & Woocommerce',
      imageUrl: woo.src,
      bio: 'WordPress and WooCommerce are in the mix for their seamless integration with our CRM and their open-source flexibility, allowing for extensive customisation. Unlike other platforms that rely on paid apps or extensions for modifications, WordPress and WooCommerce offer unrestricted adaptability.',
      xUrl: '#',
      linkedinUrl: '#',
    },
    {
        name: 'Subscriptions',
        role: 'Bocs Subscriptions',
        imageUrl: bocs.src,
        bio: 'Bocs is an advanced subscription box platform developed by the founders of CRU, built on over a decade of experience delivering tailored eCommerce and subscription solutions. Bocs provides businesses with the essential tools to efficiently manage subscriptions, reduce churn, and automate key processes—all while giving subscribers full control through intuitive self-service options.',
        xUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'CRM',
        role: 'KEAP',
        imageUrl: keap.src,
        bio: 'KEAP is a leading CRM platform renowned for its extensive capabilities. Serving as the core of your digital ecosystem, KEAP seamlessly integrates data from eCommerce, subscription services, booking and reservation systems, point-of-sale systems, and other essential operational, sales, and marketing tools.',
        xUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'Point of Sale',
        role: 'Lightspeed',
        imageUrl: launchy.src,
        bio: 'Lightspeed POS has been selected due to its API connectivity and powerful features across retail and hospitality.',
        xUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'Digital Membership Cards – Apple & Google Wallet',
        role: 'KCard',
        imageUrl: gears.src,
        bio: 'KCard by ConnectIT offers an innovative solution for delivering push notifications directly to mobile devices. With built-in geofencing capabilities, KCard enables automated, real-time notifications for wine club updates, promotional offers, and personalised greetings when customers arrive at the cellar door.',
        xUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'External Marketing Platforms',
        role: 'Bookings etc...',
        imageUrl: gears.src,
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        xUrl: '#',
        linkedinUrl: '#',
      },
  ]

export default function Example() {
  return (
    
    <div className="bg-gray-900">
        <div className="bg-white">
        <Header/>
        <div className="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20 pt-14">
            <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            />
            <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
                How it works?
                </h1>
                <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                This trusted and proven ecosystem is driven by the team at Launchy, combining years of experience across multiple industries. Launchy have partnered with industry leading technologies delivering power across the key areas a successful winery needs. Launchy connect the systems, develop automation for both business and marketing & sales, assist with list hygiene, data transfer and provide strategy to ensure the full capabilities are being used. 
                </p>
                <div className="mt-10 flex items-center gap-x-6">
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
                <img
                alt=""
                src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
                className="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                />
            </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
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
        <div className="bg-white py-24 md:py-32 lg:py-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">The Ecosystem</h2>
            <p className="mt-6 text-lg/8 text-gray-600">
            Each platform is at the top of its category ensuring it focuses solely on its capabilities. Forget All-in-one systems that try to do everything and welcome a tech stack that has been tried and tested with Australia&apos;s top wineries.
            </p>
            </div>
            <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
            >
            {people.map((person) => (
                <li key={person.name}>
                {/* <img alt="" src={person.imageUrl} className="aspect-3/2 w-full rounded-2xl object-cover" /> */}
                <h3 className="mt-6 text-lg/8 font-semibold text-gray-900">{person.name}</h3>
                <p className="text-base/7 text-gray-600">{person.role}</p>
                <p className="mt-4 text-base/7 text-gray-600">{person.bio}</p>
                {/* <ul role="list" className="mt-6 flex gap-x-6">
                    <li>
                    <a href={person.xUrl} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">X</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                        <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                        </svg>
                    </a>
                    </li>
                    <li>
                    <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">LinkedIn</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                        <path
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                        />
                        </svg>
                    </a>
                    </li>
                </ul> */}
                </li>
            ))}
            </ul>
        </div>
        </div>
        <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Game-Changing Features & Scenarios.</h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Check out some of the ecosystmes capabilties. Want learn more? Reach out for a chat.
            </p>
            </div>
        </div>
        </div>
        <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div
            aria-hidden="true"
            className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        >
            <div
            style={{
                clipPath:
                'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
            }}
            className="aspect-801/1036 w-[50.0625rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <p className="text-base/7 font-semibold text-indigo-600">Problem:</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Wineries Struggle to Convert Cellar Door Visitors into Repeat Online Buyers
                </h1>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <div className="relative lg:order-last lg:col-span-5">
                <svg
                aria-hidden="true"
                className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
                >
                <defs>
                    <pattern
                    id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                    >
                    <path d="M0.5 0V200M200 0.5L0 0.499983" />
                    </pattern>
                </defs>
                <rect fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" width="100%" height="100%" strokeWidth={0} />
                </svg>
                <figure className="border-l border-indigo-600 pl-8">
                <blockquote className="text-xl/8 font-semibold tracking-tight text-gray-900">
                    <p>
                    “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac
                    dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
                    tristique.”
                    </p>
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                    <img
                    alt=""
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="mt-1 size-10 flex-none rounded-full bg-gray-50"
                    />
                    <div className="text-sm/6">
                    <div className="font-semibold text-gray-900">Brenna Goyette</div>
                    <div className="text-gray-600">@brenna</div>
                    </div>
                </figcaption>
                </figure>
            </div>
            <div className="max-w-xl text-base/7 text-gray-700 lg:col-span-7">
                <p>
                Launchy&apos;s automation captures visitor details, segments them based on preferences, and nurtures them into loyal repeat buyers through personalised email and SMS follow-ups.
                </p>
                <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                    <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                    <span>
                    <strong className="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                    </span>
                </li>
                <li className="flex gap-x-3">
                    <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                    <span>
                    <strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua
                    ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                    </span>
                </li>
                <li className="flex gap-x-3">
                    <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                    <span>
                    <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
                    vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </span>
                </li>
                </ul>
                <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
            </div>
            </div>
        </div>
        </div>
        <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div
            aria-hidden="true"
            className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        >
            <div
            style={{
                clipPath:
                'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
            }}
            className="aspect-801/1036 w-[50.0625rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <p className="text-base/7 font-semibold text-indigo-600">Problem:</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Wine Clubs Have High Churn Rates and Low Engagement
                </h1>
            </div>
            <div className="mx-auto mt-16 flex lg:flex-row-reverse gap-y-[50px] gap-x-[12%] max-w-2xl flex-wrap gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:flex">
            <div className="relative w-[100%] sm:w-[100%] lg:order-last lg:col-span-5 lg:w-[40%]">
                <svg
                aria-hidden="true"
                className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
                >
                <defs>
                    <pattern
                    id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                    >
                    <path d="M0.5 0V200M200 0.5L0 0.499983" />
                    </pattern>
                </defs>
                <rect fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" width="100%" height="100%" strokeWidth={0} />
                </svg>
                <figure className="border-l border-indigo-600 pl-8">
                <blockquote className="text-xl/8 font-semibold tracking-tight text-gray-900">
                    <p>
                    “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac
                    dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
                    tristique.”
                    </p>
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                    <img
                    alt=""
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="mt-1 size-10 flex-none rounded-full bg-gray-50"
                    />
                    <div className="text-sm/6">
                    <div className="font-semibold text-gray-900">Brenna Goyette</div>
                    <div className="text-gray-600">@brenna</div>
                    </div>
                </figcaption>
                </figure>
            </div>
            <div className="max-w-xl text-base/7 text-gray-700 lg:col-span-7">
                <p>
                Launchy automates personalised member communication, reminds customers of upcoming shipments, and engages them with tailored offers and experiences to keep them subscribed longer.
                </p>
                <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                    <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                    <span>
                    <strong className="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                    </span>
                </li>
                <li className="flex gap-x-3">
                    <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                    <span>
                    <strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua
                    ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                    </span>
                </li>
                <li className="flex gap-x-3">
                    <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                    <span>
                    <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
                    vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </span>
                </li>
                </ul>
                <p className="mt-8">
                A well-known winery saw members drop off after just six months. After integrating Launchy, they set up automated birthday messages, exclusive content, and early access to new vintages. Their wine club churn rate dropped by 30%, and lifetime member value increased significantly.
                </p>
            </div>
            </div>
        </div>
        </div>
        <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div
            aria-hidden="true"
            className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        >
            <div
            style={{
                clipPath:
                'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
            }}
            className="aspect-801/1036 w-[50.0625rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <p className="text-base/7 font-semibold text-indigo-600">Problem:</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Wineries Struggle to Convert Cellar Door Visitors into Repeat Online Buyers
                </h1>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <div className="relative lg:order-last lg:col-span-5">
                <svg
                aria-hidden="true"
                className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
                >
                <defs>
                    <pattern
                    id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                    >
                    <path d="M0.5 0V200M200 0.5L0 0.499983" />
                    </pattern>
                </defs>
                <rect fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" width="100%" height="100%" strokeWidth={0} />
                </svg>
                <figure className="border-l border-indigo-600 pl-8">
                <blockquote className="text-xl/8 font-semibold tracking-tight text-gray-900">
                    <p>
                    “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac
                    dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
                    tristique.”
                    </p>
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                    <img
                    alt=""
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="mt-1 size-10 flex-none rounded-full bg-gray-50"
                    />
                    <div className="text-sm/6">
                    <div className="font-semibold text-gray-900">Brenna Goyette</div>
                    <div className="text-gray-600">@brenna</div>
                    </div>
                </figcaption>
                </figure>
            </div>
            <div className="max-w-xl text-base/7 text-gray-700 lg:col-span-7">
                <p>
                Launchy&apos;s automation captures visitor details, segments them based on preferences, and nurtures them into loyal repeat buyers through personalised email and SMS follow-ups.
                </p>
                <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                    <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                    <span>
                    <strong className="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                    </span>
                </li>
                <li className="flex gap-x-3">
                    <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                    <span>
                    <strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua
                    ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                    </span>
                </li>
                <li className="flex gap-x-3">
                    <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                    <span>
                    <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
                    vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </span>
                </li>
                </ul>
                <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
            </div>
            </div>
        </div>
        </div>
        <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div
            aria-hidden="true"
            className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        >
            <div
            style={{
                clipPath:
                'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
            }}
            className="aspect-801/1036 w-[50.0625rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <p className="text-base/7 font-semibold text-indigo-600">Problem:</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Wine Clubs Have High Churn Rates and Low Engagement
                </h1>
            </div>
            <div className="mx-auto mt-16 flex lg:flex-row-reverse gap-y-[50px] gap-x-[12%] max-w-2xl flex-wrap gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:flex">
            <div className="relative w-[100%] sm:w-[100%] lg:order-last lg:col-span-5 lg:w-[40%]">
                <svg
                aria-hidden="true"
                className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
                >
                <defs>
                    <pattern
                    id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                    >
                    <path d="M0.5 0V200M200 0.5L0 0.499983" />
                    </pattern>
                </defs>
                <rect fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" width="100%" height="100%" strokeWidth={0} />
                </svg>
                <figure className="border-l border-indigo-600 pl-8">
                <blockquote className="text-xl/8 font-semibold tracking-tight text-gray-900">
                    <p>
                    “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac
                    dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
                    tristique.”
                    </p>
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                    <img
                    alt=""
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="mt-1 size-10 flex-none rounded-full bg-gray-50"
                    />
                    <div className="text-sm/6">
                    <div className="font-semibold text-gray-900">Brenna Goyette</div>
                    <div className="text-gray-600">@brenna</div>
                    </div>
                </figcaption>
                </figure>
            </div>
            <div className="max-w-xl text-base/7 text-gray-700 lg:col-span-7">
                <p>
                Launchy automates personalised member communication, reminds customers of upcoming shipments, and engages them with tailored offers and experiences to keep them subscribed longer.
                </p>
                <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                    <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                    <span>
                    <strong className="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                    </span>
                </li>
                <li className="flex gap-x-3">
                    <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                    <span>
                    <strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua
                    ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                    </span>
                </li>
                <li className="flex gap-x-3">
                    <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                    <span>
                    <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
                    vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </span>
                </li>
                </ul>
                <p className="mt-8">
                A well-known winery saw members drop off after just six months. After integrating Launchy, they set up automated birthday messages, exclusive content, and early access to new vintages. Their wine club churn rate dropped by 30%, and lifetime member value increased significantly.
                </p>
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
