// import React from 'react'
import { BiSearch } from "react-icons/bi"
import OneFaq from './components/OneFaq'
import { Helmet } from 'react-helmet'
const FaqOne = () => {
	const faqs = [
		{
			title:"Getting Started",
			body:"General Information to know about toptier"
		},{
			title:"Dashboard",
			body:"How to navigate the dashboard"
		},{
			title:"TTT challenge",
			body:"Information regarding the TTT challenge"
		},{
			title:"TTT challenge plus",
			body:"Information regardinterest to the TTT challenge plus"
		},{
			title:"Competition",
			body:"Information regarding our monthly competition"
		},{
			title:"Affiliate program",
			body:"Information regarding our affiliation program"
		}
	]
	return (
		<main className="">
			<Helmet>
				<title>Ox Trade | FaQ</title>
			</Helmet>
			<div className="bg-[#141438]  pb-8 w-full px-[16px] md:px-[32px] lg:px-[64px] pt-[13%]">
				<h1 className="text-white font-semibold text-[28px]">Advice and answers from the TopTier Trader Team</h1>
				<form action="/en/" autoComplete="off" className="relative">
					<input type="text" autoComplete="off" placeholder="Search for articles..." name="q" className="bg-[#ffffff33] px-3 py-3  pl-10 w-full rounded-md text-white" value="" />
					<button type="button" className='absolute left-[1%] top-[30%] text-white'>
						<BiSearch size={24} />
					</button>
				</form>
			</div>
			<div className="z-1 flex shrink-0 grow basis-auto justify-center px-5 sm:px-10">
				<section data-testid="main-content" className="max-w-full pt-6 w-240">
					<section data-testid="landing-section">
						<div className="flex flex-col gap-16 pt-6">
							<div className="grid auto-rows-auto gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6 md:grid-cols-1">
								
								{faqs.map((faq,index)=>{
									return <OneFaq title={faq.title} body={faq.body} key={index} />
								})}
								{/* <div dir="ltr" id="getting-started" className="flex">
									<a href="https://help.toptiertrader.com/en/collections/3169564-getting-started" className="collection-link group/collection-summary flex grow overflow-hidden rounded-lg border border-solid border-body-border bg-body-card-bg no-underline shadow-sm transition ease-linear hover:border-primary-alpha-60">
										<div className="o__ltr flex grow flex-row flex-col p-5 sm:flex-row sm:p-5">
											<div className="flex items-center">
												<div className="flex items-center rounded-lg bg-collection-card-bg bg-collection-card-image bg-cover stroke-collection-card-color text-collection-card-color justify-start mb-4 h-10 w-10 sm:mb-0 sm:h-[86px] sm:w-[86px] sm:justify-center sm:pb-0" data-test-collection-photo="true">
													<div className="h-7 w-7 sm:h-10 sm:w-10">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
															<rect width="256" height="256" fill="none" />
															<polyline points="176 32 176 128 144 104 112 128 112 32" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" /><path d="M48,216a23.9,23.9,0,0,1,24-24H208V32H72A23.9,23.9,0,0,0,48,56Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" /><polyline points="48 216 48 224 192 224" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" />
														</svg>
													</div>
												</div>
											</div>
											<div className="intercom-force-break flex w-full flex-1 flex-col text-body-primary-color max-w-oneColWidth justify-center sm:pl-5" dir="ltr">
												<div>
													<h2 className="-mt-1 mb-0.5 line-clamp-2 text-md font-semibold leading-normal text-body-primary-color transition ease-linear group-hover/collection-summary:text-primary sm:line-clamp-1" data-testid="collection-name">Getting Started</h2>
													<p className="mb-0 mt-0 line-clamp-3 text-md sm:line-clamp-1">General information to know about TopTier Trader</p>
												</div>
												<div className="mt-3">
													<div className="flex gap-2">
														<div className="flex flex-row">
															<div className="flex shrink-0 flex-col items-center justify-center rounded-full leading-normal sm:flex-row o__ltr" data-testid="avatars"><img width="24" height="24" src="https://static.intercomassets.com/avatars/5197223/square_128/0x0_%281%29-1673907572.png" alt="TopTier Trader avatar" className="inline-flex items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-white shadow-solid-2 shadow-body-border [&amp;:nth-child(n+2)]:hidden lg:[&amp;:nth-child(n+2)]:inline-flex h-6 w-6 z-4" /></div>
														</div>
														<span className="line-clamp-1 flex flex-row items-center text-base text-body-secondary-color">
															<span className="hidden sm:inline">By TopTier</span><span className="inline sm:hidden">1 author</span>
															<svg width="4" height="4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="m-2">
																<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"></path>
															</svg>
															21 articles
														</span>
													</div>
												</div>
											</div>
										</div>
									</a>
								</div>
								<div dir="ltr" id="dashboard" className="flex">
									<a href="https://help.toptiertrader.com/en/collections/3535377-dashboard" className="collection-link group/collection-summary flex grow overflow-hidden rounded-lg border border-solid border-body-border bg-body-card-bg no-underline shadow-sm transition ease-linear hover:border-primary-alpha-60">
										<div className="o__ltr flex grow flex-row flex-col p-5 sm:flex-row sm:p-5">
											<div className="flex items-center">
												<div className="flex items-center rounded-lg bg-collection-card-bg bg-collection-card-image bg-cover stroke-collection-card-color text-collection-card-color justify-start mb-4 h-10 w-10 sm:mb-0 sm:h-[86px] sm:w-[86px] sm:justify-center sm:pb-0" data-test-collection-photo="true">
													<div className="h-7 w-7 sm:h-10 sm:w-10">
														<svg role="img" viewBox="0 0 48 48">
															<g id="book-bookmark" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round">
																<path d="M35 31l-6-6-6 6V7h12v24z"></path>
																<path d="M35 9h6v38H11a4 4 0 0 1-4-4V5" stroke-linejoin="round"></path>
																<path d="M39 9V1H11a4 4 0 0 0 0 8h12" stroke-linejoin="round"></path>
															</g>
														</svg>
													</div>
												</div>
											</div>
											<div className="intercom-force-break flex w-full flex-1 flex-col text-body-primary-color max-w-oneColWidth justify-center sm:pl-5" dir="ltr">
												<div>
													<h2 className="-mt-1 mb-0.5 line-clamp-2 text-md font-semibold leading-normal text-body-primary-color transition ease-linear group-hover/collection-summary:text-primary sm:line-clamp-1" data-testid="collection-name">Dashboard</h2>
													<p className="mb-0 mt-0 line-clamp-3 text-md sm:line-clamp-1">How to navigate the dashboard</p>
												</div>
												<div className="mt-3">
													<div className="flex gap-2">
														<div className="flex flex-row">
															<div className="flex shrink-0 flex-col items-center justify-center rounded-full leading-normal sm:flex-row o__ltr" data-testid="avatars"><img width="24" height="24" src="https://static.intercomassets.com/avatars/5197223/square_128/0x0_%281%29-1673907572.png" alt="TopTier Trader avatar" className="inline-flex items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-white shadow-solid-2 shadow-body-border [&amp;:nth-child(n+2)]:hidden lg:[&amp;:nth-child(n+2)]:inline-flex h-6 w-6 z-4" /></div>
														</div>
														<span className="line-clamp-1 flex flex-row items-center text-base text-body-secondary-color">
															<span className="hidden sm:inline">By TopTier</span><span className="inline sm:hidden">1 author</span>
															<svg width="4" height="4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="m-2">
																<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"></path>
															</svg>
															2 articles
														</span>
													</div>
												</div>
											</div>
										</div>
									</a>
								</div>
								<div dir="ltr" id="ttt-challenge" className="flex">
									<a href="https://help.toptiertrader.com/en/collections/3551126-ttt-challenge" className="collection-link group/collection-summary flex grow overflow-hidden rounded-lg border border-solid border-body-border bg-body-card-bg no-underline shadow-sm transition ease-linear hover:border-primary-alpha-60">
										<div className="o__ltr flex grow flex-row flex-col p-5 sm:flex-row sm:p-5">
											<div className="flex items-center">
												<div className="flex items-center rounded-lg bg-collection-card-bg bg-collection-card-image bg-cover stroke-collection-card-color text-collection-card-color justify-start mb-4 h-10 w-10 sm:mb-0 sm:h-[86px] sm:w-[86px] sm:justify-center sm:pb-0" data-test-collection-photo="true">
													<div className="h-7 w-7 sm:h-10 sm:w-10">
														<svg role="img" viewBox="0 0 48 48">
															<g id="book-bookmark" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round">
																<path d="M35 31l-6-6-6 6V7h12v24z"></path>
																<path d="M35 9h6v38H11a4 4 0 0 1-4-4V5" stroke-linejoin="round"></path>
																<path d="M39 9V1H11a4 4 0 0 0 0 8h12" stroke-linejoin="round"></path>
															</g>
														</svg>
													</div>
												</div>
											</div>
											<div className="intercom-force-break flex w-full flex-1 flex-col text-body-primary-color max-w-oneColWidth justify-center sm:pl-5" dir="ltr">
												<div>
													<h2 className="-mt-1 mb-0.5 line-clamp-2 text-md font-semibold leading-normal text-body-primary-color transition ease-linear group-hover/collection-summary:text-primary sm:line-clamp-1" data-testid="collection-name">TTT Challenge</h2>
													<p className="mb-0 mt-0 line-clamp-3 text-md sm:line-clamp-1">Information regarding the TTT Challenge Regular and TTT Challenge Swing accounts</p>
												</div>
												<div className="mt-3">
													<div className="flex gap-2">
														<div className="flex flex-row">
															<div className="flex shrink-0 flex-col items-center justify-center rounded-full leading-normal sm:flex-row o__ltr" data-testid="avatars"><img width="24" height="24" src="https://static.intercomassets.com/avatars/5197223/square_128/0x0_%281%29-1673907572.png" alt="TopTier Trader avatar" className="inline-flex items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-white shadow-solid-2 shadow-body-border [&amp;:nth-child(n+2)]:hidden lg:[&amp;:nth-child(n+2)]:inline-flex h-6 w-6 z-4" /></div>
														</div>
														<span className="line-clamp-1 flex flex-row items-center text-base text-body-secondary-color">
															<span className="hidden sm:inline">By TopTier</span><span className="inline sm:hidden">1 author</span>
															<svg width="4" height="4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="m-2">
																<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"></path>
															</svg>
															24 articles
														</span>
													</div>
												</div>
											</div>
										</div>
									</a>
								</div>
								<div dir="ltr" id="ttt-challenge-plus" className="flex">
									<a href="https://help.toptiertrader.com/en/collections/3551132-ttt-challenge-plus" className="collection-link group/collection-summary flex grow overflow-hidden rounded-lg border border-solid border-body-border bg-body-card-bg no-underline shadow-sm transition ease-linear hover:border-primary-alpha-60">
										<div className="o__ltr flex grow flex-row flex-col p-5 sm:flex-row sm:p-5">
											<div className="flex items-center">
												<div className="flex items-center rounded-lg bg-collection-card-bg bg-collection-card-image bg-cover stroke-collection-card-color text-collection-card-color justify-start mb-4 h-10 w-10 sm:mb-0 sm:h-[86px] sm:w-[86px] sm:justify-center sm:pb-0" data-test-collection-photo="true">
													<div className="h-7 w-7 sm:h-10 sm:w-10">
														<svg role="img" viewBox="0 0 48 48">
															<g id="book-bookmark" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round">
																<path d="M35 31l-6-6-6 6V7h12v24z"></path>
																<path d="M35 9h6v38H11a4 4 0 0 1-4-4V5" stroke-linejoin="round"></path>
																<path d="M39 9V1H11a4 4 0 0 0 0 8h12" stroke-linejoin="round"></path>
															</g>
														</svg>
													</div>
												</div>
											</div>
											<div className="intercom-force-break flex w-full flex-1 flex-col text-body-primary-color max-w-oneColWidth justify-center sm:pl-5" dir="ltr">
												<div>
													<h2 className="-mt-1 mb-0.5 line-clamp-2 text-md font-semibold leading-normal text-body-primary-color transition ease-linear group-hover/collection-summary:text-primary sm:line-clamp-1" data-testid="collection-name">TTT Challenge Plus</h2>
													<p className="mb-0 mt-0 line-clamp-3 text-md sm:line-clamp-1">Information regarding the TTT Challenge Plus accounts</p>
												</div>
												<div className="mt-3">
													<div className="flex gap-2">
														<div className="flex flex-row">
															<div className="flex shrink-0 flex-col items-center justify-center rounded-full leading-normal sm:flex-row o__ltr" data-testid="avatars"><img width="24" height="24" src="https://static.intercomassets.com/avatars/5197223/square_128/0x0_%281%29-1673907572.png" alt="TopTier Trader avatar" className="inline-flex items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-white shadow-solid-2 shadow-body-border [&amp;:nth-child(n+2)]:hidden lg:[&amp;:nth-child(n+2)]:inline-flex h-6 w-6 z-4" /></div>
														</div>
														<span className="line-clamp-1 flex flex-row items-center text-base text-body-secondary-color">
															<span className="hidden sm:inline">By TopTier</span><span className="inline sm:hidden">1 author</span>
															<svg width="4" height="4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="m-2">
																<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"></path>
															</svg>
															18 articles
														</span>
													</div>
												</div>
											</div>
										</div>
									</a>
								</div>
								<div dir="ltr" id="ttt-funded" className="flex">
									<a href="https://help.toptiertrader.com/en/collections/3534984-ttt-funded" className="collection-link group/collection-summary flex grow overflow-hidden rounded-lg border border-solid border-body-border bg-body-card-bg no-underline shadow-sm transition ease-linear hover:border-primary-alpha-60">
										<div className="o__ltr flex grow flex-row flex-col p-5 sm:flex-row sm:p-5">
											<div className="flex items-center">
												<div className="flex items-center rounded-lg bg-collection-card-bg bg-collection-card-image bg-cover stroke-collection-card-color text-collection-card-color justify-start mb-4 h-10 w-10 sm:mb-0 sm:h-[86px] sm:w-[86px] sm:justify-center sm:pb-0" data-test-collection-photo="true">
													<div className="h-7 w-7 sm:h-10 sm:w-10">
														<svg role="img" viewBox="0 0 48 48">
															<g id="book-bookmark" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round">
																<path d="M35 31l-6-6-6 6V7h12v24z"></path>
																<path d="M35 9h6v38H11a4 4 0 0 1-4-4V5" stroke-linejoin="round"></path>
																<path d="M39 9V1H11a4 4 0 0 0 0 8h12" stroke-linejoin="round"></path>
															</g>
														</svg>
													</div>
												</div>
											</div>
											<div className="intercom-force-break flex w-full flex-1 flex-col text-body-primary-color max-w-oneColWidth justify-center sm:pl-5" dir="ltr">
												<div>
													<h2 className="-mt-1 mb-0.5 line-clamp-2 text-md font-semibold leading-normal text-body-primary-color transition ease-linear group-hover/collection-summary:text-primary sm:line-clamp-1" data-testid="collection-name">TTT Funded</h2>
													<p className="mb-0 mt-0 line-clamp-3 text-md sm:line-clamp-1">Information regarding the TTT Funded accounts</p>
												</div>
												<div className="mt-3">
													<div className="flex gap-2">
														<div className="flex flex-row">
															<div className="flex shrink-0 flex-col items-center justify-center rounded-full leading-normal sm:flex-row o__ltr" data-testid="avatars"><img width="24" height="24" src="https://static.intercomassets.com/avatars/5197223/square_128/0x0_%281%29-1673907572.png" alt="TopTier Trader avatar" className="inline-flex items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-white shadow-solid-2 shadow-body-border [&amp;:nth-child(n+2)]:hidden lg:[&amp;:nth-child(n+2)]:inline-flex h-6 w-6 z-4" /></div>
														</div>
														<span className="line-clamp-1 flex flex-row items-center text-base text-body-secondary-color">
															<span className="hidden sm:inline">By TopTier</span><span className="inline sm:hidden">1 author</span>
															<svg width="4" height="4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="m-2">
																<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"></path>
															</svg>
															6 articles
														</span>
													</div>
												</div>
											</div>
										</div>
									</a>
								</div>
								<div dir="ltr" id="competition" className="flex">
									<a href="https://help.toptiertrader.com/en/collections/3545306-competition" className="collection-link group/collection-summary flex grow overflow-hidden rounded-lg border border-solid border-body-border bg-body-card-bg no-underline shadow-sm transition ease-linear hover:border-primary-alpha-60">
										<div className="o__ltr flex grow flex-row flex-col p-5 sm:flex-row sm:p-5">
											<div className="flex items-center">
												<div className="flex items-center rounded-lg bg-collection-card-bg bg-collection-card-image bg-cover stroke-collection-card-color text-collection-card-color justify-start mb-4 h-10 w-10 sm:mb-0 sm:h-[86px] sm:w-[86px] sm:justify-center sm:pb-0" data-test-collection-photo="true">
													<div className="h-7 w-7 sm:h-10 sm:w-10">
														<svg role="img" viewBox="0 0 48 48">
															<g id="book-bookmark" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round">
																<path d="M35 31l-6-6-6 6V7h12v24z"></path>
																<path d="M35 9h6v38H11a4 4 0 0 1-4-4V5" stroke-linejoin="round"></path>
																<path d="M39 9V1H11a4 4 0 0 0 0 8h12" stroke-linejoin="round"></path>
															</g>
														</svg>
													</div>
												</div>
											</div>
											<div className="intercom-force-break flex w-full flex-1 flex-col text-body-primary-color max-w-oneColWidth justify-center sm:pl-5" dir="ltr">
												<div>
													<h2 className="-mt-1 mb-0.5 line-clamp-2 text-md font-semibold leading-normal text-body-primary-color transition ease-linear group-hover/collection-summary:text-primary sm:line-clamp-1" data-testid="collection-name">Competition</h2>
													<p className="mb-0 mt-0 line-clamp-3 text-md sm:line-clamp-1">Information regarding our free monthly competition</p>
												</div>
												<div className="mt-3">
													<div className="flex gap-2">
														<div className="flex flex-row">
															<div className="flex shrink-0 flex-col items-center justify-center rounded-full leading-normal sm:flex-row o__ltr" data-testid="avatars"><img width="24" height="24" src="https://static.intercomassets.com/avatars/5197223/square_128/0x0_%281%29-1673907572.png" alt="TopTier Trader avatar" className="inline-flex items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-white shadow-solid-2 shadow-body-border [&amp;:nth-child(n+2)]:hidden lg:[&amp;:nth-child(n+2)]:inline-flex h-6 w-6 z-4" /></div>
														</div>
														<span className="line-clamp-1 flex flex-row items-center text-base text-body-secondary-color">
															<span className="hidden sm:inline">By TopTier</span><span className="inline sm:hidden">1 author</span>
															<svg width="4" height="4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="m-2">
																<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"></path>
															</svg>
															10 articles
														</span>
													</div>
												</div>
											</div>
										</div>
									</a>
								</div>
								<div dir="ltr" id="affiliate-program" className="flex">
									<a href="https://help.toptiertrader.com/en/collections/3582209-affiliate-program" className="collection-link group/collection-summary flex grow overflow-hidden rounded-lg border border-solid border-body-border bg-body-card-bg no-underline shadow-sm transition ease-linear hover:border-primary-alpha-60">
										<div className="o__ltr flex grow flex-row flex-col p-5 sm:flex-row sm:p-5">
											<div className="flex items-center">
												<div className="flex items-center rounded-lg bg-collection-card-bg bg-collection-card-image bg-cover stroke-collection-card-color text-collection-card-color justify-start mb-4 h-10 w-10 sm:mb-0 sm:h-[86px] sm:w-[86px] sm:justify-center sm:pb-0" data-test-collection-photo="true">
													<div className="h-7 w-7 sm:h-10 sm:w-10">
														<svg role="img" viewBox="0 0 48 48">
															<g id="book-bookmark" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round">
																<path d="M35 31l-6-6-6 6V7h12v24z"></path>
																<path d="M35 9h6v38H11a4 4 0 0 1-4-4V5" stroke-linejoin="round"></path>
																<path d="M39 9V1H11a4 4 0 0 0 0 8h12" stroke-linejoin="round"></path>
															</g>
														</svg>
													</div>
												</div>
											</div>
											<div className="intercom-force-break flex w-full flex-1 flex-col text-body-primary-color max-w-oneColWidth justify-center sm:pl-5" dir="ltr">
												<div>
													<h2 className="-mt-1 mb-0.5 line-clamp-2 text-md font-semibold leading-normal text-body-primary-color transition ease-linear group-hover/collection-summary:text-primary sm:line-clamp-1" data-testid="collection-name">Affiliate Program</h2>
													<p className="mb-0 mt-0 line-clamp-3 text-md sm:line-clamp-1">Information regarding our affiliate program</p>
												</div>
												<div className="mt-3">
													<div className="flex gap-2">
														<div className="flex flex-row">
															<div className="flex shrink-0 flex-col items-center justify-center rounded-full leading-normal sm:flex-row o__ltr" data-testid="avatars"><img width="24" height="24" src="https://static.intercomassets.com/avatars/5197223/square_128/0x0_%281%29-1673907572.png" alt="TopTier Trader avatar" className="inline-flex items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-white shadow-solid-2 shadow-body-border [&amp;:nth-child(n+2)]:hidden lg:[&amp;:nth-child(n+2)]:inline-flex h-6 w-6 z-4" /></div>
														</div>
														<span className="line-clamp-1 flex flex-row items-center text-base text-body-secondary-color">
															<span className="hidden sm:inline">By TopTier</span><span className="inline sm:hidden">1 author</span>
															<svg width="4" height="4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="m-2">
																<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"></path>
															</svg>
															3 articles
														</span>
													</div>
												</div>
											</div>
										</div>
									</a>
								</div> */}
							</div>
						</div>
					</section>
				</section>
			</div>
			<footer id="footer" className="footer bg-footer-bg text-footer-color">
				<div className="shrink-0 grow basis-auto px-5 sm:px-10">
					<div className="content">
						<div dir="ltr">
							<div className="footer__logo text-footer-color"><a href="/en/"><img data-testid="logo-img" src="https://downloads.intercomcdn.com/i/o/339421/5d0354cd3a31986bfaf54e1d/f2a3e2cdfcd827a990fc64083316e959.png" alt="Top Tier Funding LLC Help Center" className="inline" /></a></div>
							<div className="mb-10 mt-4">
								<ul data-testid="custom-links" className="mb-4 p-0 text-center" id="custom-links">
									<li className="mx-2 inline-block list-none"><a target="_blank" href="https://www.toptiertrader.com" rel="nofollow noreferrer noopener" data-testid="footer-custom-link-0">Main Site</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</main>
	)
}

export default FaqOne