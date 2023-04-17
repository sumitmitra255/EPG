import React from "react";

import { fetchChannels, fetchEpg } from "./helpers";

import { useEpg } from "planby";

// Import themea
import { theme } from "./helpers/theme";

export function useApp() {
  const [channels, setChannels] = React.useState([]);
  const [epg, setEpg] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const channelsData = React.useMemo(() => channels, [channels]);
  const epgData = React.useMemo(() => epg, [epg]);

  const { getEpgProps, getLayoutProps } = useEpg({
    channels: channelsData,
    epg: [],
    dayWidth: 7200,
    sidebarWidth: 100,
    itemHeight: 80,
    isSidebar: true,
    isTimeline: false,
    isLine: false,
    // startDate: "2023-04-17T00:00:00",
    // endDate: "2023-04-18T24:00:00",
    isBaseTimeFormat: true,
    theme
  });

  const handleFetchResources = React.useCallback(async () => {

    setIsLoading(true);
    const epg = await fetchEpg();
    // console.log(epg)
    const channels = await fetchChannels();
    setEpg(epg);
    setChannels(channels);
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    handleFetchResources();
  }, [handleFetchResources]);

  return { getEpgProps, getLayoutProps, isLoading };
}
