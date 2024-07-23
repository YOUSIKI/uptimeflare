const pageConfig = {
  // Title for your status page
  title: "Status of siki.moe",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://www.siki.moe/', label: 'HomePage' },
    { link: 'https://github.com/yousiki', label: 'GitHub' },
    { link: 'mailto:me@siki.moe', label: 'Email', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed.
  kvWriteCooldownMinutes: 3,
  // Define all your monitors here
  monitors: [
    // www.siki.moe
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'www',
      // `name` is used at status page and callback message
      name: 'Home Page',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://www.siki.moe',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://www.siki.moe',
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      responseKeyword: 'siki',
    },
    // git.siki.moe
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'git',
      // `name` is used at status page and callback message
      name: 'Git Server',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://git.siki.moe',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://git.siki.moe',
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      responseKeyword: 'GitSiki',
    },
    // memos.siki.moe
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'git',
      // `name` is used at status page and callback message
      name: 'Memos',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://memos.siki.moe',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://memos.siki.moe',
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
    },
    // mikan.siki.moe
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'mikan',
      // `name` is used at status page and callback message
      name: 'MikanAnime Proxy',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://mikan.siki.moe',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://mikan.siki.moe',
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      responseKeyword: 'mikan',
    },
    // github.siki.moe
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'github',
      // `name` is used at status page and callback message
      name: 'GitHub Proxy',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://github.siki.moe/https://raw.githubusercontent.com/YOUSIKI/yousiki/main/README.md',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://github.siki.moe',
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      responseKeyword: 'YouSiki',
    },
  ],
  notification: {
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
