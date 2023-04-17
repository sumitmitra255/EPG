import React from "react";

import { Epg, Layout } from "planby";

// Import hooks
import { useApp2 } from "./useApp2.jsx";
import { useApp } from "./useApp.jsx";
// Import components
import { Timeline, ChannelItem, ProgramItem } from "./components";

function App() {
  const { isLoading, getEpgProps, getLayoutProps } = useApp();
  const { isLoading2, getEpgProps2, getLayoutProps2 } = useApp2();
  return (
    <div style={{ display: "flex" }}>
      <div style={{ height: "80vh", width: "100px" }}>
        <Epg isLoading={isLoading} {...getEpgProps()}>
          <Layout
            {...getLayoutProps()}
            // renderTimeline={(props) => <Timeline {...props} />}
            // renderProgram={({ program, ...rest }) => (
            //   <ProgramItem key={program.data.id} program={program} {...rest} />
            // )}
            renderChannel={({ channel }) => (
              <ChannelItem key={channel.uuid} channel={channel} />
            )}
          />
        </Epg>
      </div>
      <div style={{ height: "80vh", width: "100%" }}>
        <Epg isLoading={isLoading} {...getEpgProps2()}>
          <Layout
            {...getLayoutProps2()}
            renderTimeline={(props) => <Timeline {...props} />}
            renderProgram={({ program, ...rest }) => (
              <ProgramItem key={program.data.id} program={program} {...rest} />
            )}
          // renderChannel={({ channel }) => (
          //   <ChannelItem key={channel.uuid} channel={channel} />
          // )}
          />
        </Epg>
      </div>
    </div>
  );
}

export default App;
