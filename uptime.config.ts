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
      name: 'Blog',
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
    // jellyfin.siki.moe
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'jellyfin',
      // `name` is used at status page and callback message
      name: 'Media Streaming',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://jellyfin.siki.moe',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://jellyfin.siki.moe',
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
    },
    // reader.siki.moe
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'reader',
      // `name` is used at status page and callback message
      name: 'RSS Reader',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://reader.siki.moe',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://reader.siki.moe',
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
    },
    // music.siki.moe
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'music',
      // `name` is used at status page and callback message
      name: 'Music Streaming',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://music.siki.moe',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://music.siki.moe',
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
    },
    // qb.siki.moe
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'qb',
      // `name` is used at status page and callback message
      name: 'Bittorrent',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://qb.siki.moe',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://qb.siki.moe',
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
    },
    // rsshub.siki.moe
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'rsshub',
      // `name` is used at status page and callback message
      name: 'RSSHub',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://rsshub.siki.moe',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://rsshub.siki.moe',
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
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
