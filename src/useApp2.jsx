import React from "react";

import { fetchChannels, fetchEpg } from "./helpers";

import { useEpg } from "planby";

// Import theme
// import { theme } from "./helpers/theme2";
export const theme = {
   primary: {
      600: "#1a202c",
      900: "#191919 "
   },
   grey: { 300: "#d1d1d1" },
   white: "#fff",
   green: {
      300: " #FC3E30 "
   },
   scrollbar: {
      // border: "#ffffff",
      thumb: {
         bg: "#e1e1e1"
      }
   },
   loader: {
      teal: "#5DDADB",
      purple: "#3437A2",
      pink: "#F78EB6",
      bg: "#171923db"
   },
   gradient: {
      blue: {
         300: "#002eb3",
         600: "#002360",
         900: "#051937"
      }
   },

   text: {
      grey: {
         300: "#FFFFFFDD",
         500: "#718096"
      }
   },

   timeline: {
      divider: {
         bg: "#718096"
      }
   }
};
export function useApp2() {
  const [channels, setChannels] = React.useState([]);
  const [epg, setEpg] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const channelsData = React.useMemo(() => channels, [channels]);
   const epgData = React.useMemo(() => epg, [epg]);
   // console.log("epgdata",epgData)
  
  const { getEpgProps, getLayoutProps } = useEpg({
    channels: channelsData,
    epg: epgData,
    dayWidth: 7200,
    sidebarWidth: 100,
    itemHeight: 80,
    isSidebar: false,
    isTimeline: true,
    isLine: true,
    // startDate: "2023-04-17T00:00:00",
    // endDate: "2023-04-18T24:00:00",
    isBaseTimeFormat: true,
    theme
  });
  const getEpgProps2 = getEpgProps
   const getLayoutProps2 = getLayoutProps
  const isLoading2=isLoading
  const handleFetchResources = React.useCallback(async () => {

    setIsLoading(true);
    const epg = await fetchEpg();
   //  console.log(epg)
    const channels = await fetchChannels();
    setEpg(epg);
    setChannels(channels);
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    handleFetchResources();
  }, [handleFetchResources]);

  return { getEpgProps2, getLayoutProps2, isLoading2 };
}
