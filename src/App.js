import React from 'react';
import Pipeline from './components/Pipeline';

const App = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#293038] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Codelab</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal" href="#">Dashboard</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">CI/CD</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Feature Flags</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Incidents</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Security</a>
            </div>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#338ae6] text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">New</span>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/357ebc93-5605-425c-9317-11f3c48be46e.png")' }}
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-white tracking-light text-[32px] font-bold leading-tight">CI/CD</p>
                <p className="text-[#9daab8] text-sm font-normal leading-normal">codelab/codelab</p>
              </div>
            </div>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Pipeline #35</h3>
            <Pipeline />
            <div className="flex flex-col gap-3 p-4">
              <div className="flex gap-6 justify-between">
                <p className="text-white text-base font-medium leading-normal">Build and Test</p>
              </div>
              <div className="rounded bg-[#3c4753]">
                <div className="h-2 rounded bg-white" style={{ width: '80%' }}></div>
              </div>
              <p className="text-[#9daab8] text-sm font-normal leading-normal">2 of 4 tasks complete</p>
            </div>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Error log</h3>
            <div className="flex gap-4 bg-[#111418] px-4 py-3 justify-between">
              <div className="flex items-start gap-4">
                <div className="text-white flex items-center justify-center rounded-lg bg-[#293038] shrink-0 size-12" data-icon="Terminal" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M117.31,134l-72,64a8,8,0,1,1-10.63-12L100,128,34.69,70A8,8,0,1,1,45.32,58l72,64a8,8,0,0,1,0,12ZM216,184H120a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"></path>
                  </svg>
                </div>
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-white text-base font-medium leading-normal">TypeError: Cannot read property 'toBe' of undefined</p>
                  <p className="text-[#9daab8] text-sm font-normal leading-normal">at /app/test/index.ts:12:1</p>
                  <p className="text-[#9daab8] text-sm font-normal leading-normal">at runTests (/app/src/runTests.js:56:12)</p>
                  <p className="text-[#9daab8] text-sm font-normal leading-normal">at execute (/app/src/index.js:34:8)</p>
                  <p className="text-[#9daab8] text-sm font-normal leading-normal">at processTicksAndRejections (node:internal/process/task_queues:96:5)</p>
                </div>
              </div>
              <div className="shrink-0">
                <p className="text-[#9daab8] text-sm font-normal leading-normal">2022-04-17T12:34:56Z</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

