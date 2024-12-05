import React, { useState, useEffect } from "react";
import * as Babel from "@babel/standalone";
import { WsProvider, ApiPromise } from "@polkadot/api";
import {
  web3Enable,
  web3Accounts,
  web3FromSource,
  web3FromAddress,
} from "@polkadot/extension-dapp";

export function stringToJsx(jsxCode: string) {
  try {
    const imports = {
      React,
      useState,
      useEffect,
      WsProvider,
      ApiPromise,
      web3Enable,
      web3Accounts,
      web3FromSource,
      web3FromAddress,
    };

    const sanitizedCode = jsxCode.replace(
      /import\s+(?:([\w{}*,\s]+)\s+from\s+)?['"]([^'"]+)['"];/g,
      (match, imported, source) => {
        if (source === "react") {
          imports.React = React;
          if (imported.includes("useState")) {
            imports.useState = useState;
          }
        } else if (source === "@polkadot/api") {
          imports.WsProvider = WsProvider;
          imports.ApiPromise = ApiPromise;
        } else if (source === "@polkadot/extension-dapp") {
          imports.web3Enable = web3Enable;
          imports.web3Accounts = web3Accounts;
          imports.web3FromSource = web3FromSource;
          imports.web3FromAddress = web3FromAddress;
        }
        return "";
      }
    );

    console.log("sanitizedCode", sanitizedCode);

    // Transform JSX to JavaScript
    const transformedCode = Babel.transform(sanitizedCode, {
      presets: ["react"],
    }).code;

    // Wrap the transformed code in a function
    const Component = new Function(
      ...Object.keys(imports),
      `${transformedCode}; return MiniApp;`
    )(...Object.values(imports));

    return <Component />;
  } catch (error) {
    console.error("Failed to create component from JSX:", error);
    return <div>Error rendering the component.</div>;
  }
}
