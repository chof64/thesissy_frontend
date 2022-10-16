import React from "react";
import { useRouter } from "next/router";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

import "/src/styles/globals.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const router = useRouter();
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return getLayout(
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <button
        onClick={async () => {
          await supabaseClient.auth.signOut();
          router.push("/");
        }}
      >
        Logout
      </button>
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}
