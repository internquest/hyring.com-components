import Image from "next/image";

import Optionsbar from "./components/Optionsbar";
import Options from "./components/Options";
import Marqueecompo from "./components/Marqueecompo";
import Workflowinfo from "./components/Workflowinfo";
import Faqs from "./components/Faqs";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-space-grotesk)]">
    <div>
      <div className=" bg-[#f8f8f8] px-2 font-SpaceGrotesk md:px-4 text-black">
        <div class="mx-auto max-w-[1280px] py-12 md:py-[100px]">
          <h2 class="max-auto px-5 text-center text-[34px]/[40px] font-bold tracking-[-0.5px] md:px-10 md:text-[50px]/[56px]">The upgrade you didn’t know you needed</h2>


          <Options />


        </div>
      </div>

      <div class="mb-12 bg-[#f8f8f8] px-2 md:mb-[100px] md:px-4">
        <div class="mx-auto w-full max-w-[1280px]">
          <div class="sticky top-5 md:top-3">
            <div class="pb-[30px] md:pb-[45px]">
              <Marqueecompo />
            </div>
          </div>


        </div>
      </div>

      <div class="relative w-full bg-[#e9ebe6] pt-12 lg:pt-16 xl:pt-20 pb">
        <div class="flex-center justify-center w-full px-4 lg:px-5 xl:px-8">
          <section class="w-full max-w-[1152px]">
            <div class="flex flex-col">
              <h1 class="text-center font-SpaceGrotesk text-[34px]/[36px] font-bold tracking-[-0.5px] text-secondary md:text-[40px]/[40px] lg:text-[44px]/[40px] xl:text-[50px]/[35px]">Feature packed screener</h1>
              <p class="mt-4 text-center font-SpaceGrotesk text-xl/[26px] font-normal tracking-[-0.5px] text-primary2 md:mt-5 md:text-[22px] lg:text-2xl">We ship a feature every week.</p>
              <div class="mt-[52px] flex h-full w-full flex-col items-center  overflow-hidden rounded-[14px] border border-[rgb(207_212_208)] bg-white lg:max-h-[480px] lg:flex-row ">
                <div class="flex w-full basis-1/2 bg-white">
                  <div class="w-full px-5 pb-7 pt-10 lg:px-10 lg:pb-0 lg:pt-0">
                    <p class="w-full font-SpaceGrotesk text-xl font-bold tracking-[-0.01em] text-active lg:max-w-[434px] lg:text-2xl">Detailed data-driven tech &amp; soft-skills reports</p>
                    <p class="mt-3 w-full text-black font-SpaceGrotesk text-sm font-normal tracking-[-0.01em] lg:mt-4 lg:max-w-[480px] lg:text-lg/6">Data-driven evaluation eliminates bias—helping companies reduce turnover by <span class="font-bold">3x</span> and improve candidate quality by <span class="font-bold">1.5x.</span>
                    </p>
                  </div>
                </div>
                <div class="flex-center w-full basis-1/2 !bg-[#F3F5F0]">

                  <Image src={'https://screener.hyring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FScoreResultImage.6338a738.png&w=640&q=75'} alt="" width={554} height={480} className="text-transparent" />

                </div>


              </div>
              <div class="mt-5 flex w-full flex-col items-center justify-center gap-5 lg:mt-[22px] lg:flex-row xl:gap-8">
                <div class="flex w-full basis-1/2">
                  <div class="h-full w-full overflow-hidden rounded-[14px] border border-disable bg-[#F3F5F0] lg:max-h-[480px] lg:min-h-[480px] lg:max-w-[560px]">
                    <div class="w-full border-b border-disable !bg-white pb-4 pl-5 pr-4 pt-8 lg:pb-[26px] lg:pl-9 lg:pt-[42px]">
                      <p class="font-SpaceGrotesk text-xl font-bold tracking-[-0.01em] text-active lg:text-2xl/[18px]">Remote Proctoring</p>
                      <p class="mt-2 w-full font-SpaceGrotesk text-black text-sm font-normal tracking-[-0.01em] text-primary4 lg:mt-[11px] lg:max-w-[455px] lg:text-lg/6">With 10+ parameters, we minimize cheating on interviews</p>
                    </div>
                    <div class="flex-center w-full bg-[#F3F5F0] px-2.5 pb-2 pt-2 xl:pt-0">
                      <Image src={'https://screener.hyring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRemoteProctoringImage.d69d1ca2.png&w=640&q=75'} width={515} height={515} className="text-transparent" />
                    </div>
                  </div>
                </div>

                <div class="flex h-full w-full basis-1/2">
                  <div class="h-full w-full overflow-hidden rounded-[14px] border border-disable bg-[#F3F5F0] lg:max-h-[480px] lg:min-h-[480px] lg:max-w-[560px]">
                    <div class="w-full border-b border-disable !bg-white pb-4 pl-5 pr-4 pt-8 lg:pb-[26px] lg:pl-9 lg:pt-[42px]">
                      <p class="font-SpaceGrotesk text-xl font-bold tracking-[-0.01em] text-active lg:text-2xl/[18px]">Team Members</p>
                      <p class="mt-2 w-full font-SpaceGrotesk text-sm text-black font-normal tracking-[-0.01em] text-primary4 lg:mt-[11px] lg:max-w-[455px] lg:text-lg/6">Add upto 2 of your team members to access the candidate responses</p>
                    </div>
                    <div class="flex-center h-full w-full bg-[#F3F5F0] px-4 py-[22px] lg:pb-14 lg:pt-5">


                      <Image src={'https://screener.hyring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTeamMembersImage.e55955cc.png&w=640&q=75'} alt="" width={410} height={410} className="text-transparent" />
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>
        </div>

        <div class="relative bg-[#F8F8F8]">
          <div class="h-20 w-full rounded-b-[50%_50px] bg-[#E9EBE6] lg:h-32 lg:rounded-b-[70%_150px] xl:h-40"></div>
        </div>
      </div>

      <div class="w-full md:px-5 xl:px-8 bg-[#f8f8f8] xl:pt-[80px]" >
        <div class="relative mx-auto flex h-[470px] w-full max-w-[1280px] overflow-hidden px-4 !font-SpaceGrotesk md:rounded-[16px] md3:rounded-[20px]">
          <Image src={'https://screener.hyring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHomeGreenBg.5b1fbade.png&w=1920&q=75'} alt="background-image" fill className="absolute h-full w-full object-cover text-transparent " />
          <div class="absolute -left-[86px] -top-[80px] h-[219px] w-[219px] rounded-full bg-[#9CE56D] opacity-40 blur-[70px]"></div>
          <div class="absolute -bottom-[180px] -right-[92px] h-[219px] w-[219px] rounded-full bg-[#9CE56D] opacity-50 blur-[80px]"></div>
          <Workflowinfo />
          <div class="z-10 flex w-full flex-col pt-10 xs:w-2/3 sm:justify-center sm:pt-0 md:pl-5 md3:w-1/2 lg:pl-10 lg3:pl-24"><h1 class="mb-5 text-[34px]/[40px] font-bold tracking-[-0.5px] text-grey98 md3:text-[42px]/[48px] lg2:whitespace-nowrap lg3:text-[50px]/[56px]">Fits right into your workflow</h1><p class="text-wrap text-[20px] tracking-[-0.5px] text-[#F5F5F5] md3:text-2xl">We have Zapier, Whatsapp and Slack integrations as of now.</p></div>

        </div>
      </div>


      <Faqs />


    </div>

  );
}
